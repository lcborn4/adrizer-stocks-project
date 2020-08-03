"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlphavantageDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
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
                "symbolSearch": ["symbol", "apiKey"]
            }
        }
    ]
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let AlphavantageDataSource = class AlphavantageDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
AlphavantageDataSource.dataSourceName = 'alphavantage';
AlphavantageDataSource.defaultConfig = config;
AlphavantageDataSource = tslib_1.__decorate([
    core_1.lifeCycleObserver('datasource'),
    tslib_1.__param(0, core_1.inject('datasources.config.alphavantage', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], AlphavantageDataSource);
exports.AlphavantageDataSource = AlphavantageDataSource;
//# sourceMappingURL=alphavantage.datasource.js.map