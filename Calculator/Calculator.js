let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let y='';

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', function (event) {
        y=event.target.innerHTML;
        if (y == '=') {
            string = eval(string);
            input.value = string;
        }

        else if (y == 'AC') {
            string = "";
            input.value = string;
        }
        else if (y == 'DEL') {
            string = string.substring(0,string.length - 1);
            input.value = string;
        }
        else {
            string += y;
            input.value = string;
        }

    })
})