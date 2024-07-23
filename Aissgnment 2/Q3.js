const readline=require('readline');
const rl=readline.createInterface({
    input: process.stdin,
    output:process.stdout
});
rl.question('enter the numbers separated by commas: ',(input)=>{
    const numbers=input.split(',').map(Number);
    const answer=primes(numbers);
    console.log(answer);
    rl.close();
});
function isPrime(n){
    if (n<=1) return false;
    if (n<=3) return true;
    if (n%2==0 ||n%3==0) return false;

    for(let i=5;i*i<=n;i+=6){
        if(n%i==0||n%(i+2)===0) return false;
    }
    return true;
}
function primes(n){
    return n.filter(isPrime);
}
