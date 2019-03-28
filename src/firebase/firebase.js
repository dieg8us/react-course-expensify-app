import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });

// child remove
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').push({
//     description: 'test expense 1',
//     note: 'test note 1',
//     amount: 100,
//     createdAt: '10000'
// });

// database.ref('expenses').push({
//     description: 'test expense 2',
//     note: 'test note 2',
//     amount: 200,
//     createdAt: '20000'
// });

// database.ref('expenses').push({
//     description: 'test expense 3',
//     note: 'test note 3',
//     amount: 300,
//     createdAt: '30000'
// });

// fetch data
// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {

//     })

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//     // console.log(snapshot.val());
// });

// database.ref().set({
//     name: 'Diego Uribe',
//     age: 32,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Santiago',
//         country: 'Chile'
//     }
// }).then(() => {
//     console.log('Data saved');
// }).catch((e) => {
//     console.log('This failed', a);
// });

// database.ref('age').set(27);
// database.ref('age').set(32);
// database.ref('location/city').set('Valparaiso');

// database.ref('attributes').set({
//     height: 3,
//     weight: 6
// });

// update data
// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seatle'
// });



// delete data
// const isSingleRef = firebase.database().ref('isSingle');
// // remove isSingle
// isSingleRef.remove()
//     .then(() => {
//         console.log('remove succeeded!');
//     })
//     .catch((e) => {
//         console.log('failed!', e);
//     });

// database.ref('isSingle').set(null);