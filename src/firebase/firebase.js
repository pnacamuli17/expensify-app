/* eslint-disable */

import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAj1DyBTqdmFnu2owpXEwS1qy6NCQEByNM",
  authDomain: "expensify-app-278de.firebaseapp.com",
  databaseURL: "https://expensify-app-278de.firebaseio.com",
  projectId: "expensify-app-278de",
  storageBucket: "expensify-app-278de.appspot.com",
  messagingSenderId: "1099169574823",
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref().on('value', (snapshot) => {
  const val = snapshot.val();
  console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
});

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });

// database.ref()
//   .set({
//     name: 'Phil Nacamuli',
//     age: 31,
//     stressLevel: 6,
//     job: {
//       title: 'Software Developer',
//       company: 'Google',
//     },
//     location: {
//       city: 'Austin',
//       country: 'United States',
//     },
//   })
//   .then(() => {
//     console.log('Data is saved!');
//   })
//   .catch((e) => {
//     console.log('This failed', e);
//   });
//
// database.ref()
//   .update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle',
//   });

// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('Remove succeeded');
//   })
//   .catch((e) => {
//     console.log('Remove failed', e);
//   });
