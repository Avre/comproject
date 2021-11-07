//if...else practice

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
// If John has 92 points: John 92 <= 100 = A
// If David has 87 points: David 87 
// If Kate has 55 points: Kate 55
// If Chris has 65 points: Chris 65

// let a = 92;
// if ( a <= 100 && a > 90 ) {
//     console.log('John A');
// }
// let b = 87;
// if (b <= 90 && b > 80 ) {
//     console.log('David B');
// }
// let c = 55;
// if (c <= 60 && c > 50 ) {
//     console.log('Kate F');
// }
// let d = 65;
// if (d <= 70 && d > 60 ) {
//     console.log('Chris D');
// }
// else ('C')

const s = {name: "Jonh", points: 92};
const s2 = {name: "David", points: 87};
const s3 = {name: "Kate", points: 55};
const s4 = {name: "Chris", points: 65};

// in this case do not working...
if (s.points <= 100 && s.points > 90) { 
    console.log('John: A')
}
else if (s.points <= 90 && s.points > 80) { 
    console.log('David: B')
}
else if (s.points <= 60 && s.points > 50) { 
    console.log = "Kate D"; 
}
else if (s.points <= 70 && s.points > 60) { 
    console.log = "Chris C"; }
else {  }



// console.log(  )

// the largest number from 5...

// let n1 = 20;
// let n2 = 40;
// let n3 = 98;
// let n4 = 67;
// let n5 = 88;
// let largest;

// if ( n1 >= n2 && n1 >= n3 && n1 <= n4 && n1 >= n5 ) {
//     largest = n1
// }
// else if ( n2 >= n1 && n2 >= n3 && n2 >= n4 && n2 >= n5 ) {
//    largest = n2;
// }
// else if ( n3>= n1 && n3 >= n2 && n3 >= n4 && n3 >= n5 ) {
//     largest = n3;
// }  
// else if ( n4 >= n1 && n4 >= n2 && n4 >= n3 && n4 >= n5 ) {
//     largest = n4;
// }  
// else if ( n5 >= n1 && n5 >= n2 && n5 >= n3 && n5 >= n4 ) {
//     largest = n5;
// }
// else ("no largest");

// console.log(largest);

// the smolest number from 3...
// let n1 = 77;
// let n2 = 66;
// let n3 = 92;
// let smolest;

// if ( n1 <= n2 && n1 <= n3 ) {
//     smolest = n1;
// }
// else if ( n2 <= n1 && n2 <= n3 ) {
//     smolest = n2;
// }
// else if ( n3 <= n1 && n3 <= n2 ) {
//     smolest = n3
// }
// else ( '' )
// console.log(smolest);




//lesson 1 if...else

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