// Import the coinFlip function from your coin.mjs file
import { coinFlip, coinFlips, countFlips, flipACoin} from "./modules/coin.mjs";
// Call the coinFlip function and put the return into STDOUT
//var number = require('minimist')(process.number.slice(2));
const arr = coinFlips(5);
console.log(arr);
console.log(countFlips(arr));
console.log(flipACoin("heads"));