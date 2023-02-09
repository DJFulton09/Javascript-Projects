function displayDate() {                                        //created a function for the date button created in HTML doc
    var str = "The time should display below";                  //defined variable, gave it a string value
        document.getElementById("Button_text").innerHTML = str; //put value of variable into the html elementbyID with id button_text
    
    var D = Date()                                          //defined variable, gave it a D value
        document.getElementById("Date").innerHTML = D;          //put value of varialble into the html elementbyID with "date" id
}

function myFunction() {                                                 //created a function
    var sent1 = "I'm learning";                                         //defined var, gave it sent1 value
        sent1 += " a ton online at the tech academy";                   //added to sent1, will be concatenated with line 10
            document.getElementById("concatenate").innerHTML = sent1;   //put value of variable into html w/"concatenate" id
}