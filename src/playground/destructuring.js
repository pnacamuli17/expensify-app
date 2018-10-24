// /* eslint-disable */

//
// Object destructuring
//

// const person = {
//   name: 'Phil',
//   age: 31,
//   location: {
//     city: 'Austin',
//     temp: 97,
//   },
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} degrees in ${city}`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin',
//   },
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);

//
// Array destructuring
//

// const address = ['123 Main Street', 'Anytown', 'Anystate', '12345'];
// const [, city, state = 'New York'] = address;
// console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];
const [drink , , mediumPrice] = item;
console.log(`A medium ${drink} costs ${mediumPrice}`);
