function kitchen(){
    let roast = 0;
    return function(){
        roast++;
        return roast;
    }
}

const firstRost = kitchen();
// const secondRost = 
console.log(firstRost());
console.log(firstRost());
console.log(firstRost());
console.log(firstRost());