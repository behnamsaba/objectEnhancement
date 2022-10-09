// Same keys and values ES2015


const createInstructor = (firstName,lastName) => ({
    firstName,
    lastName
})



// Computed Property Names

let favoriteNumber = 42;
const instructor = {
    firstName:"colt",
    [favoriteNumber]:"That is my favorite!"
}

//createAnimal function


// function createAnimal(species, verb, noise){
//     return {
//       species,
//       [verb](){
//         return noise;
//       }
//     }
//   }