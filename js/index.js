"use strict";

const Str = prompt('', '');
const products = Str.split(',');
products.sort();
console.log(products.join(';'));