const keypad = document.querySelector(".keypad");

// Create keypad buttons with ids
for (let i = 0; i < 6; i++) {
    const button = document.createElement("div");
    button.classList.add("button");
    button.dataset.id = i;

    button.addEventListener("click", () => {
        button.classList.toggle("active");
    });

    keypad.appendChild(button);
}