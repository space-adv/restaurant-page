import "./style.css";
import homePage from "./home.js";
import menuPage from "./menu.js";
import contactPage from "./contact.js";

function clearContent() {
    const content = document.getElementById("content");
    content.innerHTML = "";
}

function webInit() {
    const content = document.getElementById("content");

    content.appendChild(homePage());

    const homeBtn = document.getElementById("home");
    const menuBtn = document.getElementById("menu");
    const contactBtn = document.getElementById("contact");

    homeBtn.addEventListener("click", () => {
        clearContent();
        content.appendChild(homePage());
    });

    menuBtn.addEventListener("click", () => {
        clearContent();
        content.appendChild(menuPage());
    });

    contactBtn.addEventListener("click", () => {
        clearContent();
        content.appendChild(contactPage());
    });
}

webInit();