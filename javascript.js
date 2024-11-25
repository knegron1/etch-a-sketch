// creates a variable for the grid container
const container = document.querySelector(".container");
// creates a variable for the number of divs in each row/column of the grid, initialized at 16
let gridNumber = 16;
// creates a variable to store the current grid items
let gridItems;

// function which creates a div grid and adds a "gridItems" class to each new div element
function createGrid() {
    for (i = 0; i < (gridNumber * gridNumber); i++) {
        const div = document.createElement("div");
        div.classList.add("gridItems")
        container.appendChild(div);
    }
}

//function which finds the current list of gridItems
function currentGridItems() {
    gridItems = document.querySelectorAll(".gridItems");
}

// function which adds event listeners to each div in grid to change the color if hovered over
function gridHover() {
    gridItems.forEach((item, index) => {
        item.addEventListener("mouseenter", () => item.style.backgroundColor = "lightblue" );
        item.addEventListener("mouseleave", () => item.style.backgroundColor = "black");
    })
}

// function which calculates the new flex basis of a new grid
function newFlexBasis() {
    const itemWidth = (960 - (gridNumber - 1) * 10 ) / gridNumber; // gets the size of each item, subtracting the gap space
    const basis = (itemWidth / 960) * 100; // calculates the percentage that the new flex basis will be
    return basis;
}


// call upon functions to create the initial grid, get list of grid items, and add hovering effect on items
createGrid();
currentGridItems();
gridHover();

// adds event listener to button to prompt user for new grid, and populates that new grid
const button = document.querySelector("button");
button.addEventListener("click", () => {
    let userInput = prompt("Please enter the number of items you want in each row/column for the new grid.");
    if (userInput > 100) {
        alert("Input cannot be greater than 100.");
    }
    else {
        gridItems.forEach(div => div.remove());
        gridNumber = userInput;
        createGrid();
        currentGridItems();
        gridHover();
        gridItems.forEach(div => div.style.flexBasis = `${newFlexBasis()}%`);
    }
})