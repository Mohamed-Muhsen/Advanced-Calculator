document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    let currentInput = '';
    
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const id = this.id;

            if (id === "clear") {
                currentInput = '';
                display.innerText = '';
            } else if (id === "backspace") {
                currentInput = currentInput.slice(0, -1);
                display.innerText = currentInput;
            } else if (id === "equal") {
                try {
                    currentInput = currentInput.replace(/sin/g, 'Math.sin')
                                              .replace(/cos/g, 'Math.cos')
                                              .replace(/tan/g, 'Math.tan')
                                              .replace(/√/g, 'Math.sqrt')
                                              .replace(/log/g, 'Math.log10')
                                              .replace(/ln/g, 'Math.log')
                                              .replace(/exp/g, 'Math.exp')
                                              .replace(/pow/g, 'Math.pow')
                                              .replace(/abs/g, 'Math.abs')
                                              .replace(/sinh/g, 'Math.sinh')
                                              .replace(/cosh/g, 'Math.cosh')
                                              .replace(/tanh/g, 'Math.tanh')
                                              .replace(/asin/g, 'Math.asin')
                                              .replace(/acos/g, 'Math.acos')
                                              .replace(/atan/g, 'Math.atan')
                                              .replace(/÷/g, '/')
                                              .replace(/×/g, '*')
                                              .replace(/%/g, '/100');
                    display.innerText = eval(currentInput);
                    currentInput = display.innerText;
                } catch (e) {
                    display.innerText = "Error";
                    currentInput = '';
                }
            } else if (id === "pow") {
                currentInput += '**';
                display.innerText = currentInput;
            } 
            else if (currentInput.endsWith('abs(')) {
                currentInput += this.innerText;
            }else {
                currentInput += this.innerText;
                display.innerText = currentInput;
            }
        });
    });
});
