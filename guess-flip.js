import { coinFlip, coinFlips, countFlips, flipACoin} from "./modules/coin.mjs";
import minimist from "minimist";
const myArg = (minimist)(process.argv.slice(2))

var calls = myArg.calls;
if (calls==undefined) {
    console.log("Error: no input.")
} else if (calls!="heads" && calls!="tails") {
        console.log("Usage: node guess-flip --call=[heads|tails]")
    } else {
    console.log(flipACoin(calls));
}