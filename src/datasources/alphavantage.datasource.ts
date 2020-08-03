import { inject, lifeCycleObserver, LifeCycleObserver } from '@loopback/core';
import { juggler } from '@loopback/repository';

const config = {
  name: 'alphavantage',
  connector: 'rest',
  baseURL: 'https://www.alphavantage.co/',
  crud: false,
  options: { headers: { "content-type": "application/json" } },
  "operations": [
    {
      "template": {
        "method": "GET",
        "url": "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol={symbol}&interval={interval}&apikey={apiKey}"
      },
      "functions": {
        "getDetails": ["symbol", "interval", "apiKey"]
      }
    },
    {
      "template": {
        "method": "GET",
        "url": "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords={symbol}&apikey={apiKey}"
      },
      "functions": {
        "symbolSearch": ["symbol","apiKey"]
      }
    }
  ]
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class AlphavantageDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'alphavantage';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.alphavantage', { optional: true })
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
