/**
 * 
 * */ 

const x = undefined;
if(x){
    console.log('Value of x truthly');
}
else{
    console.log('Value of x is falsy');
}

const y = ' ';
if(!!y){
    console.log('value is falsy');
}
else{
    console.log('value is truly');
}