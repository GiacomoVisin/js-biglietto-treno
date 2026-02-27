// messaggio iniziale
console.log(`quanti kilometri deve percorrere il passeggero?`);

// tariffa per kilometro
const rate = 0.21

let kilometers = 100  //assegna un valore numerico ai kilometri
console.log(`il passeggero deve percorrere` + `: ` + kilometers + ` ` + `kilometri`);

//calcolo della tariffa del biglietto
let finalRate
finalRate = rate * kilometers
console.log(`il prezzo del biglietto di base è di` + ` ` + finalRate.toFixed(2) +  `€`);

// dichiarazione età del passeggero 
console.log(`quanti anni ha il passeggero?`);

//assegna un valore numerico all'eta del passeggero 
let age = 26
console.log(`il passeggero ha` + `: ` + age + ` ` + `anni`);

//condizione SE il passeggero è maggiorenne
if (age < 18) {
    finalRate = (finalRate - (finalRate / 100) * 20)
    console.log(`Dato che il passeggero è minorenne il prezzo del biglietto scontato è di` + ` ` + finalRate.toFixed(2) + `€`);
}

//condizione SE il passeggero ha piu di 65 anni
else if(age > 65)
{
    finalRate = (finalRate - (finalRate / 100) * 40)
    console.log(`Dato che il passeggero ha piu di 65 anni il prezzo del biglietto scontato è di` + ` ` + finalRate.toFixed(2) +  `€`);
}


