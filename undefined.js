/** 
 *  ways to get undefine
 * 1. variable that is not initialized will gave undefined
 * 2. Function with no return
 * 3. Parameter that is not passed wil be undefined
 * 
 * 
*/

let first;
console.log(first);


function add(a,b){
    const sum = a+b;
}
const total = add(2,2);
console.log(total);


function third(a,b,c,d){
    const sum = a+b+c+d;
    console.log(a,b,c,d);
}
third(2,4);

const person = {
    name: 'Mufassir',
    age: 21,
    job: null
    
}
console.log(person);
console.log(person.name, person.salary);

const six = [11,22,33,44,55,66];
console.log(six[1], six[6]);

console.log(typeof undefined);
console.log(typeof null);