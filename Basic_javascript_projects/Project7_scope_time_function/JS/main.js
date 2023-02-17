var A = 9;
function Add_numbers_1() {
    document.write(20 + A + "<br>");
}
function Add_numbers_2() {
    document.write(A + 100);
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_1() {
    var Y = 10;
    document.write(20 + Y + "<br>");
}
function Add_numbers_2() {
    document.write(Y + 100);
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_1() {
    var X = 10;
    console.log(15 + X);
}
function Add_numbers_2() {
    console.log(X + 100);
}
Add_numbers_1();
Add_numbers_2();

function dates() {
    if (new Date().getHours() < 15) {
        document.getElementById("Hello").innerHTML = "its too early"
    }
}
//created an if statement above

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!"
    }
    else {
        Vote = "You are not old enough to vote yet!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}
//created anm else statement above

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time.";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";    
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}