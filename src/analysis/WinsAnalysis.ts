import { Analyzer } from "../Summary";
import { MatchData } from "../MatchData";
import { MatchResults } from "../utils/enum";
export class WinsAnalysis implements Analyzer {
  constructor(public teamName: string) {}
  run(matches: MatchData[]): string {
    let count = 0;

    for (let data of matches) {
      if (
        (data[1] === this.teamName && data[5] === MatchResults.HomeWin) ||
        (data[2] === this.teamName && data[5] === MatchResults.AwayWin)
      ) {
        count++;
      }
    }
    return `Team ${this.teamName} won ${count} times`;
  }
}
