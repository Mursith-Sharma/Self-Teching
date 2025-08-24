
let Hello = ('hi student');                           //Variable Declaring Method: let or const or var use panlam but diffrent irukku
console.log(Hello);

let math = (3 + 5.8);                         // c programming pola datatype mantion panna thevaiyillai like int, float
console.log(math);
                                        // data type use pannum   language  C, C#, C++, JAVA, GO
                                        // data type use pannatha language JAVASCRIPT, PHP, PYTHON

////////////////////////////////////////////////////////////////////////////////////////////////

function hello()
{
 console.log('yeah buddy');
}
hello();

/////////////////////////////////////////////////////////////////////////////////////////////////

let c=6, d=6;
function man(num1, num2){
    console.log("final answer"+(num1+num2));
}

man(c,d);

/////////////////////////////////////////////////////////////////////////////////////////////////

function num(var1,var2){
    console.log( var1 + var2);        
}

num(6,6);

/////////////////////////////////////////////////////////////////////////////////////////////////

// let a=4, b=5;
// function num(a,b){
//     console.log(a + b);                  // type 1
// }                                                     // intha 2 type ilum code pannalam

// num(a,b);

// /////////////////////////////////////////////////////////////////////////////////////////////////

// let a=4, b=5;
// function num(var1,var2){
//     console.log( var1 + var2);           // type 2
// }

// num(a,b);

// /*
// naan 2 data eduththullen, athai function moolam var1, var2 enum parameter aaha pass pannukiren
// athai argument aaha datavinai vanguki  outpot pannukirathu
// Arguments passing: a = 4, b = 5
// Function-ல் var1 = 4, var2 = 5 ஆக ஆகிறது.
// Argument என்பது function-ஐ call செய்யும்போது function-க்கு அனுப்பப்படும் value ஆகும்.
// pin naam eppothu call pannukiromo appothuthan namakku output varum
// */

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                         Biggest Advantage Of Function

// ///////////////////////////////////////////////////////
// let a = 4;
// let b = 5;

// // a + b
// let sum1 = a + b;
// console.log(sum1);     //////////////

// let c = 10;
// let d = 20;                                            // WITHOUT FUNCTION

// // c + d
// let sum2 = c + d;
// console.log(sum2);    ///////////////

// let e = 1;
// let f = 2;

// // e + f
// let sum3 = e + f;
// console.log(sum3);   ///////////////

// ///////////////////////////////////////////////////////

// function addNumbers(x, y) {
//     console.log(x + y);
// }
//                                                          // WITH FUNCTION
// addNumbers(4, 5);
// addNumbers(10, 20);
// addNumbers(1, 2);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let x=6, y=6;                                 // globale variable                      
function man(num1, num2){
    let c = ("final answer"+(num1+num2));    // intha c local variable. ithu operation kkulle mattum work agum
}

console.log(c);                             // ithu output varathathatku kaaranam local variable inai ippadi veliye print panna mudiyathu so use return method

/////////////////////////////////////////////////////////////////////////////////////////////////

let X=6, Y=7;
function Man(var1, var2){
    let c = ("final answer"+(var1 + var2));
    return c;
}

console.log(Man(X,Y));

// ஒரு function input (parameters) வாங்கி, output கொடுக்கணும்.
// local variable aahaiyal அந்த output-ஐ வெளியே கொண்டு வர return தான் ஒரே வழி.