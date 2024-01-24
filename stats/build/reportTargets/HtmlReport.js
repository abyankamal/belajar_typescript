"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlReport = void 0;
const fs_1 = __importDefault(require("fs"));
class HtmlReport {
    print(report) {
        const html = `
            <div>
                <h1>Analyzer Report</h1>
                <h3>${report}</h3>
            </div>
        `;
        fs_1.default.writeFileSync('summary.html', html);
    }
}
exports.HtmlReport = HtmlReport;
