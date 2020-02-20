import fs from 'fs';

//Parent class to read and parse csv files
export abstract class CsvFileReader<T> {
  //Data attribute to hold Generic Type
  data: T[] = [];

  //Filename with String type
  filename: string;
  constructor(filename: string) {
    this.filename = filename;
  }

  //Typical method to read csv files
  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8'
      })
      .split('\n')
      .map((row: string) => row.split(','))
      .map(this.parseCsvData);
  }

  //Abstract class to parseCsvData
  abstract parseCsvData(row: string[]): T;
}
