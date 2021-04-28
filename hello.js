console.log("Hello World. This is Hemanth Panditi");

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

console.log("Hello Uyi!");













