import { coinFlip, coinFlips, countFlips, flipACoin} from "./modules/coin.mjs";
import minimist from "minimist";
const myArg = (minimist)(process.argv.slice(2))

var calls = myArg.calls;
if (calls==undefined || (calls!="heads" && calls!="tails")) {
    console.log("Error: no input.")
    console.log("Usage: node guess-flip --call=[heads|tails]")
} else {
    console.log(flipACoin(calls));
}