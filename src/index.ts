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

let channel: string = "Simple Arab Code";
let isSuccess: boolean = true;
let id: number = 5;
let x: any = 5;

let ids: number[] = [1, 2, 3, 4];
let strArr: string[] = ["ahmed", "mohamed"];
let arr: any[] = [1, true, "str"];

let person: (string | number | boolean)[] = [1, "ahmed", true];
// Tuple Array

let employee: [number, string][] = [
  [1, "ahmed"],
  [2, "mohamed"],
  [3, "ali"],
];
let pId: number | string | boolean = 5;

enum Direction {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

type User = {
  id: number;
  name?: string;
};
interface UserInterface {
  id: number;
  name: string;
}
const user: User = {
  id: 1,
};
user.id = 10;

type Point = number;

const p: Point = 1;

let uId: any = 5;

let userId = uId as number;

function sum(x: number, y: number): number {
  return x + y;
}
console.log(sum(10, 20));

function sayHello(name: string): string {
  return `Hello ${name}`;
}
sayHello("Kareem");
function log(message: string): void {
  console.log(message);
}
log("this is a message");

interface AddInterface {
  (x: number, y: number): number;
}
const add: AddInterface = (x: number, y: number): number => x + y;

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}
// main class

class Person implements PersonInterface {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  register() {
    return `${this.name} is now registered`;
  }
}
// sub class
class Employee extends Person {
  position: string;
  constructor(id: number, name: string, position: string) {
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

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["ahmed", "mohamed", "ali"]);

numArray.push(10);
strArray.push("kareem");

console.log(numArray);
console.log(strArray);
