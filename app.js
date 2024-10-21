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

console.log("Exercise 4.1 - Expect Pikachu: ", game.party[1].name);
console.log("Exercise 4.2 - Expect Nidoran♀: ", game.party[2].name);
console.log("Exercise 4.3 - Expect Clefairy: ", game.party[3].name);
