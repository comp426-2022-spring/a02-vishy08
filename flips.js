import { coinFlip, coinFlips, countFlips, flipACoin} from "./modules/coin.mjs";
import minimist from "minimist";
const myArg = (minimist)(process.argv.slice(2))

var number = myArg.number;
if (!Number.isInteger(number)) {
    number = 1;
}
const flips = coinFlips(number);
console.log(flips);
console.log(countFlips(flips));