/* Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values. */

function make_avg(nums,size){
    let sum = 0;
    for(let i of nums){
        sum+=i;
    }
    const avg = sum/size;
    return avg; 
}

const nums = [5,10,15,20,5];
console.log(make_avg(nums,5))