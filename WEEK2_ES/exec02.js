const getter = (myArray, count) => {
    const greetText = "Hello ";

    for (const name of myArray) {
        console.log(`${greetText}${name}`);
    }
};

getter(["Randy Savage", "Ric Flair", "Hulk Hogan"], 3);


// Exercise 2

const capitalize = (str) => {
    const [firstLetter, ...remainingLetters] = str;

    return `${firstLetter.toUpperCase()}${remainingLetters.join("").toLowerCase()}`;
};

console.log(capitalize("fooBar"));
console.log(capitalize("nodejs"));

// Exercise 3

const colors = ["red", "green", "blue"];

const capitalizedColors = colors.map((color) => capitalize(color));

console.log(capitalizedColors);


// Exercise 4

const values = [1, 60, 34, 30, 20, 5];

const filteredValues = values.filter((value) => value < 20);

console.log(filteredValues);


// Exercise 5

const array = [1, 2, 3, 4];

const sum = array.reduce((total, value) => total + value, 0);

const product = array.reduce((total, value) => total * value, 1);

console.log(sum);
console.log(product);


// Exercise 6

class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }
}

const mySedan = new Sedan("Toyota Camry", 2024, 25000);

console.log(mySedan);