import { dateStringToDate } from './utils/parser';
import { MatchResults } from './utils/enum';

type MatchData = [Date, string, string, number, number, MatchResults, string];
interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  result: MatchData[] = [];
  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.result = this.reader.data.map(
      (row: string[]): MatchData => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResults,
          row[6]
        ];
      }
    );
  }
}
