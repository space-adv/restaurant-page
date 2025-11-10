export default function menuPage() {
    const content = document.createElement("div");

    const heading = document.createElement("h1");
    heading.textContent = "Our Menu!";

    const list = document.createElement("ul");
    
    const items = ["Burger", "Pasta", "Steak", "Dessert"];
    items.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });

    content.appendChild(heading);
    content.appendChild(list);

    return content;
};