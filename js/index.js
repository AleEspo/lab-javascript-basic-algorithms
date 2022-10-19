// Iteration 1: Names and Input
//
let hacker1 = "Alessandro";

console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Nemo"


console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals


if (hacker1.length > hacker2.length) {
     console.log(`The driver had the longest name, it has ${hacker1.length} characters.`);
 } else if (hacker1.length < hacker2.length) {
     console.log(`The driver had the longest name, it has ${hacker1.length} characters.`);
 } else if (hacker1.length = hacker2.length) {
     console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
 } else {
     console.log(`something is not working, check your code!`);
 }

// Iteration 3: Loops

let nameSpaced1= "";

for (i = 0 ; i < hacker1.length ; i++) {
    nameSpaced1 += hacker1[i].toUpperCase()
    nameSpaced1 += " ";
    }

console.log(nameSpaced1)

let nameSpaced2 = "";

for (h = (hacker2.length - 1 ) ; h >= 0 ; h-- ) {
    nameSpaced2 += hacker2[h].toUpperCase()
    nameSpaced2 += " ";
    }

console.log(nameSpaced2)


if (hacker1.localeCompare(hacker2) === -1) {
    console.log("The driver's name goes first.")
} else if (hacker1.localeCompare(hacker2) === 1) {
    console.log("Yo, the navigator goes first definitely.")
} else if (hacker1.localeCompare(hacker2) === 0) {
    console.log("What?! You both have the same name?")
}

let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum tortor iaculis placerat vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum tortor iaculis placerat vehicula. Proin mollis ultricies felis at lacinia. Donec rhoncus eu odio non maximus. Quisque eget sem eget tellus luctus sagittis. Quisque tempor finibus enim, quis condimentum velit iaculis sit amet. In hac habitasse platea dictumst. Ut sit amet molestie arcu, vel vestibulum est. Donec volutpat quam est, iaculis fermentum tellus ultrices non. Morbi et dolor eget dolor tempor finibus sit amet id nunc. Fusce sodales tempus tincidunt. Mauris condimentum blandit sem id laoreet. Proin elementum vestibulum sollicitudin. Ut augue felis, hendrerit eu ante quis, rhoncus viverra felis. Vivamus condimentum lacus mauris, dapibus tristique elit mattis blandit. In hendrerit magna a blandit eleifend. Mauris eros tortor, molestie quis cursus sed, bibendum quis tortor. Phasellus non nibh ut felis aliquam venenatis et vitae metus. Sed pharetra, lorem at malesuada ullamcorper, odio lacus sagittis purus, posuere mattis ex odio in est. In vestibulum lobortis augue, sit amet accumsan massa facilisis non. Morbi mauris ligula, pulvinar vestibulum turpis non, sollicitudin vestibulum ligula. Nunc auctor risus ut tellus rhoncus eleifend. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc et eros porta orci convallis scelerisque eu vel enim. Nulla et eleifend libero, eget tincidunt tortor. Aliquam sed feugiat est, vitae porttitor nisl. Phasellus at quam libero. Vestibulum pellentesque ante lorem. Donec sit amet leo quis ante volutpat volutpat. Aenean et vestibulum enim. Ut et nunc sapien. In sodales tortor et mollis porta. Sed sit amet nulla facilisis, tincidunt massa eget, mattis nisi. Ut quis sodales massa. Donec sed mi vitae diam aliquet facilisis.";


function wordCount(text){
  let words= 0;
  for (i=0; i<text.length; i++){
    if (text[i]===" "){
      words++
    }
  }
  return words+1
};

console.log(`The number of words is ${wordCount(lorem)}.`);

function etCount(text){
    let et= 0;
    for (i=0; i<text.length; i++){
        if (text[i]===" "){
            if (text[i+1]==="e"){
                if (text[i+2]==="t"){
                    if (text[i+3]===" "){
                        et++
                }
            }
        }
      }
    }
    return et
  };
  
  console.log(`The word "et" appears ${etCount(lorem)} times.`)


