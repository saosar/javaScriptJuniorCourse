"use strict";

const definePurchase = (n)=>{
    let din = prompt(`Money of ${n}`);
    if (din >= 0.6 && din < 1) return (`${n}: water ice cream`);
    if (din >= 1 && din < 1.6) return (`${n}: cream ice cream`);
    if (din >= 1.6 && din < 1.7) return (`${n}: heladix ice cream`);
    if (din >= 1.7 && din < 1.8) return (`${n}: heladovich ice cream`);
    if (din >= 1.8 && din < 2.9) return (`${n}: helardo ice cream`);
    if (din >= 2.9) return (`${n}: confites ice cream or pote of 1/4 kg`);
    else return (`${n}: Not enough for any ice cream`)
}
console.log(definePurchase("Cofla"));
console.log(definePurchase("Pedro"));
console.log(definePurchase("Roberto"));
