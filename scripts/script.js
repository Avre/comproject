// If we have 55, 88, 98.... show the higst

// let n1 = 55;
// let n2 = 88;
// let n3 = 9.8;
// let largest;

// if (n1 >= n2 && n1 >= n3) {
//     largest = n1;
// }
// else if (n2 >= n1 && n2 >= n3) {
//     largest = n2;
// }
// else {
//     largest = n3
// }

// console.log("The largest number is " + largest);


// student point list
// If John has 92 points: John 92 
// If David has 87 points: David 87
// If Kate has 55 points: Kate 55
// If Chris has 65 points: Chris 65

let pointsJohn = 92;

if (pointsJohn === 92) {
    console.log('John 92');
}
{
    let pointsDavid = 87;

    if (pointsDavid === 87) {
        console.log('David 87');
    }
}
{
    let pointsKate = 55;

    if (pointsKate === 55) {
        console.log('Kate 55');
    }
}
{
    let pointsChris = 65;

    if (pointsChris === 65) {
        console.log('Chris 65');
    }
}

  















// ex 1
// var n = 1;

// console.log(n);

// n = "2";

// console.log(n);


// ex 2

// var a = 1;
// var b = 3;

// var reminder = a % b; / * % + - **
// console.log(2 ** 3)
// console.log(reminder);

// ex 3
// var a = 0.1;
// var b = 0.2;

// var sum = ( a * 10 + b * 10 ) / 10;

// console.log(sum);

// ex 4
// var firstName = "Vera";
// var lastName = "Martynova";

// var fullName = firstName + " " + lastName;

// console.log(fullName);

// ex 5
// var a = undefined;
// var b = null;
// var c = NaN;
// var firstName = "Vera"

// var n = null;
// console.log(n);

// console.log( isNaN(firstName * 3 )  );

// ex 5 type corection
// var a = 5;
// var b = "10";
// var c = a + 15 + b;

// console.log(c);

// ex 6 type corection
// var a = 5;
// var b = 10;
// var c = "30";

// var d = c + a + b;

// console.log(d);

// ex 6 type corection
// var a = 5;
// var b = "10";

// var c = a + 15 + b;
// console.log(c);

// ex 7 cheking type
// var a = null;
// console.log(typeof a)

// ex 8 checking type
// var a = ' "string" '
// var a = "str\ning"
// console.log(a.split('\n').join(''));

// ex 9
// var a = '5'
// var b = '10';
// console.log(typeof (a * b));

// ex 10
// var a = 2;
// var b = 0;
// console.log(a / b);

// console.log(Number.MAX_SAFE_INTEGER)

// ex 11
// var n = 25;
// var a = n.toString(10);
// var b = n.toString(8);
// var c = n.toString(16);
// var d = n.toString(2);

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// ex 12
// var n = 1;
// n++;
// console.log(n);
// console.log(n++);
// console.log(n);
// console.log(++n);
// console.log(n);

// n = n + 1; n += 1;
// n /= 5; // n = n / 5;
// console.log(n);

// ex 13
// var a = 5;
// let a = 5;
// {
//    let a = 10;
//   // console.log(a);
// }
// console.log(a);

// const GRAVITATION = 9.80665;
// a = 45345;   //This will give an error
// console.log(a);

// ex 14 
// let a = 'Vera';
// let b = '92';
// // const fullName = `$(a) $(b)`; // a + " " + b;
// const fullName = a + " " + b;
// console.log(fullName)

// let c = 5;
// console.log(typeof `$(c)`); // c.toString(10) or c.toString()

// ex 15 if statement
// == ===
// let a = 5;
// let b = '5';
// console.log(a === b);

// ===  equals type and value
// ==   equals value
// >    greater
// <    smaler
// >=   greater or equals
// <=   smaler or equals
// !=   not equals value (not)
// !==  not equals type and value (not)
// ||   or
// &&   and

// let a = 5;

// if ( a === 7 ) {
//     console.log('equals 5')
//  }  else { 
//      console.log('not equals')
//  }

// if (a === 7) {
//     console.log('equals 7')
// } else if ( a === 4 ) {
//     console.log('equals 4') 
// } else if (a === 5 ) {
//     console.log('equals 5')
// } else {
//     console.log('you are lost')
// }

// if (a === 3 && a < 10) {
//     console.log('sshvjjg')
// }

// if ((a === 3 || a > 5) && a <= 10) {
//     console.log('sshvjjg')
// }

// if ( a !== 5 ) {
//     console.log('sshvjjg')
// }

// if ( '5' !== 5 ) {
//     console.log('sshvjjg')
// }

// let a = 10;
// let b = 12;
// if(!!1) {
//    console.log('sdfsdfd')
// }
// if (!(a>=b)) {
// console.log('sdfsdfd')    
// }
// console.log(!!0)

// ex 16 switch statement

// let x = 5;
// switch (x) {
//     case 1:
//         console.log('1');
//         break;
//     case 5:
//             console.log('5');
//         break;
//     default:
//             console.log('asdag')
//         break;
// }

//  alternative 
//  if (x === 1) {
//      console.log('1');
//  } else if (x === 5) {
//      console.log('5');
//  } else {
//      console.log('asdsf')
//  }

// switch (new Date().getDay()) {
//     case 4:
//         console.log('ორშაბათი');
//         break;
//     case 2:
//         console.log('სამშაბათი');
//         break;
//     case 3:
//         console.log('ოთხშაბათი');
//         break;
//     case 1:
//         console.log('ხუთშაბათი');
//         break;
//     case 5:
//         console.log('პარასკევი');
//         break;
//     case 6:
//         console.log('შაბათი');
//         break;
//     case 7:
//         console.log('კვირა');
//         break;
//     case 8:
//         console.log('');
//         break;
// }

// ex 17 ternary operators

// let x = 6;

// x === 5 ? console.log('5') : console.log('not 5')

// if (x === 5) 
//     console.log('5')
// } else {
//     console.log('not 5')
// }


