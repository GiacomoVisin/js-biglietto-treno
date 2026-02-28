//inizializazzione variabili

// tariffa per kilometro
const rate = 0.21

// messaggio iniziale
console.log(`la tariffa base del biglietto è di 0.21 euro al kilometro`);

let userInput = parseInt(prompt(`quanti kilometri ha percorso il primo passseggero?`));

console.log(`il primo passeggero ha percorso ` + userInput + ` ` + `kilometri`);


//calcolo della tariffa del biglietto
let finalPrice
finalPrice = rate * userInput
console.log(`il prezzo del biglietto di base è quindi` + ` ` + finalPrice.toFixed(2) + `€`);

// dichiarazione età del passeggero 
console.log(`se il passeggero ha meno di 18 anni il biglietto viene scontato del 20%`);
console.log(`se il passeggero ha più di 65 anni il biglietto viene scontato del 40%`);


let inputAge = parseInt(prompt(`quanti anni ha il primo passeggero?`));



//condizione SE il passeggero è maggiorenne
if (inputAge < 18) {
    finalPrice = (finalPrice - (finalPrice / 100) * 20)
    console.log(`Dato che il passeggero è minorenne il prezzo del biglietto scontato è di` + ` ` + finalPrice.toFixed(2) + `€`);
}

//condizione SE il passeggero ha piu di 65 anni
else if (inputAge > 65) {
   finalPrice = (finalPrice - (finalPrice / 100) * 40)
    console.log(`Dato che il passeggero ha piu di 65 anni il prezzo del biglietto scontato è di` + ` ` + finalPrice.toFixed(2) + `€`);
}

//tutto il resto dei casi
else {
    console.log(`il prezzo del biglietto rimane invariato dato che l'eta non rientra in nessuna scontistica` + ` ` + finalPrice.toFixed(2) + `€`);
}



console.log(``);



let userInput2 = parseInt(prompt(`quanti kilometri ha percorso il secondo passseggero?`));

console.log(`il secondo passeggero ha percorso ` + userInput2 + ` ` + `kilometri`);


//calcolo della tariffa del biglietto
let finalPrice2
finalPrice2 = rate * userInput2
console.log(`il prezzo del biglietto di base è quindi` + ` ` + finalPrice2.toFixed(2) + `€`);

// dichiarazione età del passeggero 
let inputAge2 = parseInt(prompt(`quanti anni ha il secondo passeggero?`));
console.log(`il secondo passeggero ha` + ` ` + inputAge2 + ` ` + `anni`);

//condizione SE il passeggero è maggiorenne
if (inputAge2 < 18) {
    finalPrice2 = (finalPrice2 - (finalPrice2 / 100) * 20)
    console.log(`Dato che il passeggero è minorenne il prezzo del biglietto scontato è di` + ` ` + finalPrice2.toFixed(2) + `€`);
}

//condizione SE il passeggero ha piu di 65 anni
else if (inputAge2 > 65) {
   finalPrice2 = (finalPrice2 - (finalPrice2 / 100) * 40)
    console.log(`Dato che il passeggero ha piu di 65 anni il prezzo del biglietto scontato è di` + ` ` + finalPrice2.toFixed(2) + `€`);
}

//tutto il resto dei casi
else {
    console.log(`il prezzo del biglietto rimane invariato dato che l'eta non rientra in nessuna scontistica` + ` ` + finalPrice2.toFixed(2) + `€`);
}
