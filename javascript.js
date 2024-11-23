const container = document.querySelector(".container");

// creates a 16x16 div grid
for (i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("gridItems")
    container.appendChild(div);
}

// adds event listeners to each div in grid to change the color if hovered over
const gridItems = document.querySelectorAll(".gridItems");
gridItems.forEach((item, index) => {
    item.addEventListener("mouseenter", () => item.style.backgroundColor = "blue" );
    item.addEventListener("mouseleave", () => item.style.backgroundColor = "black");
})