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


// 21 lesson массивы и псевдомассивы

const ARR = [1, 2, 4, 6, 8];

ARR.pop(); //удаляет элемент с конца массива
ARR.push(10);// добавляет в конец значение указанное в скобках
ARR[99] = 0;

console.log(ARR);
console.log(ARR.length);//состоит из последнего индекса в массиве +1



//Методы перебора массива

for (let i = 0; i < ARR.length; i++ ) {
    console.log(ARR[i]);
}

//for of работает с массивоподобными сущностями (массив, строка, псевдомассивы)
for (let value of ARR) {
    console.log(value);
}

// for each - позвляет гибко перебрать все элементы находящиеся внутри массива, в нем не работают break и continue

const Arr = [1, 2, 4, 6, 8];

Arr.forEach(function (item, i, Arr) {
    console.log(`${i}: ${item} внутри массива ${Arr}`);
});// где в колббек функции item - значение в массиве, i - его индекс

//Методы перебора массива с его трансформацией (map, filter, every/some, reduce)

const Str = prompt('', '');
const products = str.split(','); //Разбивает строку на массив
console.log(products);

// На основании массива формируем большую строку
const apr = prompt('', '');
const Products = apr.split(',');
console.log(Products.join(';'));// получаем строку через точку с запятой

//Метод сортировки

const Str1 = prompt('', '');
const products1 = Str1.split(',');
products.sort(); // всегда сортирует элементы массива как строки
console.log(products1.join(';'));

const Arr2 = [1, 12, 4, 6, 8];
Arr2.sort(compareNum);
console.log(Arr2);


// Функция сортировки цифр по значению, а не по строкам
function compareNum (a,b) {
    return a -b;
}

//Псевдомассив - это структура, которая хранит данные по порядку. И не имеет типичных методов, как обычный массив.

//22 lesson Передача по ссылке и по значению, Spread оператор
//ОЧЕНЬ ВАЖНАЯ ТЕМА!!!

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj22 = {
    a: 5,
    b: 1
};

const copy = obj22;// на практике видно, что когда мы изменяем копию, мы также модифицируем изначальный объект. Ссылка на уже существующий объект

copy.a = 10;

console.log(copy);
console.log(obj22);

function Copy(mainObj) {
    let objCopy = {};

    let key;
    for(key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    
    return objCopy;
}

const numbers = {
    a:2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = Copy(numbers);
newNumbers.a = 10;
console.log(newNumbers);
console.log(numbers);


//Object assign соединяет два объекта

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add));
console.log(Object.assign({}, add));

//Создание копии массива

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'f';
console.log(newArray);
console.log(oldArray);

//Оператор разворота Spread оператор

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress','livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'],
      video2 = [...video];

console.log(internet);
console.log(video2);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num22 = [2, 5, 7];

log(...num22);

const array = ['a', 'b'];

const newAaray = [...array];

console.log(newAaray);

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};

console.log(q);

//23 lesson Основы ООП

let STR = 'some';
let strObj = new String(STR);
console.log(typeof(STR));
console.log(typeof(strObj));

console.dir([1,2 ,3]);
//Прототип солдата
const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello!');
    }
};

const john = {
    health: 100
};

john.__proto__ = soldier; // метод прото не используется



//Современные методы создания прототипа

Object.setPrototypeOf(john, soldier); //прототипом джона назначаем солдата, после формирование Джона
console.log(john);
console.log(john.armor);
john.sayHello();

//Назначаем прототип для Боба на этапе его создания

const newSoldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello!');
    }
};

const bob = Object.create(newSoldier);//Создаем новый объект Боб, который будет прототипно наследоваться от новогоСолдата

bob.sayHello();

//26 lesson динамическая типизация

//Превращаем в строку / To string

//1) старый способ
console.log(typeof(String(null)));
console.log(typeof(String(100)));

//2) конкретинация - случай, когда мы что-то складываем со строкой.
//При сложении со строкой всегда получается строка
console.log(typeof(5 + ''));

const num26 = 5;
console.log('https://vk.com/catalog/' + num26);

const fontSize = 26 + 'px';

//Превращаем в число/To Number
//1) Команда Number - пользуются редко
console.log(typeof(Number('null')));

//2) Унарный плюс - это знак плюса, который ставят перед другими данными.
console.log(typeof(+'5'));

//3) Parse Int
console.log(typeof(parseInt('15px', 10)));

//Превращаем в булин To boolean
//Всегда будет false:
0, '', null, undefined, NaN; 
// Все остальное будет true
//1) Способ номер 1
let switcher = null;
if (switcher) {
    console.log('Working...');
}

switcher = 1;

if (switcher) {
    console.log('Working...');
}

//2) Команда Boolean
console.log(typeof(Boolean('9')));

