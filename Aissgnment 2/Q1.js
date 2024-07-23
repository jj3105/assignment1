function cubes(n){
    return n.map(n=>n**3);
}

const readline=require('readline');
const rl=readline.createInterface({
    input: process.stdin,
    output:process.stdout
});
rl.question('enter the numbers separated by commas: ',(input)=>{
    const numbers=input.split(',').map(Number);
    const answer=cubes(numbers);
    console.log(answer);
    rl.close();
});
//const input=prompt("give the numbers separated by comma:");

//console.log(answer);
