// STEP 1
// class Cat {
//     constructor(name) {
//         this.name = name
//     }
//     }

// class Dog {
// 	constructor() {
// 		console.log(`The new Dog has been created!`)
// 	}
// } 

// STEP 2
// class Cat {
//     constructor(name) {
//         this.name = name
//     }
//     }
//     const myCat = new Cat('Nixon')
//     console.log(myCat.name)

//     class Dog {
//         constructor() {
//             console.log(`The new Dog has been created!`)
//         }
//     }
//     const myDog = new Dog() 


// STEP 3
// class Animal {
//     constructor() {
//     }
  
//     create() {
//       console.log(`Animal has been created!`);
//     }
//   }
//   const Animal1 = new Animal();
//   Animal1.create();

// STEP 4
// class Animal {
//     constructor(name) {
//         this.name = name
//     }
  
//     create() {
//       console.log(`Animal ${this.name} has been created!`);
//     }
//   }
  
//   const Animal1 = new Animal('Lion');
//   Animal1.create();

// STEP 5
// class Animal {
//     constructor(type, breed, color, height, length) {
//       this.type = type
//       this.breed = breed
//       this.color = color
//       this.height = height
//       this.length = length
//     }
// }
// let myAnimal = new Animal("Cat", "Siamese", "Brown", "25cm", "50cm")

// STEP 6
// for (const property in myAnimal) {
//         console.log(`${property}: ${myAnimal[property]}`)
//   }
// STEP 7

// STEP 8

// STEP 9



// STEP 6


// STEP 7
 /*class Animal {
    constructor(type, breed, color, height, length) {
      this.type = type
      this.breed = breed
      this.color = color
      this.height = height
      this.length = length
    }
    speak() {
        if (this.type === "dog") {
            console.log(`The ${this.color} dog is barking!`)
          } else if (this.type === "cat") {
            console.log(`The ${this.color} cat is meowing!`)
          } else {
            console.log("Unknown animal type")
          }
    }   
}
let cat = new Animal("cat", "Siamese", "white", "25cm", "50cm")
let dog = new Animal("dog", "Golden Retriever", "brown", "25cm", "50cm")
cat.speak()
dog.speak() */


// STEP 8
//  class Animal {
//     constructor(type, breed, color, height, length) {
//       this.type = type
//       this.breed = breed
//       this.color = color
//       this.height = height
//       this.length = length
//     }
//     speak() {
//         if (this.type === "dog") {
//             console.log(`The ${this.color} dog is barking!`)
//           } else if (this.type === "cat") {
//             console.log(`The ${this.color} cat is meowing!`)
//           } else {
//             console.log("Unknown animal type")
//           }
//     }   
// }
// let cat = new Animal("cat", "Siamese", "white", "25cm", "50cm")
// let dog = new Animal("dog", "Golden Retriever", "brown", "25cm", "50cm")
// cat.speak()
// dog.speak()
 
// STEP 9
 /*String.prototype.findWords = function(word) {
    const matches = this.match(new RegExp(word, 'gi'))
    console.log(matches)
    let count;
    if (matches) {
    count = matches.length;
    } else {
    count = 0;
    }
    console.log('count: ' + count)
    // alert(`The word "${word}" was found ${count} time(s) in the paragraph.`)
    console.log(`The word "${word}" was found ${count} time(s) in the paragraph.`)

  }
  const text = "This is an example paragraph. The word 'example' appears multiple times in this example."
  text.findWords("example") */