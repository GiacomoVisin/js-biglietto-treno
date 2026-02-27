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
