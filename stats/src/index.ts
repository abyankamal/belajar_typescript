import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";


// using inheritance
// const reader= new MatchReader('football.csv');
// reader.read();

// using composition
const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load()

let manUnitedWins = 0;
for (let match of matchReader.matches){
    if(match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins++
    }else if((match[2] === 'Man United' && match[5] === MatchResult.AwayWin)){
        manUnitedWins++
    }
}
console.log(`Man United won ${manUnitedWins} games`);