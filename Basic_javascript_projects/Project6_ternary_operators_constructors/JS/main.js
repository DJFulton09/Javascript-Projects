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