export default function contactPage() {
    const content = document.createElement("div");

    const heading = document.createElement("h1");
    heading.textContent = "Contact Us";

    const phone = document.createElement("p");
    phone.textContent = "1-800-GET-FOOD";

    const email = document.createElement("p");
    email.textContent = "restaurant@food.com";

    const address = document.createElement("p");
    address.textContent = "Somewhere in the observable universe.";

    content.appendChild(heading);
    content.appendChild(phone);
    content.appendChild(email);
    content.appendChild(address);

    return content;
}