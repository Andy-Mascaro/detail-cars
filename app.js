import { cars } from './data.js';
import { renderCar } from './render-utils.js';


const main = document.querySelector('main');

for (let car of cars) {
    const carDiv = renderCar(car);
    main.append(carDiv);
}
// import functions and grab DOM elements

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
