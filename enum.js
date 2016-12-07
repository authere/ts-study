var numOrder;
(function (numOrder) {
    numOrder[numOrder["One"] = 1] = "One";
    numOrder[numOrder["Two"] = 2] = "Two";
    numOrder[numOrder["Three"] = 3] = "Three";
})(numOrder || (numOrder = {}));
var ord = numOrder.One;
console.log("ord=" + ord);
console.log("numOrder[1]=" + numOrder[1]);
console.log("numOrder[\"One\"]=" + numOrder["One"]);
