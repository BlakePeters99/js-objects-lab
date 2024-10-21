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
console.log("Exercise 6.1 - Expect 2 true", game.gyms[1].difficulty, game.gyms[1].completed);
console.log("Exercise 6.1 - Expect 3 false", game.gyms[2].difficulty, game.gyms[2].completed);

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