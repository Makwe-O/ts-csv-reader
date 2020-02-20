import { CsvFileReader } from './csvReader';
import { MatchResults } from './utils/enum';

type MatchData = [number];

export class Second extends CsvFileReader<MatchData> {
  filename: string;
  constructor(filename: string) {
    super(filename);
    this.filename = filename;
  }
  parseCsvData(row: string[]): MatchData {
    return [1];
  }
}
