// practice

// 1 გაქვთ ნებისმიერი ტიპის ცვლადი. უნდა გაიგოთ ეს ცვლადი არის თუ არა array

// let car = [ 'Tesla', 'luxury', 'Electric', 'Vehicles', 'from', 2003 ];
// let car2 = [ 'Ferrari', 'Luxury', 'Sports', 'Cars', 'from', 1947 ];
// let car3 = ( 'Ford', 'Mass-Market', 'Cars', 'from', 1903 );
// let car4 = { 'Porshe': 'luxury', 'Sports': 'Cars', from: 1931 } ;
// let car5 = 'Lamborgini';

// console.log(Array.isArray(car));
// console.log(Array.isArray(car2));
// console.log(Array.isArray(car3));
// console.log(Array.isArray(car4));
// console.log(Array.isArray(car5));

// 2 - გაქვთ 2 განზომილებიანი მასივი. გახადეთ ერთ განზომილებიანი
// let arr = [1,2,3,4,[5,6,7,8]];
// console.log(arr.flat())
// let arr = ['What do you think',['Ferrary',['better to be red?']]];
// console.log(arr.flat(2))

// 3 - დაბეჭდეთ მასივის ბოლოს ელემენტი
// let arr = ['car', 'bike', 'horse'];
// const last = arr[2]
// console.log(last);

// let s = 'Harmony';
// const lastIndex = s.length - 1;
// console.log(s.charAt(lastIndex));

// 4 - გაქვთ მასივი [ 1, true, undefined, null ]. მასივის ყველა ელემენტი გახადეთ სტრინგი
// არ ჩაითვლება სათითაოდ ინდექსებით
// let elements = [ 1, true, undefined, null ];
// console.log(elements.join());

// let elements = ['Earth','Water','Fire','Air','Spirit'];
// console.log(elements.toString());  
// console.log(elements.join( '-' ));


// 5 - სტრინგი გახლიჩეთ რომელიმე სიმბოლოზე და დააჯოინეთ ‘ * ‘ ით
// let str = 'There are no beautiful surfaces without a terrible depth.';
// const arr = str.split( ' ' );
// console.log(arr.join( '*' ));

// let str = 'When you gaze into abyss, it gazes back, and it teels you what you are made of';
// console.log(str.split(' '));   // კითხვა --->  როგორ ამოვიღოღო მძიმეები?ვერ ამოვიღე

// 6 - მოცემული გაქვთ სტრინგი “I'm gonna pop some tags only got twenty dollars in my
// pocket”. შექმენით ამ სტრინგში მოცემული სიმბოლოების მასივი.
// let arr = "I'm gonna pop some tags only got twenty dollars in my pocket";
// console.log(arr.split(''));


// 7 - მასივიდან ამოიღეთ ბოლო ელემენტი და დაამატეთ თავში. - ვეღარ მოვასწარი ვაკეთებ


// 8 - გაქვთ 3 სხვადასხვა მასივი. გააერთიანეთ ეს მასივები ერთმანეთში
   // let arr1 = ['What is your name?'];
   // let arr2 = ['Where are you from?'];
   // let arr3 = ["What are looking for?"];
   // const arr = arr1.concat(arr2, arr3);
   // console.log(arr);
   
// 9 - გაიგეთ რა სიმბოლოა ascil table -ის 107 კოდით - k
// const s = String.fromCharCode(107);
// console.log(s);

// Peace and Harmony 





// Array ex 1
// let arr = [1,2,3, 'string', true];
// console.log(arr[arr.length - 1]);
// console.log(arr.length);

// Array ex 2
// let arr = new Array(1,2,3);
// console.log(arr);

// Array ex 3
// let arr = new Array(3);
// console.log(arr[0]);

// Array ex 4
// let arr = [1,2,3, 'string', true];
// arr[0] = 5;
// console.log(arr);

// Array ex 5
// let arr = [1,2,3, 'string', true];
// console.log(arr[45]);

// Array ex 6
// let arr = [1,2,3, 'string', true];
// console.log(typeof arr);

// const a = {
//     name = 'beqa'
// }
// console.log(a);

// Array ex 7
// let arr = [1,2,3, 'string', true];
// const a = '5'
// console.log(Array,isArray (arr) );
// console.log(Array,isArray (a) );

// Array ex 8
// let arr = [1];
// let arr1 = [1];

// console.log(arr == arr1);
// console.log(arr === arr1); //პრიმიტიულზე არ მუშაობს

// Array ex 9
// let arr = Array.of([1,2,3], true, 'string');
// console.log(arr)

// Array ex 10
// let arr = Array.from('String');
// console.log(arr);

// Array ex 11
// let arr = 'string'.split('r');
// console.log(arr);
// console.log(arr.join('')); // join with any symbol

// Array ex 12
// let arr = [1,2,3,4,5];
// const x = arr.filter((a) => {
//     return a > 3;
// })
// console.log(x);

// Array ex 13
// let arr = [1,2,3,4,5];
// const x = arr.map((a) => {
//     return a ** 10;
// })
// console.log(x)

// Array ex 14
// let arr = [1,2,3,  'string',  4,5];
// let a = arr.reduce((c,p) => {
//     return c + p;
// })
// console.log(a);

// Array ex 15
// let arr = ['a', 'b', 'c'];
// let a = arr.reduceRight((c,p) => {
//     return c + p;
// })
// console.log(a);

// Array ex 16
// let arr = [1,2,3,4,5];
// const x = arr.every((n) => {
//     return n > 3
// })
// console.log(x);

// Array ex 17
// let arr = [1,2,3,4,5];
// const x = arr.some((n) => {
//     return n > 3
// })
// console.log(x);

// Array ex 17
// let arr = [1,2,3,4];
// arr.fill(0,2,3);
// console.log(arr);

// Array ex 18
// let arr = [1,2,3,4];
// const last = arr.pop();
// console.log(last);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.pop();
// console.log(arr);

// Array ex 18
// let arr = [1,2,3,4];
// let first = arr.pop();
// console.log(last);
// console.log(arr);