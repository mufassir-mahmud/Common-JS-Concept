function add(a,b,c){
    const args = [...arguments];
    console.log(args);
    const sum = a+b+c;
    return sum;
}

const total = add(5,5,10);
console.log(total);