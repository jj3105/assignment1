let emprecords=[{ename:'parag',id:100,bsal:10000},{ename:'prachi',id:101,bsal:13000},{ename:'manas',id:200,bsal:9000},{ename:'daesha',id:115,bsal:8000},{ename:'anagha',id:104,bsal:2000}]
//q1
var totalsalary9000=emprecords.filter(e=>e.bsal>9000).reduce((total,e)=>total+e.bsal,0);
console.log(totalsalary9000);
//q2
var enames=emprecords.filter(e=>e.bsal>8000).map(emp=>emp.ename.toUpperCase());
console.log(enames);
//q3
var salarybonus=emprecords.filter(e=>e.bsal>=9000).map(e=>e.bsal*1.15).reduce((total,salary)=>total+salary,0);
console.log(salarybonus);




