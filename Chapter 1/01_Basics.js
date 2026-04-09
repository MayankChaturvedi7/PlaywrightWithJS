console.log("Hello World!");
let x = 5;
let y = 10;
let z = x + y;
//console.log(z);

//console.log(process.version);


// print bytecoce - node --print-bytecode 01_Basics.js

/*j
mkm
jj
*/

/*var name = "John";
var NAME = "Doe";
console.log(name);
console.log(NAME);*/

var a = 10;
console.log(a); 

function greet() {
    var a = 20;
    console.log(a);

    if (true) {
        var a = 30;
        console.log(a);
    }
    console.log(a);

}

greet();
console.log(a);


console.log("Using let keyword"); 

let b = 10;
function greet() {
    let b = 20;
    console.log(a);

    if (true) {
        let b = 30;
        const x = 3.14
        console.log(a);
        console.log(x);
    }
    const x = 50; // This will cause an error because x is block-scoped and cannot be accessed outside the block
    console.log(x); 
    console.log(a);

}

greet();
console.log(a);

