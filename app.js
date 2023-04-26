//Create a function that filters out negative numbers

function negNum(x) {     //created a function that is named "negNum" and gave it a parameter

const nums = x.filter(num => num >= 0);  //creating a const named "nums" and filtering the parameter.
//in the filter parenthesis, it would filter all the negative numbers from the input array 'numbers'
//'num => num >= 0' would return a boolean value and check if the argument is greater than or equal to 0.
return nums; //returns the positive numbers

}
const x = [-1 , -2, 3, 4, -12]; //array
const nums = negNum(x); //filters the positive numbers and takes out the negative numbers.
console.log(nums);
