document.addEventListener('DOMContentLoaded', function () {

    const keys = document.querySelector('.buttons_Sec')
    const display = document.querySelector('.resultValue')
    const calculatedVlaue = document.querySelector('.calculatedVlaue')

    keys.addEventListener('click', e => {
        if (e.target.matches('button')) {
            const key = e.target
            const action = key.dataset.perform
            const keyContent = key.textContent
            const displayedNum = display.textContent

            if (!action) {
                if (displayedNum === '0') {
                    display.textContent = keyContent
                } else {
                    display.textContent = displayedNum + keyContent
                }
            }


            if (action === 'add') {
                writeKey('+');
            }

            if (action === 'subtract') {
                writeKey('-');
            }

            if (action === 'multiply') {
                writeKey('*');
            }

            if (action === 'divide') {
                writeKey('/');
            }

            function writeKey(writtenKey) {
                if (displayedNum === '0') {
                    display.textContent = "0";
                } else {
                    display.textContent = displayedNum + writtenKey;
                }
            }



            if (action === 'dot') {
                display.textContent = displayedNum + '.'
            }

            if (action === 'clearAll') {
                display.textContent = '0'
            }

            if (action === 'backSpace') {
                if (displayedNum.length === 1) {
                    if (displayedNum === '0') {
                        display.textContent = '0'
                    } else {
                        display.textContent = '0'
                    }
                } else {
                    display.textContent = displayedNum.slice(0, -1)
                }
            }

            if (action === 'calculate') {
                calculatedVlaue.textContent = displayedNum;
                display.textContent = eval(displayedNum)
            }


        }
    });


    (function () {
        // if resultValue clicked it has to become editable
        // if not resultValue it has to become uneditable
        const resultValue = document.querySelector('.resultValue');
        resultValue.addEventListener('click', () => {
            resultValue.contentEditable = true;
        });
        // Function to check if the input is a valid character
        function isAllowedInput(event) {
            const char = String.fromCharCode(event.which);
            if (!/[0-9+\-*/.]/.test(char)) {
                event.preventDefault();
            }
        }
        // Listen for keypress events and allow only numbers, +, -, *, /, and .
        resultValue.addEventListener('keypress', isAllowedInput);
        // Listen for input events to ensure only allowed characters are present
        resultValue.addEventListener('input', () => {
            resultValue.textContent = resultValue.textContent.replace(/[^0-9+\-*/.]/g, '');
        });

    })();


});
