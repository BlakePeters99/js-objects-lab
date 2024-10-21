const pokemon = require('./data.js')

const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }

// Exercise 1
//console.dir(pokemon, { maxArrayLength: null })
console.log("Exercise 1 - Expect Arcanine: ", pokemon[58].name);

// Exercise 2
//console.log(game)
console.log("Exercise 2 - commented out but completed");

/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?

Solve Exercise 3 here:
*/
game.difficulty = "Easy";
console.log("Exercise 3 - Expect Easy: ", game.difficulty)

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?

Solve Exercise 4 here:
*/
// added bulbasor to party
game.party.push(pokemon[0]);
console.log("Exercise 4 - Expect Bulbasor: ", game.party[0].name);

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?

Solve Exercise 5 here:
*/

// added pikachu to party
game.party.push(pokemon[24]);
// added Nidoran♀ to party
game.party.push(pokemon[28]);
// added Clefairy to party
game.party.push(pokemon[34]);

console.log("Exercise 5.1 - Expect Pikachu: ", game.party[1].name);
console.log("Exercise 5.2 - Expect Nidoran♀: ", game.party[2].name);
console.log("Exercise 5.3 - Expect Clefairy: ", game.party[3].name);


/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.

Solve Exercise 6 here:
*/

// iterate through gym array in game
for (let i = 0; i < game.gyms.length; i++) {
  // setting gymn completed to true for difficulty less than 3
  if (game.gyms[i].difficulty < 3) {
    game.gyms[i].completed = true;
  }
}

console.log("Exercise 6.1 - Expect 1 true", game.gyms[0].difficulty, game.gyms[0].completed);
console.log("Exercise 6.2 - Expect 2 true", game.gyms[1].difficulty, game.gyms[1].completed);
console.log("Exercise 6.3 - Expect 3 false", game.gyms[2].difficulty, game.gyms[2].completed);

/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 

Solve Exercise 7 here:
*/

console.log("Exercise 7.1 - Expect Bulbasaur: ", game.party[0].name);
game.party[0] = pokemon[1];
console.log("Exercise 7.2 - Expect Ivysaur: ", game.party[0].name);

/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/

for (let i = 0; i < game.party.length; i++) {
  console.log(`Exercise 8.${i+1} - Party member #${i+1}: ${game.party[i].name}`);
}

/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.

Solve Exercise 9 here:
*/
let exerciseIncr = 1;
for (let i = 0; i < pokemon.length; i++) {
  if (pokemon[i].starter) {
    console.log(`Exercise 9.${exerciseIncr++} - Starter: ${pokemon[i].name}`);
  }
}

/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/

function catchPokemon(newPokemon) {
  game.party.push(newPokemon);
}

console.log("Exercise 10.1 - Expect undefined: ", game.party[4]);

catchPokemon(pokemon[99]);

console.log("Exercise 10.2 - Expect Voltorb: ", game.party[4].name);

/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/

console.log("Exercise 11.1 - Expect 7:", game.items[1].quantity);


function catchPokemon(newPokemon) {
  game.party.push(newPokemon);
  game.items[1].quantity--;
}

catchPokemon(pokemon[150]);

console.log("Exercise 11.2 - Expect 6: ", game.items[1].quantity);
console.log("Exercise 11.3 - Expect Mew: ", game.party[5].name);

/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/

// iterate through gym array in game
for (let i = 0; i < game.gyms.length; i++) {
  // setting gymn completed to true for difficulty less than 6
  if (game.gyms[i].difficulty < 6) {
    game.gyms[i].completed = true;
  }
}

console.log("Exercise 12.1 - Expect 4 true", game.gyms[3].difficulty, game.gyms[3].completed);
console.log("Exercise 12.2 - Expect 5 true", game.gyms[4].difficulty, game.gyms[4].completed);
console.log("Exercise 12.3 - Expect 6 false", game.gyms[5].difficulty, game.gyms[5].completed);

/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/

game.gymStatus = function() {
  const gymTally = {
    incomplete: 0,
    completed: 0
  };

  // Iterate through gyms to tally the gyms that are completed & incomplete
  for (let i = 0; i < game.gyms.length; i++) {
    if (game.gyms[i].completed) {
      gymTally.completed++;
    }
    else {
      gymTally.incomplete++;
    }
  }
  console.log("Exercise 13 - Expect incomplete 3 & completed 5: ", gymTally); 
}

