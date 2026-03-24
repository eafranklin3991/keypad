const keypad = document.querySelector(".keypad");

// Create keypad buttons
for (let i = 0; i < 4; i++) { // cols
    for (let j = 0; j < 3; j++) { // rows
    const button = document.createElement("div");
    button.classList.add("button");
    button.dataset.row = j;
    button.dataset.col = i;

    button.addEventListener("click", () => {
        button.classList.add("active");
    });

    keypad.appendChild(button);
    }
}