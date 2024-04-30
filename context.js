function eat() {
  console.log(`${this.name} eats fish food`);
}

class Fish {
  constructor(name) {
    this.name = name;
  }

  swim() {
    console.log(`${this.name} swimming in the water`);
  }
}

const nemo = new Fish('Nemo');

/********************************* Scenario 1 *********************************/
// eat(); // ?


/********************************* Scenario 2 *********************************/
// nemo.eat = eat;
// nemo.eat(); // ?


/********************************* Scenario 3 *********************************/
// nemo.eat = eat; 
// eat.apply(nemo); // ?


/********************************* Scenario 4 *********************************/
// nemo.swim(); // ?


/********************************* Scenario 5 *********************************/
const swim = nemo.swim //.bind(nemo)//' swim() will print 'Nemo swimming in the water', otherwise, throws an error;
// console.log(swim); // ? swim() !== nemo.swim() because with line 36, swim is defined as a function(); 
                   // when called directly as swim(), no context is assgined, thus `this` here is undefined
// nemo.swim();

swim();
