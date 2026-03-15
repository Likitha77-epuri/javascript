let smallScreenElement=document.getElementById("seasonSmallImage");
let mediumScreenElement=document.getElementById("seasonMediumImage");
let springsmallImage="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-xs-img.png";
let springMediumImage="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-md-img.png";
let summersmallImage="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-xs-img.png";
let summerMediumImage="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-md-img.png";
let autumnsmallImage="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-xs-img.png";
let autumnmediumImage="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-md-img.png";
let wintersmallImage="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-xs-img.png";
let wintermediumImage="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-md-img.png";

function springImage(){
    smallScreenElement.src=springsmallImage;
    mediumScreenElement.src=springMediumImage;
}
function summerImage(){
    smallScreenElement.src=summersmallImage;
    mediumScreenElement.src=summerMediumImage;
}
function autumnImage(){
    smallScreenElement.src=autumnsmallImage;
    mediumScreenElement.src=autumnmediumImage;
}
function winterImage(){
    smallScreenElement.src=wintersmallImage;
    mediumScreenElement.src=wintermediumImage;
}