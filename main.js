import { navBarDiv } from "./componente1/componente.js";


let DOM = document.querySelector("#root");

let navBar = document.createElement('header');
navBar.className = "nav-bar";
navBar.appendChild(navBarDiv);
DOM.appendChild(navBar);