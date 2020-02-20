import { CsvFileReader } from './csvReader';
import { MatchResults } from './utils/enum';
import { dateStringToDate } from './utils/parser';

// TypeScript type exclusive to specific format of csv rendered reperesented as a tuple
type MatchData = [Date, string, string, number, number, MatchResults, string];

//Specify type of MatchData as Generic type argument on parent class
export class GenericCsvReader extends CsvFileReader<MatchData> {
  filename: string;
  constructor(filename: string) {
    super(filename);
    this.filename = filename;
  }

  parseCsvData(row: string[]): MatchData {
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
}
