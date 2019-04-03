/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. global
* 2. implicit binding (sort of like OOP dot notation in python)
* 3. new binding - creating new objects
* 4. Explicit binding. Not really sure but seems like you're able to copy and modify functions from other objects
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function saySomething(something) {
    console.log('global this commented out for terminal brevity');
    // console.log(this);
    return something;
}

saySomething("Desk");

// Principle 2

// code example for Implicit Binding

const newBook  = {
    title: 'Best Novel Ever',
    sayAuthor: function(author) {
        console.log(`${this.title} was written by ${author}`);
        console.log(this);
    }
};

newBook.sayAuthor('Sam');

// Principle 3

function ThirstyPlant(plant_name) {
    this.greeting = 'Please water me.';
    this.name = plant_name;
    this.begs = function () {
        console.log(`${this.name} desperately needs water.`);
        console.log(this);
    };
}

const tree = new ThirstyPlant('Mr. Tree');

console.log(tree.greeting);
tree.begs()

// Principle 4

// code example for Explicit Binding

const shrub = new ThirstyPlant('Mr. Shrub');

tree.begs.call(shrub);