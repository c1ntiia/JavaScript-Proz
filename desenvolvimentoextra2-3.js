const numerosDaSorte = [37, 14, 26, 5, 94, 87];

numerosDaSorte.forEach(x => {
    if (x < 50 && x % 2 === 0) {
        console.log(`${x} é par e menor que 50`);
    } else if (x < 50) {
        console.log(`${x} é menor que 50`);
    } else {
        console.log(`${x} é maior que 50`);
    }
});