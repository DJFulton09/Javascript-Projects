function full_Sentence() {
    var part_1 = " I have ";
    var part_2 = "created many ";
    var part_3 = "coding projects ";
    var part_4 = "while attending The Tech Academy.";
    var Whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = Whole_sentence;
} //concatenated multiple var to created a full sentence

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section
}// used slice function, when button is clicked, Johnny is populated

let text = "Hello World!";
let result = text.toUpperCase();

document.getElementById("UP").innerHTML = result;
//UpperCasemethod should be displayed

let B = "Mr. Blue has a blue house"
let position = B.search("Blue");

document.getElementById("Find").innerHTML = position;
//search() method should display position of search

function string_Method() {
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}//“toString()” method that returns a number as a string.

function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("precision").innerHTML = X.toPrecision(9);
}// "toPrecision()" method formats a number to a specified length.

function toFixed_Method() {
    let Z = 5.56789
    let T = Z.toFixed(2)
    document.getElementById("find").innerHTML = T;
}// toFixed() converts a number to a string, rounded to a specified number of decimals

