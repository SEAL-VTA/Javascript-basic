console.log('Hello SEAL');

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr = [
    {name: 'SEAL', age: 20},
    {name: 'Kir', age: 25},
    {name: 'Khoa', age: 24},
    {name: 'Zin', age: 19},
    {name: 'Tit', age: 22},
];
//filter, find

let filter = arr.filter((item, index)=> {
    // console.log('Check filter: ', item, 'index: ', index);
    return item && item.age >25;
});

console.log(filter);
