var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

var repeat = 0;
while (repeat < ingredients.length){
  console.log(ingredients[repeat]);
  repeat++;
}


// Write a for loop that prints out the contents of ingredients:

for (var ing = 0; ing < ingredients.length; ing++){
  console.log(ingredients[ing]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

for (var back = 7; back >= 0; back--){
  console.log(ingredients[back]);
}