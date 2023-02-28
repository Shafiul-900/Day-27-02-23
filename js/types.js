let first;
// console.log(first);
/*
 we are get 8 ways undefined
1. variable that is not initialized will give undefined 
2. function with no return
3. prameter that is not passed will be undefined
4. if return has nothing on the rignt side will return undefined
5.property that does't exists on  an object will give you undefined
6.accessing array elements outside of the index range
7. 
*/ 
const age = [45, 55, 66, 56];
console.log(age[4], age[2]);

const student = {name: 'shafiul', id: 45 }
// console.log(student.age, student.name);

function noNegative(a, b){
    if(a < 0 || b < 0){
        return
    }
    return a + b;
}
const total = noNegative(4, -5);
// console.log(total);

function second(first, second){
    const total = first + second;
}
const paramitar = second();
// console.log(paramitar);

function numbers(a, b, c, d, f){
    const total = a + b + c + d + f;
    // console.log(a, b, c, d, f) 
}

numbers(33, 55);