
// Destructuring (ES6) : const {..} = object
// renaming and default: "...:..." "..='..'" 

// const person = {
//   name: 'tom',
//   age: 26,
//   location: {
//     city: 'Edinburgh',
//     temp: 12
//   }
// };

// const { name: FirstName = 'Anonymous', age} = person;
// console.log(`This is ${FirstName} and I am ${age}.`);

// const {temp, city} = person.location;
// console.log(`It's ${temp} in ${city}.`);

// const book ={
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const {title, author} = book;
// const {name: publisherName = 'Self-Pubished'} = book.publisher;
// console.log(`${author}'s book entitled ${title} was published by ${publisherName}.`)


// ARRAY DESTRUCTURING

const address = ['123 street', 'Edinburgh', 'Midlothian', 'EH12'];
const [street, city, , postcode] = address;
console.log(`You are at ${street}, ${city}, ${postcode}.`);

const item = ['hot coffee', '£2.00', '£2.50', '£2.80'];
const [hotCoffee, , medium,] = item;
console.log(`A medium ${hotCoffee} costs ${medium}.`);