game.gymStatus();

/*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/

game.partyCount = function () {
  return game.party.length;
}

console.log("Exercise 14 - Expect 6: ", game.partyCount());

/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/
// iterate through gym array in game
for (let i = 0; i < game.gyms.length; i++) {
  // setting gymn completed to true for difficulty less than 8
  if (game.gyms[i].difficulty < 8) {
    game.gyms[i].completed = true;
  }
}

console.log("Exercise 15.1 - Expect 7 true", game.gyms[6].difficulty, game.gyms[6].completed);
console.log("Exercise 15.2 - Expect 8 false", game.gyms[7].difficulty, game.gyms[7].completed);

/*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.

Solve Exercise 16 here:
*/

console.log("Exercise 16 Game: ", game);

/*
Exercise 17
1. Arrange the Pokémon in `game.party` by their HP. The one with the highest HP should come first.
2. You'll need to use the `.sort()` method. How does the compare function work in sorting numbers?

Solve Exercise 17 here:
*/

console.log("Exercise 17.1 -  Presorted Party (by HP):", game.party);

game.party.sort((a,b) => a.hp - b.hp);

console.log("Exercise 17.2 -  Postsorted Party (by HP):", game.party);

/*
Exercise 18
Add a new property to the `game` object called `collection` and initialize its value to an empty array.

Copy the `catchPokemon` method you wrote in Exercise Twelve and paste it below. Modify it so that:
  - Ensure that no more than six Pokemon can be in the party at any time. 
    Excess Pokemon should be placed in the `game.collection` array.
  - It's up to you how to distribute Pokemon in a situation where more than six 
    would be placed into the `game.party` array.

Again, for this exercise, it's okay to have a negative number of pokeballs.

After updating the method, use it by calling it and passing in a pokemon object of your choice from the `pokemon` data to catch it.

Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 18 here:
*/

game.collection = [];

function catchPokemon(newPokemon) {
  if (game.party.length < 6) {
    game.party.push(newPokemon);
  }
  else {
    game.collection.push(newPokemon);
  }
  game.items[1].quantity--;
}

console.log("Exercise 18.1 - Expect 6:", game.items[1].quantity);

catchPokemon(pokemon[149]);

console.log("Exercise 18.2 - Expect 5: ", game.items[1].quantity);
console.log("Exercise 18.3 - Expect Mewtwo: ", game.collection[0].name);

/*
Exercise 19
Copy the `catchPokemon` method that you just wrote above, and paste it below. The time has come to make it so that we cannot catch a Pokemon when we do not have any pokeballs to catch it with. 

Modify the method so that if there are no pokeballs a message will be displayed that there are not enough pokeballs to catch the desired Pokemon.

Also, ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.

Solve Exercise 19 here:
*/

function catchPokemon(newPokemon) {
  // check if there are enough pokeballs
  if (game.items[1].quantity <= 0) {
    console.log("There are not enough pokeballs to catch the desired Pokemon");
  }
  // catch pokemon and sort it
  else {
    if (game.party.length < 6) {
      game.party.push(newPokemon);
    }
    else {
      game.collection.push(newPokemon);
    }
    game.items[1].quantity--;
  }
}

console.log("Exercise 19.1 - Expect 5:", game.items[1].quantity);

// The SPAM of diglets!!
catchPokemon(pokemon[49]);
catchPokemon(pokemon[49]);
catchPokemon(pokemon[49]);
catchPokemon(pokemon[49]);
catchPokemon(pokemon[49]);

console.log("Exercise 19.2 - Expect 0: ", game.items[1].quantity);
console.log("Exercise 19.3 - Expect Diglet: ", game.collection[5].name);

// One too many diglets... ;(
catchPokemon(pokemon[51]);

/*
Exercise 20
Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify is so that you can just pass in the name of a Pokemon instead of an entire object, and the method will look up the Pokemon from the data set for you.

The string passed in should be allowed to be any case (for example, if the string 'PiKacHU' is passed to the function, it should match to 'Pikachu' in the data set). 

If there is not a match, then return a string noting that the selected Pokemon does not exist. Ensure you do not decrement the pokeball count if an invalid Pokemon name is passed in, and also ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.

Solve Exercise 20 here:
*/

