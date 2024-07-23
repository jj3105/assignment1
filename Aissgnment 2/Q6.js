const readline=require('readline');
const rl=readline.createInterface({
    input: process.stdin,
    output:process.stdout
});
rl.question('enter a sentence: ',(input)=>{
    
    const answer=capitalise(input);
    console.log(answer);
    rl.close();});

function capitalise(sentence){
    return sentence.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
}