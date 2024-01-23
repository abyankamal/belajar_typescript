import { MatchData } from "./MatchData";

export interface Analyzer {
    run(matches: MatchData[]) : string;
}

export interface OutputTarget {
    print(report: string): void;
}

export class Summary {
    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}
    run(matches: MatchData[]) : void {
        let report = this.analyzer.run(matches);
        this.outputTarget.print(report);
    }
}