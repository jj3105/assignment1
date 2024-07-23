const readline=require('readline');
const rl=readline.createInterface({
    input: process.stdin,
    output:process.stdout
});
rl.question('enter the strings separated by commas: ',(input)=>{
    const strings=input.split(',');
    const answer=longest(strings);
    console.log(answer);
    rl.close();});
function longest(strings){
    if(strings.length==0) return '';
    const lengths=strings.map(string=>string.length);
    const maxLen=lengths.reduce((max,len)=>len>max?len:0);
    const LongestStrings=strings.filter(string=>string.length===maxLen);
    return LongestStrings[0];
}