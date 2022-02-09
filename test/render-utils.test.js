import { renderCar } from '../render-utils.js';

const test = QUnit.test;

test('renderCar should return a <div> with toyota info', (expect) => {

    const expected = `<div class="car"><a href="/cars/?id=1"><img src="./assets/corolla.jpeg"><span class="name"></span><span>Corolla</span></a></div>`;

    const actual = renderCar({
        id: '1',
        brand: 'toyota',
        model: 'corolla',
    });
    expect.equal(actual.outerHTML, expected);
});
