console.log("Hello developer!");

let message;

message = "Hello Daniyar";

let $_last_name = "Tashim";

let age_1 = 35;
let myFullName = "Tashim Daniyar";
const nation = "Qazaq";
let apple = "Alma";
let Apple = "Alma";

console.log("My name is " + myFullName + " Im " + age_1 + " years old " + " my nation is " + nation + " I like " + apple + " and again I like " + Apple);
console.log(message + " " + $_last_name);

//Numbers

let number_1 = 666;
let number_2 = 0xFF; //это будет 255 в 16-ричной системе счисления так как A-10,B-11,C-12,D-13,E-14,F-15;
let number_3 = 0.15; // это float  с запятой;
let number_4 = 0b101; // это двоичная система;
let number_5 = 0o11; // это 8-ричная;
console.log(number_4 + " " + number_5);
let numb = Infinity;
let numb_1 = -Infinity;
let numb_2 = NaN;

//Logic boolean

let logic = false;
let logic_1 = true;
let variable = null;
//undefined
let variable_1 = undefined;

//оператор type0f

console.log(typeof logic);
console.log(typeof(variable));

//console.log(5=="5"); //true;
console.log(5==="5"); //false;

const line = "line";
const newLine = "new";
console.log(`This is ${line} and this is \n${newLine} line`);

const a = 10;
const b = 20;

console.log(`${a+b}`);

//if else

let x = 10;
let y = 9;

if(x>y) {
    console.log(x>y);
} else {
    console.log(y>x);
}

//switch
let first = "first";
let second = "second";
let third = "third";

switch(third) {  //используется строгое значение "==="

    case first:
    console.log("1");
    break;

    case second:
        console.log("2");
        break;

    case third:
        console.log("3");
        break;

    default: 0;
    console.log("0");
    break;
}

console.log(first);
console.log(typeof first);


//class task #1
let morning = 1; // значение для переменной чтобы потом вызвать в операторе switch
let afternoon = 2;
let evening = 3;
let timeOfDay = [morning, afternoon, evening]; //переменная массив содержит 3 элемента индекс с 0,1,2

switch (timeOfDay[0]) {
    case 1 :
        console.log("Good morning!");
        break;
    case 2 :
        console.log("Good afternoon!");
        break;
    case 3 :
        console.log("Good evening!");
        break;

        default:
            console.log("Midday");
            break;

}

//class task #2

let age = 35;
let result = age > 18 ? console.log("You are adult") : console.log("You are a minor");

/*HOME WORK(2)*/

//1-HW

// let firstNumber = Number(prompt("Введите первое число?"));
// let action = prompt("Ввведите оператор ('+','-','/','*')");
// let secondNumber = Number(prompt("Введите второе число?"));
//
// switch (action) {
//
//     case "+":
//         alert(`Сумма чисел равна ${firstNumber + secondNumber}`);
//         break;
//
//     case "-":
//         alert(`Разница чисел равна ${firstNumber - secondNumber}`);
//         break;
//
//     case "*":
//         alert(`Произведение чисел равно ${firstNumber * secondNumber}`);
//         break;
//
//     case "/":
//         alert(`Деление чисел равно ${firstNumber / secondNumber}`);
//         break;
//
//     default:
//         alert("Ввели не понятно что!!!");
//
// }


//2-hw

// let year = 1300;
//
// if(year%4==0  && year%100!=0) { // ((year % 4 == 0 && year % 100 !=0) || year % 400 == 0)
//     console.log("Leap year");
// } else if(year%400==0) {
//     console.log("Leap year");
// } else {
//     console.log("Not leap year");
// }

//just fun

function summ(a,b) {


    if(a>b) {
        console.log("a > b");
    } else {
        console.log("b > a");
    }
}

