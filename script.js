const keypad = document.querySelector(".keypad");

// Create keypad buttons
for (let i = 0; i < 4; i++) { // rows
    for (let j = 0; j < 3; j++) { // cols
    const button = document.createElement("div");
    button.classList.add("button");
    button.dataset.col = j;
    button.dataset.row = i;

    button.addEventListener("click", () => {
        button.classList.toggle("active");
    });

    keypad.appendChild(button);
    }
}