// 1 - ჯავასკრიპტის String ობიექტს დაამატეთ მეთოდი customString.
// სტრინგის აღწერის შემდეგ let s = ‘ string ‘ უნდა შემეძლოს ამ მეთოდის გამოძახება
// s.customString() რომელმაც უნდა გამოიტანოს მნიშვნელობა ‘my custom string is: string’

function testObj() {
    this. s = 'string'
}  
testObj.prototype.toString = function() {
    return this.s;
}
    let x = new testObj(); {
    console.log(x)
}

// 2 - შექმენით ობიექტი ისე რომ შემეძლოს let person = new Person(‘name’ , ‘lastname’)
// console.log(person.name + ‘ ‘ + person.lastname)





// 3 - გაქვთ 2 ობიექტი, let obj1 = { name: ‘name’ }, let obj2 = {lastname: ‘lastname’}
// უნდა შემეძლოს გამოვიტანო obj2.name. გამოიყენეთ __proto__

// let obj = { 
//     car: 'Lamborgini'
// };
// let obj1 = { 
//     color: 'yellow',
//     __proto__:obj
// };

// console.log(obj1.__proto__);

// 4 - For loop ის დახმარებით ობიექტიდან გამოიტანეთ key და შესაბამისი value

// let obj = { car: 'Tesla', color: 'Silver'}
// for(let s in obj) {
//     console.log(s, obj[s]);
// }


// 5 - დაწერეთ for loop რომელიც დამიბეჭდავს მატრიცების ჯამს
// let matrix1 = [ [1,2,3,4], [5,6,7,8], [9, 10, 11,12] ]
// let matrix2 = [ [13, 14, 15,16], [17, 18,19,20], [21,22,23,24] ]
// expected output : [ 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 32, 36 ]

// let matrix1 = [ 
//     [1,2,3,4], [5,6,7,8], [9,10,11,12]
// ];
// let matrix2 = [ 
//     [13,14,15,16], [17,18,19,20], [21,22,23,24]
// ];

// let sum = [[],[],[],[]];

// for (let i = 0; i < matrix1.length; i++) {
//     for (let j = 0; j < matrix1[i].length; j++) {
//         sum [i][j] = matrix1[i][j] + matrix2[i][j];
//     }
// }
// console.log(sum.flat());



       
// var array1 = [1,2,3,4];
// var array2 = [5,6,7,8];

// var sum = array1.map(function (num, idx){
//     return num + array2[idx];
// });
// console.log(sum);