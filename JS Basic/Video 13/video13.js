console.log("Hello SEAL");

let arrTop4 = ['Liver', 'Chelsea', 'MU', 'ManCity'];

let i = 0;
while(i<arrTop4.length){
    i++;

    if(arrTop4[i]=== 'Chelsea'){
        console.log("Found it: ", arrTop4[i]);
        continue;
    }
    console.log('Check i', i);
}