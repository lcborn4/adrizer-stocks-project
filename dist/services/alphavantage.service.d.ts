import { Provider } from '@loopback/core';
import { AlphavantageDataSource } from '../datasources';
export interface Alphavantage {
    getDetails(symbol: string, interval: string, apiKey: string): Promise<any>;
}
export declare class AlphavantageProvider implements Provider<Alphavantage> {
    protected dataSource: AlphavantageDataSource;
    constructor(dataSource?: AlphavantageDataSource);
    value(): Promise<Alphavantage>;
}
