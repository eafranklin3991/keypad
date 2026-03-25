import Keypad from "./classes/Keypad.js";

const keypad = document.querySelector(".keypad");
const passCode = new Keypad().passCode;
let currentStep = 0;

// Create keypad buttons with ids
for (let i = 0; i < 6; i++) {
    const button = document.createElement("div");
    button.classList.add("button");
    button.dataset.id = i;

    button.addEventListener("click", () => {
        const buttonId = parseInt(button.dataset.id);

        if (buttonId === passCode[currentStep]) {
            // Correct button pressed
            button.classList.add("active");
            currentStep++;

            if (currentStep === passCode.length) {
                // All buttons pressed correct order
                console.log("Access granted!");
                currentStep = 0;
            }

        } else {
            // Wrong button - reset all active states
            document.querySelectorAll(".button").forEach(btn => {
                btn.classList.remove("active");
            });
            currentStep = 0;
        }
    });

    keypad.appendChild(button);
}

console.log(passCode);