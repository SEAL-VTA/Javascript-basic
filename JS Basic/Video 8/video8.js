console.log("Hello World from HTML");

// key: value 
let obj = {
    name: 'SEAL',
    address: 'Ha Noi',
    email: '',
    gender: '',
    // a: function(){
    //     console.log("Hello World inside function");
    //     return '';
    // }
};


let b = 'name';

obj[b] = 'Hieu';

let c = '';

console.log("What is your name?", `My name is :`, obj['name']);
console.log("Where do you live?", `I live in :`, obj.address);
// console.log("Call function: ", obj.a());
