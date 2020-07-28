import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {AlphavantageDataSource} from '../datasources';

export interface Alphavantage {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getDetails( symbol: string, interval: string, apiKey: string): Promise<any>;
}

export class AlphavantageProvider implements Provider<Alphavantage> {
  constructor(
    // alphavantage must match the name property in the datasource json file
    @inject('datasources.alphavantage')
    protected dataSource: AlphavantageDataSource = new AlphavantageDataSource(),
  ) {}

  value(): Promise<Alphavantage> {
    return getService(this.dataSource);
  }
}
