function twoMultiple(x:number) :  number
{
    return x * 2;
}


var ar:number[]  =  [1,2,3,4,5];

// 1. Callback using named functions
var ar2:number[] =  ar.map(Math.sqrt);
var ar3:number[] =  ar.map(twoMultiple);


// 2. Callback using Anonymous functions
var ar4:number[] =  ar.map(function(x:number)
{
    return x * 5;
});

// 3. Callback using Arrow functions
var ar5:number[] =  ar.map( (x) =>
{
    return x * 10;
});

var ar6:number[] =  ar.map( x => x * 11 );


console.log(ar);
console.log(ar2);
console.log(ar3);
console.log(ar4);
console.log(ar5);
console.log(ar6);
