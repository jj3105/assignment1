function createCounter(){
    let count=0;
    return function(){
        count++;
        return count;
    };
}
const ctr1=createCounter();
const ctr2=createCounter();

console.log(ctr1());
console.log(ctr2());
