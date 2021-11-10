// practice objects

// 1 - მოცემული ობიექტების მასივიდან დააბრუნეთ მასივში ისეთი ობიექტები რომლის id მეტია 4 ზე.
// let objects = [ 
//     {
//         id: 1,
//         name: 'name'
//     },
//     {
//         id: 2,
//         name: 'name'
//     },
//     {
//         id: 3,
//         name: 'name'
//     },
//     {
//         id: 4,
//         name: 'name'
//     },
//     {
//         id: 5,
//         name: 'name'
//     },
//     {
//         id: 6,
//         name: 'name'
//     },
// ]
// let myObjects = [];
// for (let i = 0; i < objects.length; i++) {
//     if (objects[i].id > 4) {
//         myObjects.push(objects[i]);
//     }
// }
// console.log(myObjects);

// let object = {
//     id: ,1
//     name: 'name'
// }
// Object.freeze(object);
//     object.id = 1000,
//     object.name = 'quantity number'

// console.log(object);

// 2 - მოცემულია ობიექტი { id: 1, name: &#39;name&#39; }. გახადეთ ობიექტი ისეთი რომ არ შემეძლოს
// ნებისმიერი რამის ცვლილება. გახადეთ ობიექტი ისეთი რომ შემეძლოს მხოლოდ
// არსებული ფროფერთის ცვლილება

// let object =
//     {
//         id: 1,
//         name: 'name'
//     }
// Object.seal (object);

//         object.id = 1000,
//         object.name = 'quantity number'

//         console.log(object);


// Objects ex 1
// const person = {
//     name: "Beqa"  //key, value pair is a property.
// }

// console.log(person['name'])


// Objects ex 2
// const person = {}
// person.name = 'Beqa';
// console.log(person);


// Objects ex 3
// const person = {
//     name: 'Beqa'
// }
// console.log(person);
// person.name = 'Qriss';
// console.log(person);
// console.log(typeof person) //object

// Objects ex 4
// const person = {
//     name: 'Beqa',
//     adress: {
//         countries: [
//             {
//                 capital : 'string',

//             }
//         ]
//     }
// }
// console.log(person.name)


// Objects ex 5
// const person = {
//     test test: 'Beqa', //error
// }

// person.test test // error
// const person = {
//     'test test': 'Beqa', // works
// }

// person.['test test'] // works

// const person = {
//     testtest: 'Beqa', // works
// }

// person.testtest // works

// Objects ex 6
// const person = {
//     test: 'Beqa',
// }


// person = 'new Value';
// console.log(person);

// 'use strict'
// // Objects ex 7
// const person = {}

// Object.defineProperty(person, 'name', {
//     value: "Beqa",
//     writable: false,
//     configurable: false
// } ); 

// person.name = 'new value'

// // person = 'new Value';
// console.log(person);

// Objects ex 8
// const person = {}

// Object.defineProperty(person, 'name',);
// {
// value: "Beqa",
// writable: false,
// configurable: false,
// enumerable: true,
// } ); 
// console.log(Object.getOwnPropertyDescriptors(person));

// console.log(person.hasOwnProperty('name'));

// Objects and array spraed operator ex 1
// let x = [ 1,2,3,4,5 ];
// let y = [ 6,7,8 ];
// let z = [...x, ...y]
// console.log(z);

// let x = {name: 'test', lastname: 'test1'}
// let y = {name: 'test2', lastname1: 'test1'}
// let k = {name: 'test3', lastname2: 'test1'}
// let z = {...x, ...y, ...k}
// // console.log(z);
// console.log(Object.keys(x));
// for (let k of Object.keys(x)) {
//     if (x.hasOwnProperty(k))
//     console.log(x[k])
// };

// let k = [
//     {'name': 'test', 'lastname': 'test1'},
//     {'name': 'test2', 'lastname1': 'test1'} ]
// let z = {};
// for (let x of k) {
//     z = {...x, ...z}
// }
// console.log(z);

// let k = {
//     person: {
//         firstname: {
//             value: 'Beqa'
//         }
//     }
// };
// console.log(k.person.firstname.value);

// Objects seal and freeze
// let x = {
//     name: 'Beqa'
// }
// x [lastname] = 'Sanaia';
// console.log(x);

// Object.seal(x)
// Object.freeze(x)

// x.name = 'Tiko';
// x [lastname] = 'Sanaia';
// console.log(x)

// Object.isFrozen(x);
// Object.isSealed(x);