function greeting(greetingHandler, name){
    greetingHandler(name);
}
// const name = 'Halim Mama';
// greeting(name)

// const numbers = [11,22,33,44,55]
// greeting(numbers)

// const computer = {
//     id: 1,
//     name: 'walton',
//     price: 43000
// }
// greeting(computer)

function greetingHandler(name){
    console.log('Good Morning', name);
}
greeting(greetingHandler, 'Tom Hanks')
greeting(greetingHandler, 'Mufassir Mahmud')
greeting(greetingHandler, 'Mahmud')