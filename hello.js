console.log("Hello World.");

console.log("Welcome to a Javascript website");

// var, let, const

const name = 'John';
const age = 30;

// Concatenation

console.log("My name is " + name + " and I am " + age + " years old.");


// string

const s = 'Hello World!';

console.log(s);
console.log(s.length);
console.log(s.substring(0, 5));

console.log(s.split(''));

const t = 'technology, computers, IT, code';

console.log(t);

// Arrays - variables that hold multiple values

/*
Multi
Line
comment
*/

const numbers = new Array(1,2,3,4,5);

console.log(numbers);

const fruits = ['apples', 'oranges', 'pears'];

fruits[3] = 'grapes';

fruits.push('mangos');

fruits.unshift('strawberries');

console.log(fruits);

const animals = ['lions', 'tigers', 'bears'];

console.log(animals);

console.log(Array.isArray(animals));

console.log(fruits.indexOf('oranges'));

// New concept

const person = {

    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person.hobbies[1]);
console.log(person.address.city);

const { firstName, lastName, address: { city }} = person;

console.log(lastName);


// New concept. Arrays of todos

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appointment',
        isCompleted: false
    },
];

console.log(todos[1].text);

const todoJSON = JSON.stringify(todos);

console.log(todoJSON);

// For (loops)

for(let i = 0; i <= 10; i++) {
    console.log("For loop number: " + i);
}

// While

let i = 0;
while(i <= 10) {
    console.log('While loop number: ' + i);
    i++;
}

// To do

for(let todo of todos) {
    console.log(todo.text);
}

// forEach, map, filter

const todoText = todos.map(function(todo) {
    return todo.isCompleted === true;
    return todo.text;
});

console.log(todos);

// conditionals

const x = 20;
const y = 11;


if(x > 5 || y > 10) {
    console.log('x is more than 5 or y is more than 10');
}

if (x > 5) {
    if (y > 10);
}

// ternary operator

const z = 9;

const color = 'green';

console.log(color);

switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
}

// functions

const addNums = (num1 = 1, num2 = 1) => num1 + num2;

console.log(addNums(5, 5));

// OOP

// Constructor function

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob; {
    }
    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Instantiate object

const person1 = new Person ('John', 'Doe', '4-3-1980');
const person2 = new Person ('Mary', 'Smith', '3-6-1970');

console.log(person2.firstName);

console.log(person2.dob);

console.log(person1.getFullName());

// prototypes

Person.prototype.getBirthYear = function () {
    return this.dob.getFullYear();
}

// Class

class Person {
    constructor() {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
}


























