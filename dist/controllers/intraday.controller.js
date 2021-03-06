"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntradayController = void 0;
const tslib_1 = require("tslib");
/* eslint-disable @typescript-eslint/no-explicit-any */
const core_1 = require("@loopback/core");
const rest_1 = require("@loopback/rest");
const my_key_json_1 = tslib_1.__importDefault(require("../my_key.json"));
const APIKEY = process.env.APIKEY ? process.env.APIKEY : my_key_json_1.default.key;
// const AlphavantageServiceInterface = 'Alphavantage'
let IntradayController = class IntradayController {
    constructor(alphavantage) {
        this.alphavantage = alphavantage;
    }
    //example
    hello() {
        return 'Hello World';
    }
    async getDetails(symbol) {
        console.log(`Calling Alphavantage Service for stock intraday data: ${symbol}`);
        return this.callAlphavantage(symbol);
    }
    async callAlphavantage(symbol) {
        const apiKey = APIKEY;
        const interval = '5min';
        return this.alphavantage.getDetails(symbol, interval, apiKey);
    }
};
tslib_1.__decorate([
    rest_1.get('/hello'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", String)
], IntradayController.prototype, "hello", null);
tslib_1.__decorate([
    rest_1.get('/intraday/{symbol}'),
    tslib_1.__param(0, rest_1.param.path.string('symbol')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], IntradayController.prototype, "getDetails", null);
IntradayController = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('services.Alphavantage')),
    tslib_1.__metadata("design:paramtypes", [Object])
], IntradayController);
exports.IntradayController = IntradayController;
//# sourceMappingURL=intraday.controller.js.map