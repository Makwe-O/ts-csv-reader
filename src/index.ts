import { GenericCsvReader } from "./GenericCsvParser";
import { ConsoleReport } from "./reports/ConsoleReport";
import { WinsAnalysis } from "./analysis/WinsAnalysis";
import { Summary } from "./Summary";

const reader = new GenericCsvReader("football.csv");

reader.read();

const summary = new Summary(new WinsAnalysis("Watford"), new ConsoleReport());

summary.buildAndPrintReport(reader.data);
