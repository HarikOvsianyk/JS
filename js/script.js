"use strict";


//5 урок
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

// 6 lesson 

const ovs = {
    name: "Harik",
    age: 25,
    isMarried: true
};

console.log(ovs.age);

let arr = ['plum.pnj', 'orange.jpg', 'apple.bmp'];

console.log(arr[2]);

// 7 lesson

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




