import { OutputTarget } from "../Summary";

export class ConsoleReport implements OutputTarget {
  constructor() {}
  print(report: String): void {
    console.log(report);
  }
}
