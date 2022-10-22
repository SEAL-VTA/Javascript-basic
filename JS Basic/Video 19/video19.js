console.log('Hello SEAL');

let sum = (a, b) => {
    return a + b;
}

console.log('Check sum: ', sum(6,9));

let obj = {
    name: 'SEAL',
    address: 'Ha Noi',
    getName: function(){
        return this.name;
    }
}

console.log('Get name: ', obj.getName());