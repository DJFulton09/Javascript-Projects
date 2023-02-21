function Call_Loop() { //created a while loop, counting up
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

let text = "Welcome to my happy place!"; //length property practice
let length = text.length;

document.getElementById("happy").innerHTML = length;

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>"
    }
    document.getElementById("List_of_instruments").innerHTML=Content; //created a for loop
}

function array_Function() {
    var Cat_Picture =[];
    Cat_Picture[0]="sleeping";
    Cat_Picture[1]="playing";
    Cat_Picture[2]="eating";
    Cat_Picture[3]="purring";
        document.getElementById("Array").innerHTML="In this picture, the cat is " +
            Cat_Picture[2] + ".";
} //created an array 

function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color="blue";
    Musical_Instrument.price="$900";
    document.getElementById("Constant").innerHTML="The cost of the " +
        Musical_Instrument.type + " was " + Musical_Instrument.price + ". " + "the instrument is colored " +
            Musical_Instrument.color + ". " + "<br>";
} // created a contant function

var X=82;
document.write(X);
{
    let X=33;
    document.write("<br>" + X);
}
document.write("<br>" + X); // used "let" keyword assignment

function myFunction() {
    return Math.PI;
}
  document.getElementById("math").innerHTML = myFunction();//created a return function

let car = {
    make: "Chevrolet ",
    model: "Nova II ",
    year: "1967 ",
    color: "gun-metal gray ",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description(); // object assignment, used "this" keyword

let fun = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  fun += "The number is " + i + "<br>";
}
document.getElementById("count").innerHTML = fun;// made a break statement

let pen = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  pen += "The number is " + i + "<br>";
}
document.getElementById("gogo").innerHTML = pen;//made a continue statement