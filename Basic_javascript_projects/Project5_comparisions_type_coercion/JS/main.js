function coercion() {
document.write("10" + 5)
}

document.write(typeof "red panda")  //need to figure out how to create breaks inbetween my doc.writes, my research has left me dry, ask instructor

document.write(typeof 9)

function neg_infinity() {
    var J = document.write(-3E310);
    document.getElementById("Jay").innerHTML= J

}

function pos_infinity() {
    var K = document.write(3E310);
    document.getElementById("Kay").innerHTML= K

}

function newnew() {
    var L =document.write(10>9);
    document.getElementById("Button_Text").innerHTML= L
}

function nonew() {
    var M =document.write(10<9);
    document.getElementById("Boo").innerHTML= M
}

//all the above was practice and is executable, remember to not be simple, this took you too long trying to get fancy. gotta walk before you run james.

console.log(2+2) //creating a console log, press F12 in browser, locate console and see results

console.log(10<9) //created a false boolean statement in log

document.write(10 == 10); //double equals assignment, comparison

A= 10;
B= 10;
document.write(A===B)

C= 9;
D= "9";
document.write(C===D)

E= "apple";
F= "apple";
document.write(E===F)

document.write(10>9 && 8<10)

function not_function() {
    document.getElementById("not").innerHTML= !(20>10) //not operator
}