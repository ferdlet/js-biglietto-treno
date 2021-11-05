const km = parseInt(prompt('Quanti Km si vuole percorrere?'));
console.log(km);

const anni = parseInt(prompt('Quanti anni ha il viaggitore?'));
console.log(anni);

let sconto;

if (anni < 18) {
    sconto = 20 / 100;
} else if (anni >= 65) {
    sconto = 40 / 100;
    console.log(prezzo);
} else {
    sconto = 1;
}

let prezzo = km * 0.21 * sconto;
console.log(prezzo);

if ((isNaN(anni))||(isNaN(km))||(km <= 0)||(anni < 0)) {
    prezzo = 'Non hai inserito un numero corretto';
} else {
    prezzo = 'Il prezzo calcolato è di € ' + prezzo.toFixed(2);
}

document.getElementById('prezzo-biglietto').innerHTML = prezzo;