function Math_function() {
    var addition = 3+3;
    document.getElementById("math").innerHTML="3+3=" + addition;
}

function Sub_function() {
    var subtraction = 5-2;
    document.getElementById("sub").innerHTML="5-2=" + subtraction;
}

function multiplication() {
    var multiply = 6 * 8;
    document.getElementById("multi").innerHTML="6 x 8= " + multiply;
}

function division() {
    var division = 48/6;
    document.getElementById("devise").innerHTML="48/6=" + division;
}

function more_math() {
    var crazy = (1+2)*10/2-5;
    document.getElementById("equation").innerHTML="1 plus 2, multiplied by 10, \
                        divided in half and then subtracted by 5 equals " + crazy;
}

function modulus_Operator() {
    var str = "there should be a remainder"
    document.getElementById("button_text").innerHTML=str

    var simple_math = 25/6;
    document.getElementById("maths").innerHTML="When you divide 25/6 there should be a remainder of:" + simple_math;

}

function negation_Operator() {
    var x = 10
    document.getElementById("negative").innerHTML="-"+x;
}

function increment() {
var s = 5;
s++;
document.write(s);
}

var q = 5.25;
q--;
document.write(q);

window.alert(Math.random());

window.alert(Math.random()*100)

document.getElementById("pie").innerHTML= Math.PI;

document.getElementById("rounded").innerHTML= Math.round(5.6);