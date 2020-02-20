import { GenericCsvReader } from './GenericCsvParser';
import { MatchResults } from './utils/enum';

const reader = new GenericCsvReader('football.csv');

reader.read();

console.log(reader.data[0][0]);

let count = 0;

for (let data of reader.data) {
  if (
    (data[1] === 'Man United' && data[5] === MatchResults.HomeWin) ||
    (data[2] === 'Man United' && data[5] === MatchResults.AwayWin)
  ) {
    count++;
  }
}
console.log('Manchester wins: ', count);
