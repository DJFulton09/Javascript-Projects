function my_dictionary() {              //created a KVP dictionary
    var Animal = {
        species: "Panda",
        color: "mainly red and white",
        age: 9,
        breed: "red panda",
        sound: "whine"

    };
        delete Animal.breed;      //deleted the breed key, should now display undefined
        document.getElementById("dictionaries").innerHTML= Animal.breed;
}
