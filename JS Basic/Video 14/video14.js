console.log('Hello SEAL');

let day = '';
let a = 2;

switch (a) {
    case 0:
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }

  console.log('Check day: ', day, new Date().getDay());