// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
function mulDiv(num){
    if(num % 2 === 1){
        const mul = num*2;
        return mul;
    }
    else
    {
        const div = num/2;
        return div;
    }
}

console.log(mulDiv(10));
console.log(mulDiv(7));