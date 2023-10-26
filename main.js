let eta = parseInt(prompt("Quanti anni hai ?", "33"));
let chilometri = parseFloat(prompt("Quanti chilometri devi percorrere?", ""));

document.getElementById("chilometri").value = "";

let discount;
let price = chilometri * 0.21;

document.getElementById("price").innerHTML = price;
console.log(price)
