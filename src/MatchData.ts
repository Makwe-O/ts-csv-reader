import { MatchResults } from "./utils/enum";
// TypeScript type exclusive to specific format of csv rendered reperesented as a tuple
export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResults,
  string
];