//3) !! два знака отрицания
console.log(typeof(!!'4444444'));

//27 lesson задачи на основы

let x = 5; 
console.log(x++); // итого 5, так как х сначала возвращает значение, а потом увеличивает

console.log([ ] + false - null + true );// Nan, так как пустой массив это строка, строка + ложь, получаем строку, от строки отнимаем null получаем NaN

let y = 1;
let x1 = y = 2;
console.log(x1); // получаем 2, так как в y присваиваем 2, а y = x

console.log([] + 1 + 2); //получаем 12, так как идет конкретинация

console.log("1"[0]);//  получим 1, так как у строки первым индексом будет сама единица (в данном случае)

console.log(2 && 1 && null && 0 && undefined); // Оператор 'и' (&) запинается на лжи, доходит до null и останавливается. Оператор ИЛИ || всегда запинается на правде

console.log(!!( 1 && 2 ) === (1 && 2));// false , так как !! превращают выражение в булиновое выражение

console.log( null || 2 && 3 || 4 ); // Оператор И всегда выполняется первее чем ИЛИ, из двух true, оператор И возвращает последеднее значение, в нашем случае это 3. Следующей идет левая сторона, мы будем сравнивать null с 3. Так, как ИЛИ запинается на правде нам возвращается 3. При сравнении 3 или 4, или запинается на правде, нам возвращается тройка.

console.log(3||4);

const a27 = [1, 2, 3];
const b27 = [1, 2, 3];
console.log(a27 == b27); // они не равны так как это абсолютно разные хранилища информации, их содерживое равно, но так как мы сравниваем не содерживое, то они не равны.


console.log(+"Infinity");//получим Инфинити и тип данных число

console.log("Ёжик" > "яблоко");

console.log(0 || "" || 2 || undefined || true || falsе );// получим 2, так как ИЛИ запинается на правде.

//28 lesson получение элементов со страницы
//DOM - document object model - объектная модель документа

//Получение элемента по ID

document.getElementById('id нужного нам объекта');

//Получение элемента по названию тега

document.getElementsByTagName('название тега');
const btns = document.getElementsByTagName('button');
console.log(btns);//получаем HTMLCollection
const btns1 = document.getElementsByTagName('button')[1];//что бы получить определенный элемент нужно указать индекс нужного нам элемента
console.log(btns1);//способ 2, указать в console.log(btns1[1]);

//Получение элементов по классам

document.getElementsByClassName('название класса');//также как и по тэгам, получим HTML коллекцию.

//Получаем элементы по CSS селекторам

hearts = document.querySelectorAll('.селектор');//данному методу доступен метод forEach.В итоге получим NodeList

//Получаем первый элемент по CSS селекторам

document.querySelector('.heart');

//29 lesson Действия с элементами на странице

box.style.backgroundColor = 'blue';// меняем свойства объектов с помощью инлайн стилей
box.style.width = '500px';

box.style.cssText = 'background-color: green; width: 500px';// css text когда меняем много свойств
btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

for (let i=0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'blue';
} // при помощи цикла for of, когда нужно перебрать массив и поменять сразу несколько свойств

hearts.forEach(item => {
    item.style.backgroundColor = 'green';
});// при помощи метода forEach перебираем массив и меняем нужные нам свойства

const div = document.createElement('div'); // создает элемент внутри файла jsб на странице он никак не появится

div.classList.add('black');// добавляем css класс к нашему элементу (класс из css стилей)

document.body.append(div);//берем тег бади как родителя, и в его конец добавляем новый див

document.querySelector('.wrapper').append(div);// если нужно один раз использовать html class, его можно получить прямо в строке
wrapper.append(div);// делаем так, если вынесли класс в переменную и получили его на страницу
wrapper.prepend(div); // вставляет див в начала блока родителя
hearts[0].before(div);//вставляем элемент див перед 0(первы) сердцем
hearts[0].after(div);//вставляет элемент див после указанного сердца
circles[0].remove();// удаляем указанный элемент массива со страницы
hearts[0].replaceWith(circles[0]);//заменяем hearts 1 на circles 1, по человеческой нумерации

//Устаревшие конструкции
wrapper.appendChild(div);// тоже, что и append
wrapper.insertBefore(div, hearts[0]);// первый аргумент: что мы вставляем, второй перед каким элементом вставляем
wrapper.removeChild(hearts[1]);//удаление элемента
wrapper.replaceChild(circles[0], hearts[0]);// меняем первый кружок на первое сердечко

div.innerHTML = '<h1>Hello world</h1>';// добавляем во внутрь div текст, сюда также можно вставлять HTML структуру

div.textContent = 'Гарик';// работает только с текстом

div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>');//вставляем код перед каким-либо элементом









