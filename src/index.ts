import fs from 'fs';

const content = fs
  .readFileSync('football.csv', {
    encoding: 'utf-8'
  })
  .split('\n')
  .map(row => row.split(','));

let count = 0;

enum MatchResults{
  HomeWin = 'H';
  AwayWin = 'A',
  Draw = 'D'
}

for (let match of content) {
  if (
    (match[1] === 'Man United' && match[5] === MatchResults.HomeWin) ||
    (match[2] === 'Man United' && match[5] === MatchResults.AwayWin)
  ) {
    count++;
  }
}
console.log('Manchester wins: ', count);
