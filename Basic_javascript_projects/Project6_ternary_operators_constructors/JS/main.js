function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML= Can_ride + "to ride";
}

function vote_Function() {                          //created a function
    var Age, Can_Vote;                              //defined variables
    Age = document.getElementById("Age").value;
    Can_Vote = (Age < 18) ? "You are not old enough ":"You can vote! ";
    document.getElementById("Vote").innerHTML= Can_Vote ;
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + " - colored " + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year;
}

function Vacation(City, Country, Time, Airline) {  //my own "new" keyword practice
    this.Vacation_City = City;
    this.Vacation_Country = Country;
    this.Vacation_Time = Time;
    this.Vacation_Airline = Airline;
}

var James = new Vacation("Seattle", "USA", "July", "Alaska");
var Kate = new Vacation("Florence", "Italy", "September", "Delta");
var Alex = new Vacation("Sao Paolo", "Brazil", "November", "Virgin");
var Tiffany = new Vacation("Seoul", "South Korea", "August", "American Airlines");
function letsGo() {
    document.getElementById("New_and_This").innerHTML= "James went on vacation to " + James.Vacation_City +
    " located in " + James.Vacation_Country + "." + " James flew " + James.Vacation_Airline + " and visited in "
    + James.Vacation_Time + ".";
}

// Constructor function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  // Create a Person object
  const myFather = new Person("John", "Doe", 50, "blue");
  
  // Display age
  document.getElementById("demo").innerHTML =
  "My father is " + myFather.age + "."; 
  
function count_Function() {
    document.getElementById("Nested_Function").innerHTML= Count();
    function Count() {
        var Starting_point = 8;
        function Plus_two() {Starting_point += 2;}
        Plus_two();
        return Starting_point
    }
}