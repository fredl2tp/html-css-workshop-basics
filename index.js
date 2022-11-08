const nav = document.querySelector(".nav");
nav.style.display = "flex";
nav.style.justifyContent = "center";
const navbar = document.querySelector(".navbar");
navbar.style.backgroundColor = "red";
const header = document.querySelector("header");
header.style.backgroundImage =
  "URL('https://images.unsplash.com/photo-1585468274952-66591eb14165?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80')";
const about = document.querySelector(".about");
about.style.color = "green";
const para1 = document.querySelector(".para1");
para1.style.fontSize = "20px";
para1.style.fontFamily = "thaoma";
const boxArticle = document.querySelector("#featured-posts");
boxArticle.style.display = "flex";
boxArticle.style.flexDirection = "column";
const article = document.querySelectorAll("article");
article.forEach((element) => {
  element.style.height = "200px";
});

const newDiv = document.createElement("div");
newDiv.innerText = "de Marseille";
const footDiv = document.querySelector("footer");
footDiv.appendChild(newDiv);
newDiv.style.marginLeft = "7px";
footDiv.style.display = "flex";
footDiv.style.justifyContent = "left";
