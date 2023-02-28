let x;
console.log(x)
if(x){
    console.log('value of is true')
}
else{
    console.log('value of is false')
}

// check falsy 
const y = '';
if(!y){
    console.log("It's false");
}

// check frue
const a = ' ';
if(!!a){
    console.log("It's true");
}
/*
true{
    1. true
    2. any numbers (+val , -val) will be true other then 0
    3. any string without empty string 
    4. '0' string true
}

flase{
    1. false
    2. 0
    3. empty string
    4. 
}
*/
