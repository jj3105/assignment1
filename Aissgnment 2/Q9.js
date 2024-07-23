const readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,output:process.stdout
});
rl.question('enter the number and the operator in the format: n1,n2,opertor -  ',(input)=>{
    const [n1,n2,op]=input.split(',');
    const num1=parseFloat(n1);
    const num2=parseFloat(n2);
    const answer=calculator(num1,num2,op);
    console.log(answer);
    rl.close();    
});
function calculator(num1,num2,op){
    return new Promise((resolve,reject)=>{
        if(typeof num1!=='number'||typeof num2!=='number'){
            return reject('invalid input')
        }
        if(typeof op!=='string'){
            return reject('invalid operation')
        }
        switch(op){
            case '+':
                resolve(num1+num2);
                break;
            case '-':
                resolve(num1-num2);
                break;
            case '*':
                resolve(num1*num2);
                break;
            case '/':
                if (num2===0){
                    reject('Error');

                }
                else{
                    resolve(num1/num2);
                }
                break;
            default:
                reject('invalid operation. use only +, -, * or /');
        }
    });
}