moneyCofla = prompt("how much money does Cofla have?"); /* Cofla have $3 USD */
moneyRoberto = prompt("how much money does Roberto have?"); /*Roberto have $1.5 USD */
moneyPedro = prompt("how much money does Pedro have?"); /* Pedro have $1.7 USD */

moneyCofla = parseInt(moneyCofla); /* "3" = 3 CHANGE TEXT TO NUMBER */

/* COFLA */
if (moneyCofla >= 0.6 && moneyCofla < 1) {
    alert("Cofla, buy the water ice cream"); //CHOOSE ICE CREAM//
    alert("and you get back " + (moneyCofla-0.6));  /* SEE RETURN*/
}
else if (moneyCofla >= 1 && moneyCofla <1.6) {
    alert("Cofla, buy the cream ice cream");
    alert("and you get back " + (moneyCofla-1));
}
else if (moneyCofla >= 1.6 && moneyCofla <1.7) {
    alert("Cofla, buy the heladix ice cream");
    alert("and you get back " + (moneyCofla-1.6));
}
else if (moneyCofla >= 1.7 && moneyCofla <1.8) {
    alert("Cofla, buy the heladovich ice cream");
    alert("and you get back " + (moneyCofla-1.7));
}
else if (moneyCofla >= 1.8 && moneyCofla <2.9) {
    alert("Cofla, buy the helardo ice cream");
    alert("and you get back " + (moneyCofla-1.8));
}
else if (moneyCofla >= 2.9) {
    alert("Cofla, buy the confites ice cream or Pote of 1/4 kg");
    alert("and you get back " + (moneyCofla-2.9))
} 
else {
    alert("Sorry Cofla, you do not have enough money");
}

/* ROBERTO */
if (moneyRoberto >= 0.6 && moneyRoberto < 1) {
    alert("Roberto, buy the water ice cream")
}
else if (moneyRoberto>= 1 && moneyRoberto <1.6) {
    alert("Roberto, buy the cream ice cream")
}
else if (moneyRoberto >= 1.6 && moneyRoberto <1.7) {
    alert("Roberto, buy the heladix ice cream")
}
else if (moneyRoberto >= 1.7 && moneyRoberto<1.8) {
    alert("Roberto, buy the heladovich ice cream")
}
else if (moneyRoberto >= 1.8 && moneyRoberto <2.9) {
    alert("Roberto, buy the helardo ice cream ")
}
else if (moneyRoberto >= 2.9) {
    alert("Roberto, buy the confites ice cream or Pote of 1/4 kg");
} 
else {
    alert("Sorry Roberto, you do not have enough money");
}
/* Pedro */
if (moneyPedro >= 0.6 && moneyPedro < 1) {
    alert("Pedro, buy the water ice cream")
}
else if (moneyPedro >= 1 && moneyPedro <1.6) {
    alert("Pedro, buy the cream ice cream")
}
else if (moneyPedro >= 1.6 && moneyPedro <1.7) {
    alert("Pedro, buy the heladix ice cream")
}
else if (moneyPedro >= 1.7 && moneyPedro <1.8) {
    alert("Pedro, buy the heladovich ice cream")
}
else if (moneyPedro >= 1.8 && moneyPedro <2.9) {
    alert("Pedro, buy the helardo ice cream")
}
else if (moneyPedro >= 2.9) {
    alert("Pedro, buy the confites ice cream or Pote of 1/4 kg");
} 
else {
    alert("Sorry Pedro, you do not have enough money");
}