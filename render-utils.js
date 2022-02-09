// export function renderCar(car) {
//     const div = document.createElement('div');
//     div.classList.add('car');
    
//     const h2 = document.createElement('h2');
//     h2.textContent = car.brand.toUpperCase();

//     const p = document.createElement('p');
//     p.textContent = `${car.model} .`; 
//     div.append(h2, p);
//     return div;

// }

export function renderCar(car) {
    const div = document.createElement('div');
    div.classList.add('car');
    div.style.top = car.top;
    div.style.left = car.left;
    
    const a = document.createElement('a');
    
    a.href = `/cars/?id=${car.id}`;

    const img = document.createElement('img');
    img.src = `./assets/${car.image}.jpeg`;

    const nameSpan = document.createElement('span');
    nameSpan.textContent = car.name;
    nameSpan.classList.add('name');

    const span = document.createElement('span');
    span.textContent = car.model;

    a.append(img, nameSpan, span);
    div.append(a);
    return div;
}