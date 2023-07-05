"use strict";
/*
 - Basic Types => string , boolean , number
 - Array
 - Tuple
 - Union
 - Enum
 - Objects
 - Type Assertion
 - Functions
 - Interface
*/
let channel = "Simple Arab Code";
let isSuccess = true;
let id = 5;
let x = 5;
let ids = [1, 2, 3, 4];
let strArr = ["ahmed", "mohamed"];
let arr = [1, true, "str"];
let person = [1, "ahmed", true];
// Tuple Array
let employee = [
    [1, "ahmed"],
    [2, "mohamed"],
    [3, "ali"],
];
let pId = 5;
var Direction;
(function (Direction) {
    Direction["Up"] = "Up";
    Direction["Down"] = "Down";
    Direction["Left"] = "Left";
    Direction["Right"] = "Right";
})(Direction || (Direction = {}));
const user = {
    id: 1,
};
user.id = 10;
const p = 1;
let uId = 5;
let userId = uId;
function sum(x, y) {
    return x + y;
}
console.log(sum(10, 20));
function sayHello(name) {
    return `Hello ${name}`;
}
sayHello("Kareem");
function log(message) {
    console.log(message);
}
log("this is a message");
const add = (x, y) => x + y;
// main class
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
// sub class
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const person1 = new Person(1, "Kareem");
const emp = new Employee(2, "ahmed", "web developer");
console.log(person1.id);
console.log(person1.name);
console.log(person1.register());
console.log("#".repeat(10));
console.log(emp.id);
console.log(emp.name);
console.log(emp.register());
console.log(emp.position);
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["ahmed", "mohamed", "ali"]);
numArray.push(10);
strArray.push("kareem");
console.log(numArray);
console.log(strArray);
