export default function homePage() {
    const content = document.createElement("div");
    
    const heading = document.createElement("h1");
    heading.textContent = "Welcome to restaurant";

    const description = document.createElement("p");
    description.textContent = "Serving high quality delicious food."

    content.appendChild(heading);
    content.appendChild(description);

    return content;
}