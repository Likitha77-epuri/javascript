const express = require("express");
const sqlite3 = require("sqlite3");
const { open } = require("sqlite");
const path = require("path");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());

const dbPath = path.join(__dirname, "userData.db");

let db = null;

// Database and Server Initialization
const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });

    app.listen(3000, () => {
      console.log("Server Running at http://localhost:3000/");
    });
  } catch (e) {
    console.log(`DB Error: ${e.message}`);
    process.exit(1);
  }
};

initializeDBAndServer();


// API 1 - Register User
app.post("/register", async (request, response) => {
  const { username, name, password, gender, location } = request.body;

  const checkUserQuery = `
    SELECT * FROM user
    WHERE username = '${username}';
  `;

  const dbUser = await db.get(checkUserQuery);

  if (dbUser !== undefined) {
    response.status(400);
    response.send("User already exists");
  } else {
    if (password.length < 5) {
      response.status(400);
      response.send("Password is too short");
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);

      const createUserQuery = `
        INSERT INTO user(username, name, password, gender, location)
        VALUES(
          '${username}',
          '${name}',
          '${hashedPassword}',
          '${gender}',
          '${location}'
        );
      `;

      await db.run(createUserQuery);

      response.send("User created successfully");
    }
  }
});


// API 2 - Login
app.post("/login", async (request, response) => {
  const { username, password } = request.body;

  const getUserQuery = `
    SELECT * FROM user
    WHERE username = '${username}';
  `;

  const dbUser = await db.get(getUserQuery);

  if (dbUser === undefined) {
    response.status(400);
    response.send("Invalid user");
  } else {
    const isPasswordMatched = await bcrypt.compare(
      password,
      dbUser.password
    );

    if (isPasswordMatched) {
      response.send("Login success!");
    } else {
      response.status(400);
      response.send("Invalid password");
    }
  }
});


// API 3 - Change Password
app.put("/change-password", async (request, response) => {
  const { username, oldPassword, newPassword } = request.body;

  const getUserQuery = `
    SELECT * FROM user
    WHERE username = '${username}';
  `;

  const dbUser = await db.get(getUserQuery);

  const isOldPasswordMatched = await bcrypt.compare(
    oldPassword,
    dbUser.password
  );

  if (!isOldPasswordMatched) {
    response.status(400);
    response.send("Invalid current password");
  } else {
    if (newPassword.length < 5) {
      response.status(400);
      response.send("Password is too short");
    } else {
      const hashedNewPassword = await bcrypt.hash(newPassword, 10);

      const updatePasswordQuery = `
        UPDATE user
        SET password = '${hashedNewPassword}'
        WHERE username = '${username}';
      `;

      await db.run(updatePasswordQuery);

      response.send("Password updated");
    }
  }
});

module.exports = app;