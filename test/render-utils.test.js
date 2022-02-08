import { renderCar } from '../render-utils.js';

const test = QUnit.test;

test('renderCar should return a <div> with honda info', (expect) => {

    const expected = `<<div class="cars" id="cars-list"><div class="car"><h2>TOYOTA</h2><p>Corolla,Tundra,Camry .</p></div><div class="car"><h2>SUBARU</h2><p>Impreza,Wrx,Outback .</p></div><div class="car"><h2>FORD</h2><p>Mustang,Bronco,Focus .</p></div><div class="car"><h2>HONDA</h2><p>Accord,Pilot,Civic .</p></div></div>`;

    const actual = renderCar({
        // brand: 'honda',
        // model:['Accord', 'Pilot', 'Civic']
    });
    expect.equal(actual.outerHTML, expected);
});
