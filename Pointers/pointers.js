let num1 = 5 
let num2 = num1

console.log(num1,num2)
num1 = 10
console.log(num1,num2)

//this is what happens when dont use pointers 

let obj1 = {value: 5}
let obj2 = obj1
// obj1.value = 10
// console.log(obj1.value,obj2.value) 
//this is what happens when we use pointers