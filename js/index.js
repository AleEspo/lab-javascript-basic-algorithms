// Iteration 1: Names and Input
//
let hacker1 = "Alessandro";

// console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Nemo"


// console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals


// if (hacker1.length > hacker2.length) {
//     console.log(`The driver had the longest name, it has ${hacker1.length} characters.`);
// } else if (hacker1.length < hacker2.length) {
//     console.log(`The driver had the longest name, it has ${hacker1.length} characters.`);
// } else if (hacker1.length = hacker2.length) {
//     console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
// } else {
//     console.log(`something is not working, check your code!`);
// }

// Iteration 3: Loops

for (i = 0 ; i < hacker1.length ; i++) {
    console.log(hacker1[i].toUpperCase());
    console.log(" ");
    }


    //  for (i = 0 ; i < hacker1.length ; i++) {
    //     for (j ; j <= i; j++) {
    //         j =+ hacker1[i].toUpperCase();
    //         j =+ " ";
    //     } 
    //          console.log(j)
    //      }

for (h = (hacker2.length - 1 ) ; h >= 0 ; h-- ) {
    console.log(hacker2[h].toUpperCase());
    console.log(" ");
    }

if (hacker1.localeCompare(hacker2) === -1) {
    console.log("The driver's name goes first.")
} else if (hacker1.localeCompare(hacker2) === 1) {
    console.log("Yo, the navigator goes first definitely.")
} else if (hacker1.localeCompare(hacker2) === 0) {
    console.log("What?! You both have the same name?")
}