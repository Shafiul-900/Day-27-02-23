/*
    1.Always use  === wqual sine
    2.equal comparison dose't work for non-primitive 
 */


const first = 2;
const second = '2';
// === ans There are not equal
if(first === second){
    console.log('There are equal')
}
else{
    console.log("There are not equal")
}


// == ans there are equal
if(first == second){
    console.log('There are equal')
}
else{
    console.log("There are not equal")
}