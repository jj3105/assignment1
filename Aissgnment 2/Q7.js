const readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,output:process.stdout
});

//to take the inputs
function data(callback){
    const students=[]
    function prompts(){
        rl.question('give the student name and score in the format:name,score or type "ok" to finish',(input)=>{
            if(input.toLowerCase()=='ok'){
                callback(students);
                return;
            }
            const [name,scores]=input.split(',').map(str=>str.trim());
            const score=parseFloat(scores);
            if (name && !isNaN(score)){
                students.push({name,score});
                prompts();
            } else{
                console.log('invalid input format');
                prompts();
            }
        });
    }
    prompts();
}
data((students)=>{
    const passedStd=passed(students);
    console.log(passedStd);
    rl.close();
});
//check for passed students
function passed(students){
    return students.filter(students=>students.score>=60);
}