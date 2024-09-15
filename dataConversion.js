//CONVERTING A STRING TO A NUMBER

let price = "200";

//USING THE parseInt()
console.log("USING THE parseInt()");

price_converttoNumber1 = parseInt(price);
console.log("PRICE: " + price);
console.log("PRICE(converted to number): " + price_converttoNumber1);
console.log("DATA TYPE: " + typeof price_converttoNumber1);
//output: 
// USING THE parseInt()
// PRICE: 200
// PRICE(converted to number): 200
// DATA TYPE: number

console.log("USING THE Number()");

price_converttoNumber2 = (Number(price));
console.log("PRICE: " + price);
console.log("PRICE(converted to number): " + price_converttoNumber2);
console.log("DATA TYPE: " + typeof price_converttoNumber2);
//output: 
// USING THE Number()
// PRICE: 200
// PRICE(converted to number): 200
// DATA TYPE: number


//USING THE + operator
console.log("USING THE + operator")

price_converttoNumber3 = (+(price));
console.log("PRICE: " + price);
console.log("PRICE(converted to number): " + price_converttoNumber3);
console.log("DATA TYPE: " +  typeof price_converttoNumber3);
//output: 
// USING THE + operator
// PRICE: 200
// PRICE(converted to number): 200
// DATA TYPE: number

// CONVERTING A NUMBER TO A STRING
let distance = 150;

//USING THE .toString()
console.log("USING THE toString()");

distance_converttoString1 = distance.toString();
console.log("DISTANCE: " + distance);
console.log("DISTANCE (converted to string): " + distance_converttoString1);
console.log("DATA TYPE: " + typeof distance_converttoString1);
//output:
// USING THE toString()
// DISTANCE: 150
// DISTANCE (converted to string): 150
// DATA TYPE: string


//USING THE String()
console.log("USING THE String()");

distance_converttoString2 = String(distance);
console.log("DISTANCE: " + distance);
console.log("DISTANCE(converted to string): " + distance_converttoString2);
console.log("DATA TYPE: " + typeof distance_converttoString2);
//output: 
// USING THE String()
// DISTANCE: 150
// DISTANCE(converted to string): 150
// DATA TYPE: string


// CONVERTING A STRING TO A DECIMAL NUMBER
let weight = "72.5";
//USING THE parseFloat()
console.log("USING THE parseFloat()");

weight_converttoNumber = parseFloat(weight);
console.log("WEIGHT: " + weight);
console.log("WEIGHT(converted to decimal number): " + weight_converttoNumber)
console.log("DATA TYPE: " + typeof weight_converttoNumber);
//output:
// USING THE parseFloat()
// WEIGHT: 72.5
// WEIGHT(converted to decimal number): 72.5
// DATA TYPE: number

//overall output:
// USING THE parseInt()
// PRICE: 200
// PRICE(converted to number): 200
// DATA TYPE: number
// USING THE Number()
// PRICE: 200
// PRICE(converted to number): 200
// DATA TYPE: number
// USING THE + operator
// PRICE: 200
// PRICE(converted to number): 200
// DATA TYPE: number
// USING THE toString()
// DISTANCE: 150
// DISTANCE (converted to string): 150
// DATA TYPE: string
// USING THE String()
// DISTANCE: 150
// DISTANCE(converted to string): 150
// DATA TYPE: string
// USING THE parseFloat()
// WEIGHT: 72.5
// WEIGHT(converted to decimal number): 72.5
// DATA TYPE: number
