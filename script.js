let data = {
  name: "Rahul Attuluri"
};

let options = {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "Bearer ACCESS-TOKEN"
  },
  body: JSON.stringify(data)
};

fetch("https://gorest.co.in/public-api/users/1359", options)
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonData) {
    console.log(jsonData);
  });