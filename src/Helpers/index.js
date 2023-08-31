const formatearDinero = (valor) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });
    return formatter.format(valor)
}


const calcularTotalPagar = (cantidad) => {

    let total;

    if(cantidad <= 0) {
        total = 0
    } else if (cantidad >= 1 && cantidad <= 33) {
        total = 20
    } else if (cantidad >= 33 && cantidad <= 74) {
        total = 22
    } else if (cantidad >= 74 && cantidad <= 80) {
        total = 23
    } else if (cantidad >= 80 && cantidad <= 90) {
        total = 24
    } else if (cantidad >= 90 && cantidad <= 110) {
        total = 25
    } else if (cantidad >= 110 && cantidad <= 160) {
        total = 25
    } else if (cantidad >= 160 && cantidad <= 180) {
        total = 26
    } else if (cantidad >= 180 && cantidad <= 190) {
        total = 27
    } else if (cantidad >= 190 && cantidad <= 210) {
        total = 28
    } else if (cantidad >= 210 && cantidad <= 230) {
        total = 30
    } else if (cantidad >= 230 && cantidad <= 250) {
        total = 32
    } else if (cantidad >= 250 && cantidad <= 340) {
        total = 35
    } else if (cantidad >= 250 && cantidad <= 340) {
        total = 40
    } else if (cantidad >= 340 && cantidad <= 440) {
        total = 50
    } return total;
}


const calcularArillo = (cantidad) => {

    let arillo;


    if(cantidad <= 0) {
        arillo = '/'
    } else if (cantidad >= 1 && cantidad <= 33) {
        arillo = 8
    } else if (cantidad >= 33 && cantidad <= 74) {
        arillo = 10
    } else if (cantidad >= 74 && cantidad <= 80) {
        arillo = 11
    } else if (cantidad >= 80 && cantidad <= 90) {
        arillo = 12
    } else if (cantidad >= 90 && cantidad <= 110) {
        arillo = 14
    } else if (cantidad >= 110 && cantidad <= 160) {
        arillo = 15
    } else if (cantidad >= 160 && cantidad <= 180) {
        arillo = 18
    } else if (cantidad >= 180 && cantidad <= 190) {
        arillo = 20
    } else if (cantidad >= 190 && cantidad <= 210) {
        arillo = 21
    } else if (cantidad >= 210 && cantidad <= 230) {
        arillo = 23
    } else if (cantidad >= 230 && cantidad <= 250) {
        arillo = 25
    } else if (cantidad >= 250 && cantidad <= 340) {
        arillo = 30
    } else if (cantidad >= 250 && cantidad <= 340) {
        arillo = 38
    } else if (cantidad >= 340 && cantidad <= 440) {
        arillo = 44
    } return arillo;
}


export {formatearDinero, calcularTotalPagar, calcularArillo}
