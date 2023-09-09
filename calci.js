document.addEventListener("DOMContentLoaded", function () {
    const result = document.getElementById("result");
    const buttons = document.querySelectorAll("button");
    let currentInput = "";

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const value = button.textContent;

            if (value === "=") {
                try {
                    currentInput = eval(currentInput);
                    result.value = currentInput;
                } catch (error) {
                    result.value = "Error";
                }
            } else if (value === "C") {
                currentInput = "";
                result.value = "";
            } else {
                currentInput += value;
                result.value = currentInput;
            }
        });
    });
});

