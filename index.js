//inizializazzione variabili

// tariffa per kilometro
const rate = 0.21

// messaggii iniziale
console.log(`la tariffa base del biglietto è di 0.21 euro al kilometro`);

console.log(`quanti kilometri deve percorrere il passeggero?`);

 //assegna un valore numerico ai kilometri
let kilometers = 100 // <--- assegnare valore 
console.log(`il passeggero deve percorrere` + `: ` + kilometers + ` ` + `kilometri`);

//calcolo della tariffa del biglietto
let finalRate
finalRate = rate * kilometers
console.log(`il prezzo del biglietto di base è quindi` + ` ` + finalRate.toFixed(2) + `€`);

// dichiarazione età del passeggero 
console.log(`se il passeggero ha meno di 18 anni il biglietto viene scontato del 20%`);
console.log(`se il passeggero ha più di 65 anni il biglietto viene scontato del 40%`);
console.log(`quanti anni ha il passeggero?`);

//assegna un valore numerico all'eta del passeggero 
let age = 70     // <--- assegnare valore 
console.log(`il passeggero ha` + `: ` + age + ` ` + `anni`);

//condizione SE il passeggero è maggiorenne
if (age < 18) {
    finalRate = (finalRate_2 - (finalRate / 100) * 20)
    console.log(`Dato che il passeggero è minorenne il prezzo del biglietto scontato è di` + ` ` + finalRate.toFixed(2) + `€`);
}

//condizione SE il passeggero ha piu di 65 anni
else if (age > 65) {
    finalRate = (finalRate - (finalRate / 100) * 40)
    console.log(`Dato che il passeggero ha piu di 65 anni il prezzo del biglietto scontato è di` + ` ` + finalRate.toFixed(2) + `€`);
}

//tutto il resto dei casi
else {
    console.log(`il prezzo del biglietto rimane invariato dato che l'eta non rientra in nessuna scontistica` + ` ` + finalRate.toFixed(2) + `€`);
}



console.log(``);



console.log(`quanti kilometri deve percorrere il secondo passeggero?`);

 //assegna un valore numerico ai kilometri
let kilometers_2 = 100 // <--- assegnare valore 
console.log(`il secondo passeggero deve percorrere` + `: ` + kilometers_2 + ` ` + `kilometri`);

//calcolo della tariffa del biglietto
let finalRate_2
finalRate_2 = rate * kilometers_2
console.log(`il prezzo del secondo biglietto di base è quindi` + ` ` + finalRate_2.toFixed(2) + `€`);

// dichiarazione età del passeggero 
console.log(`quanti anni ha il passeggero?`);

//assegna un valore numerico all'eta del passeggero 
let age_2 = 10     // <--- assegnare valore 
console.log(`il passeggero ha` + `: ` + age_2 + ` ` + `anni`);

//condizione SE il passeggero è maggiorenne
if (age_2 < 18) {
    finalRate_2 = (finalRate_2 - (finalRate_2 / 100) * 20)
    console.log(`Dato che il passeggero è minorenne il prezzo del biglietto scontato è di` + ` ` + finalRate_2.toFixed(2) + `€`);
}

//condizione SE il passeggero ha piu di 65 anni
else if (age_2 > 65) {
    finalRate = (finalRate_2 - (finalRate_2 / 100) * 40)
    console.log(`Dato che il passeggero ha piu di 65 anni il prezzo del biglietto scontato è di` + ` ` + finalRate_2.toFixed(2) + `€`);
}

//tutto il resto dei casi
else {
    console.log(`il prezzo del biglietto rimane invariato dato che l'eta non rientra in nessuna scontistica` + ` ` + finalRate_2.toFixed(2) + `€`);
}


