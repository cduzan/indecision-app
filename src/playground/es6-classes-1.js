// Class
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        //return 'Hi, my name is ' + this.name + '!';
        return `Hi, my name is ${ this.name }!`;    //template string example
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
}

// Subclass 
class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {  // this overrides the parent function
        let description = super.getDescription();
        if (this.hasMajor()) description += ` Their major is ${this.major}`;
        return description;
    }
}

// another Subclass
class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if (this.homeLocation) greeting += ` I'm visiting from ${this.homeLocation}.`;
        return greeting;
    }
}

const me = new Traveler('Chris Duzan', 26, 'South Carolina');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());