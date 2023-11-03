let num1 = 5;
let num2 = 7;
function multy(a,b){
    const result = a*b;
    return result
}
const add = multy(num1,num2);
console.log(add);


let student1 = {id: 21, name:'Mufassir', age: 21}
let student2 = {id: 26, name:'Ohin', age: 21};
function classMates(class1, class2){
    class1.id = 484121;
    class2.id = 484126
}
    console.log(student1, student2);
 classMates(student1, student2);
 console.log(student1, student2);