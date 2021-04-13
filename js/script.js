"use strict";


//5 урок Переменные и строгий режим
let number = '9';
let Name = 'Harik';
const surname = 'Ovsianyk';

Name = 'Kate';

console.log(Name, surname);
 
const obj = {
    a: 50
};

obj.a = 10;

console.log(obj);

console.log(name);

var name = 'Harik';

name = 'Kate';

{
    var result = 50;
}


console.log(result);

// 6 lesson Типы данных

const ovs = {
    name: "Harik",
    age: 25,
    isMarried: true
};

console.log(ovs.age);

let arr = ['plum.pnj', 'orange.jpg', 'apple.bmp'];

console.log(arr[2]);

// 7 lesson простое общение с пользователем

/* alert('Приветствие!'); */

/* const res = confirm('Ты здесь?');
console.log(res); */

/* const answer = +prompt('Вам есть 18?', '18');
console.log(answer + 5); */

const answers = [];

answers[0] = prompt('Как ваше имя?', '');
answers[1] = prompt('Какая ваша фамилия?', '');
answers[2] = prompt('Сколько вам лет?', '');
answers[3] = prompt('Где вы живете?', '');

console.log(answers);
console.log(typeof(null));

//8 lesson Интерполяция

const category = 'toys';

console.log(`hhtps://someurl.com/${category}/5`);

const user = 'Harik';

alert(`Привет ${user}!`);
console.log(`Привет ${user}!`);

//9 lesson Операторы

console.log('arr' + '- object');
console.log(4 + '- object');
console.log(4 + + '- object');
console.log(4 + + '5');
console.log(4 + '5');

let incr = 10;
    decr = 10;

/* ++incr;
--decr; */

console.log(++incr);
console.log(--decr);

console.log(12%4); // делим 5 на 2, столько раз, сколько это возможно и в итоге получаем остаток

console.log(2 + 2 * 2 !== '6');

const isChecked = !true,
      isClose = !false;

console.log(isChecked || isClose);

// 13 lesson Условия

// Условие If

if (4 !== 9) {
    console.log('Sure!');
} else {
    console.log('Wrong number');
}

const num = 50;

if (num <= 49) {
    console.log('Error');
} else if (num >= 100) {
    console.log('Too much');
} else {
    console.log('Sure!');
}

// Тернарный оператор (так как участвуют три оператора)

(num === 49) ? console.log('Sure!') : console.log('Error');

//Условие Switch - модификация if, которая поддерживает несколько модификаций и условий

const n = 55;

switch (n) {
    case 49:
        console.log('Wrong!');
        break;
    case 100:
        console.log('Wrong number!');
        break;
    case 55:
        console.log('Good job, buddy!');
        break;
    default:
        console.log('Not today =(');
        break;
}


// 14 Lesson Циклы

// Цикл while

let num50 = 50;

while (num50 <= 55) {
    console.log(num50);
    num50++;
}

//do - сначала что-то делаем, потом проверяем условие и если необходимо - выйти из цикла

let num51 = 51;

do {
    console.log(num51);
    num51++;
}
while (num51 < 55);

// for - можем подробно его настроить 

let num52 = 52;
for (let i = 1; i < 8; i++) {
    console.log(num52);
    num52++;
}

let num5 = 5;
for (let i = 1; i < 10; i++) {
    if (i === 6) {
        /* break; */
        continue;
    }
    console.log(i);
}

// 16 Lesson Функции, стрелочные функции
let m =20;
function showFirsMassage (name) {
    console.log(`Hello ${name}!`);
    let m = 10;
    console.log(m);
}

showFirsMassage('dear Harik');
showFirsMassage('dear Kate');
console.log(m);

function calc(a,b) {
    return (a+b);
}

console.log(calc(4,5));
console.log(calc(5,6)%2);
console.log(calc(1995,1994));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

console.log(ret());

const logger = function () {
    console.log('Hello');
};

logger();

const talc = (a,b) => a+b;

console.log(talc(5,6));

//17 lesson Методы и свойства строк и чисел

const str = 'Harik Ovsyanik';
const arr1 = [1, 2, 4];

console.log(str.length);
console.log(arr1.length);
console.log(str[2]);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

const fruit = "Some fruit";
console.log(fruit.indexOf('fruit')); // показывает с какого индекса начинается искомое слово или буква
console.log(fruit.indexOf('q'));

const logg = 'Hello world';
console.log(logg.indexOf('world'));
console.log(logg.slice(6, 11));//вырезает данные со строк начиная с указаного элемента вплоть до последнего +1не включая
console.log(logg.slice(6)); // вырезает до конца
console.log(logg.substring(6, 11)); // тоже что и слайс
console.log(logg.substr(6, 5)); // указываем с какого индекса начинаем вырезать и сколько индексов вырезаем(как второй аргумент)

const Num = 12.2;
console.log(Math.round(Num));// округлили до целого числа

const test = '12.2px';
console.log(parseInt(test));// переводит число в другую систему исчисления
console.log(parseFloat(test));// возвращает с плавающей точкой значение

//19 lesson Callback - функция, которая должна быть выполнена, после того,как другая функция завершила свое выполнение 

function first() {
    //Do something
    setTimeout(function () {
        console.log(1);
    }, 500);
}

function second () {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`I learn ${lang}`);
    callback();
}

function done() {
    console.log('I have finished this lesson!');
}

learnJS('Javascript', done);

// 20 lesson Объекты, деструктуризация объектов

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () {
        console.log("test");
    }
};

options.name = 'rest';
console.log(options.name);

/* delete options.name; */
console.log(options);
//Метод перебора объекта


for (let key in options) {
    if (typeof(options[key]) === 'object' ) {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        } 
    } else {
            console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
}

let counter = 0;
for (let key in options) {
    if (typeof(options[key]) === 'object' ) {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        } 
    } else {
            console.log(`Свойство ${key} имеет значение ${options[key]}`);
            counter++;
    }
}

console.log(counter);

// Выводит свойства в массив, а lenght показывает, сколько их (вместо каунтера)

console.log(Object.keys(options).length);

options.makeTest();

//Деструктуризация объектов - вытаскиваем свойства из объекта

const {border, bg} = options.colors;
console.log(border);









