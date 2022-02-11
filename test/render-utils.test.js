import { renderCar } from '../render-utils.js';

const test = QUnit.test;

test('renderCar should return a <div> with toyota info', (expect) => {

    const expected = `<div class="car-detail">
    <h1></h1><span id="car-name"></span><img id="car-image" src="../assets/corolla.jpeg"><p id="car-model">Toyota,Corolla,Sedan</p></div></div>`;

    const actual = renderCar({
        id: 1,
        model:['Toyota', 'Corolla', 'Sedan'],
        image: 'corolla',
    });
    expect.equal(actual.outerHTML, expected);
});
