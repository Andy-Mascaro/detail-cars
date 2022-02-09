import { cars } from '../data.js';
import { findById } from '../utils.js';

const carName = document.getElementById ('car-name');
const carImage = document.getElementById ('car-image');
const carModel = document.getElementById ('car-model');

const params = new URLSearchParams(window.location.search);
const car = findById(params.get('id'), cars);
// console.log();


carName.textContent = car.name;
carImage.src = `../assets/${car.image}.jpeg`;
carModel.textContent = car.model;
