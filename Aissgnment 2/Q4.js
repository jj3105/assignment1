const readline=require('readline');
const rl=readline.createInterface({
    input: process.stdin,
    output:process.stdout
});
rl.question('enter the numbers separated by commas: ',(input)=>{
    const numbers=input.split(',').map(Number);
    const answer=avgSqOdd(numbers);
    console.log(answer);
    rl.close();});

function avgSqOdd(n){
    const isOdd=n.filter(n=>n%2!==0);
    const sqOdd=isOdd.map(n=>n*n);
    const sumSq=sqOdd.reduce((sum,val)=>sum+val,0);
    const AvgSq=sqOdd.length>0?sumSq/sqOdd.length:0;
    return AvgSq;
}