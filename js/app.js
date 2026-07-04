console.log("Hi... Day 06 of Java Script");

//no-Args constructor ===default constructor

//-----------------------------------------------
// object -01 method ==using a class
class Customer {
  name;
  age;
  address;

  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
}
let customer1 = new Customer("Chathu", 20, "Anuradhapura");
console.log(customer1);
console.log(customer1.name);

//object -02 method

let customer2 = {
  name: "John",
  age: 30, //seperate lines using comma(,)
  address: "New York",
  items: ["item1", "item2"], //in js, object is initialized using : (colon).
  books: [
    {
      id: 1001,
      name: "Book1",
      variants: [
        {
            id:1,
            name:"variant1",
            price:10
        },
        {
            id:2,
            name:"variants2",
            price:20
        }
      ]
    },
    {
      id: 1002,
      name: "Book2",
    },
  ],
  father: {
    //another object inside the cusotmer ojbect
    name: "Deo",
    age: 10,
    address: "Kandy",
  },
};

console.log(customer2);

// access to the elements
console.log(customer2.name);
console.log(customer2.age);
console.log(customer2.address);

console.log(customer2.father.name);
console.log(customer2.father.address);

//console.log(customer2.books.variants.id);

//----------------------------------------------------------
//      Document Object Model (DOM) Manipulation
//----------------------------------------------------------

document.write("<h2>Hello world! by js<h2>");

console.log(document.title);

let heading=document.getElementById("heading");
console.log(heading);

//------------------------------------------------

//inner text change

heading.innerText="Chathu";