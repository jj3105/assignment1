function sums(n){
    return n.reduce((accumulator,currentVal)=>accumulator+currentVal,0);
}

const readline=require('readline');
const rl=readline.createInterface({
    input: process.stdin,
    output:process.stdout
});
rl.question('enter the numbers separated by commas: ',(input)=>{
    const numbers=input.split(',').map(Number);
    const answer=sums(numbers);
    console.log(answer);
    rl.close();
});