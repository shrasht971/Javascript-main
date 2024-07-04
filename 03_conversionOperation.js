// let score="33"       //"33" =>33
let score="33abc"       //"33abc" => NaN
// let score="Shrashti"   
// let score=null    //null =>0
// let score=undefined  //undefined =>NaN
// let score=true    //true => 1 , false =>0
console.log(typeof(score));
let ValueOfNumber = Number(score)
console.log(typeof ValueOfNumber);
console.log(ValueOfNumber)

let isLoggedIn =""   
let ValueInBoolen = Boolean(isLoggedIn)
console.log(typeof ValueInBoolen)
console.log(ValueInBoolen)

//1 =>true; 0 =>false
//" " => false
//"shrashti" =>true

let someNumber = 4
let ValueInString = String(someNumber)
console.log(typeof ValueInString)
console.log(ValueInString)