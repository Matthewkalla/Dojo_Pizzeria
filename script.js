// var sandwich = {
//     bread:    "sourdough",
//     protein:  "london broil",
//     cheese:   "lacey swiss cheese",
//     toppings: ["romaine lettuce", "heirloom tomatoes", "horseradish sauce"]
// };
    
// console.log(sandwich);

// function sandwichFactory(bread, protein, cheese, toppings) {
//     var sandwich = {};
//     sandwich.bread = bread;
//     sandwich.protein = protein;
//     sandwich.cheese = cheese;
//     sandwich.toppings = toppings;
//     return sandwich;
// }
    
// var s1 = sandwichFactory("wheat", "turkey", "provolone", ["mustard", "fried onions", "arugula"]);
// console.log(s1);


function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven('deep dish', 'traditional', ['mozzarella'], ['pepperoni', 'sausage']);
var pizza2 = pizzaOven('hand tossed', 'marinara', ['mozzarella', 'feta'], ['mushrooms', 'olives', 'onions']);


function randomPizza(){

    var randPizza = {};
    var genCrust = [];
    var genSauce = [];
    var genCheese = [];
    var genTop = [];

    //returns a random crust;
    function randomCrust(){
        var crust = Math.floor(Math.random() * 6);
            if(crust == 0){
                crust = 'stuffed';
            }
            else if(crust == 1){
                crust = 'thin';
            }
    
            else if(crust == 2){
                crust = 'thick';
            }
    
            else if(crust == 3){
                crust = 'hand-tossed';
            }
            
            else if(crust == 4){
                crust = 'flatbread';
            }
    
            else {
                crust = 'chicago deep dish';
            }
        
        return crust;
    }
    
    //The variable to hold the random sauce type

    function randomSauce(){
    //returns a random Sauce
        var sauce = Math.floor(Math.random() * 6);
            if(sauce == 0){
                sauce = 'pesto';
            }
    
            else if(sauce == 1){
                sauce = 'white garlic';
            }
    
            else if(sauce == 2){
                sauce = 'garlic ranch';
            }
    
            else if(sauce == 3){
                sauce = 'hummus';
            }
    
            else if(sauce == 4){
                sauce = 'buffalo';
            }
    
            else {
                sauce = 'marinara';
            }
        
        return sauce;
    }
    

    function randomCheese(){
    //returns a random Cheese

        var cheese = Math.floor(Math.random()*5);
            if(cheese == 0){
                cheese = 'mozzarella';
            }
    
            else if(cheese == 1){
                cheese = 'cheddar';
            }
    
            else if(cheese == 2){
                cheese = 'provolone';
            }
    
            else if(cheese == 3){
                cheese = 'parmesan';
            }
    
            else {
                cheese = 'gouda';
            }
        
        return cheese;
    }


    function randomTopping(){
    //returns a random topping
    var top = Math.floor(Math.random() * 10);
        if(top == 0){
            top = 'pepperoni';
        }

        else if(top == 1){
            top = 'mushroom';
        }
        else if(top == 2){
            top = 'extra cheese';
        }
        else if(top == 3){
            top = 'sausage';
        }
        else if(top == 4){
            top = 'onion';
        }
        else if(top == 5){
            top = 'black olives';
        }
        else if(top == 6){
            top = 'green pepper';
        }
        else if(top == 7){
            top = 'fresh garlic';
        }
        else if(top == 8){
            top = 'tomato';
        }
        else {
            top = 'fresh basil';
        }
    
        return top;
    }

    genCrust.push(randomCrust());
    //random crust is generated.

    genSauce.push(randomSauce());
    //random sauce is generatated, and can have more than one sauce, randomly decided.
    if(Math.floor(Math.random() * 2) == 0){
        //randomize up to two sauces:
    genSauce.push(randomSauce());
    }

    genCheese.push(randomCheese());
    //random cheese is generated, up to two different cheeses.
    if(Math.floor(Math.random() * 2) == 0){
        genCheese.push(randomCheese());
    }

    genTop.push(randomTopping());
    //random topping is generated, up the 3 different toppings.
    var topDecider = Math.floor(Math.random() * 3);
    if(topDecider == 1){
        genTop.push(randomTopping());
    }
    else if(topDecider == 2){
        genTop.push(randomTopping());
        genTop.push(randomTopping());
    }


        randPizza = pizzaOven(genCrust, genSauce, genCheese, genTop);
        return randPizza;
}

var pizza3 = randomPizza();

console.log(pizza3);
