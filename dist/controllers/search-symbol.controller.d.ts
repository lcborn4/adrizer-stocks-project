import { Alphavantage } from '../services/alphavantage.service';
export declare class SearchSymbolController {
    alphavantage: Alphavantage;
    constructor(alphavantage: Alphavantage);
    hello(): string;
    getDetails(symbol: string): Promise<any>;
    callAlphavantage(symbol: string): Promise<any>;
}