function catchPokemon(newPokemon) {
  // check if there are enough pokeballs
  if (game.items[1].quantity <= 0) {
    console.log("There are not enough pokeballs to catch the desired Pokemon");
  }
  // catch pokemon and sort it
  else {
    // Ex 20 (checking if arg is a string and checking if in pokemon data.js)
    // Check variable to stop for loop when pokemon is found and also if newpokemon is not in pokemon list
    let check = false;
    if (typeof newPokemon === 'string') {
      for (let i = 0; i < pokemon.length && check != true; i++) {
         if (newPokemon.toLowerCase() === pokemon[i].name.toLowerCase()) {
           if (game.party.length < 6) {
             game.party.push(pokemon[i]);
           }
           else {
             game.collection.push(pokemon[i]);
           }
           check = true;
         }
      }
      if (!check) {
        return "Selected Pokemon does not exist";
      }
    }
    // regular call of function
    else {
      if (game.party.length < 6) {
        game.party.push(newPokemon);
      }
      else {
        game.collection.push(newPokemon);
      }
    }
    game.items[1].quantity--;
  }
}


// adding pokeballs for ex 20 testing
game.items[1].quantity = 3;

console.log("Exercise 20.1 - Expect 3: ", game.items[1].quantity);

// catch pikachu with random uppercase
catchPokemon("piKAchU");

console.log("Exercise 20.2 - Expect Pikachu: ", game.collection[6].name);
console.log("Exercise 20.3 - Expect Selected Pokemon does not exist: ", catchPokemon("mewTHREE"));
console.log("Exercise 20.4 - Expect 2: ", game.items[1].quantity);


/*
Exercise 21
Dynamically construct an object with the existing `pokemon` data sorted by the different pokemon types. The object will have this structure:

{
  grass: [
    { number: 1, name: 'Bulbasaur', type: 'grass', hp: 45, starter: true },
    { number: 2, name: 'Ivysaur', type: 'grass', hp: 60, starter: false },
    { number: 3, name: 'Venusaur', type: 'grass', hp: 80, starter: false },
    * more grass type Pokemon objects...
  ],
  fire: [
    { number: 4, name: 'Charmander', type: 'fire', hp: 39, starter: true },
    * more fire type Pokemon objects...
  ],
  water: [
    * water type Pokemon objects...
  ],
  * etc... until there is an array for every Pokemon type!
}

Log the object when it's constructed.

Solve Exercise 21 here:
*/

// initialize the object with empty arrays
const dynamicPokemon = {
  grass: [],
  water: [],
  fire: [],
  bug: [],
  normal: [],
  poison: [],
  electric: [],
  ground: [],
  fairy: [],
  psychic: [],
  ice: [],
  rock: [],
  dragon: []
}

// use switch to sort by pokemon type
for (let i = 0; i < pokemon.length; i++) {
  switch (pokemon[i].type) {
    case "grass":
      dynamicPokemon.grass.push(pokemon[i])
      break;
    case "water":
      dynamicPokemon.water.push(pokemon[i])
      break;
    case "fire":
      dynamicPokemon.fire.push(pokemon[i])
      break;
    case "bug":
      dynamicPokemon.bug.push(pokemon[i])
      break;
    case "normal":
      dynamicPokemon.normal.push(pokemon[i])
      break;
    case "poison":
      dynamicPokemon.poison.push(pokemon[i])
      break;
      case "electric":
        dynamicPokemon.electric.push(pokemon[i])
    break;
    case "fairy":
      dynamicPokemon.fairy.push(pokemon[i])
      break;
    case "psychic":
      dynamicPokemon.psychic.push(pokemon[i])
      break;
    case "ice":
      dynamicPokemon.ice.push(pokemon[i])
      break;
    case "rock":
      dynamicPokemon.rock.push(pokemon[i])
      break;
    case "dragon":
      dynamicPokemon.dragon.push(pokemon[i])
      break;
  }
}

console.log("Exercise 21: Commented out due to length cap on terminal. Uncomment to see results.")

//! UNCOMMENT THIS TO SEE RESULT
// Commented due to size in terminal
//console.log("Exercise 21: ", dynamicPokemon);
