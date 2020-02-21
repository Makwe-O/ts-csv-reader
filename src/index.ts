import { MatchReader } from './MatchReader';
import { MatchResults } from './utils/enum';
import { CsvFileReader } from './CsvReader';

const file = new CsvFileReader('football.csv');
const reader = new MatchReader(file);

reader.load();

let count = 0;

for (let data of reader.result) {
  if (
    (data[1] === 'Man United' && data[5] === MatchResults.HomeWin) ||
    (data[2] === 'Man United' && data[5] === MatchResults.AwayWin)
  ) {
    count++;
  }
}
console.log('Manchester wins: ', count);
