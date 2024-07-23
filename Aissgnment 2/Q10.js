const readline=require('readline');
const rl=readline.createInterface({
    input: process.stdin,
    output:process.stdout
});
rl.question('enter the numbers separated by commas: ',(input)=>{
    const numbers=input.split(',').map(Number);
    const scoreArr=numbers.map(score=>({score}));
    const answer=total(scoreArr);
    console.log(answer);
    rl.close();});

function total(arr){
    let tot=0;
    arr.forEach(obj => {
        if(obj.hasOwnProperty('score')&&typeof obj.score==='number'){
            tot+=obj.score;
        }
        
    });
    return tot;
}

