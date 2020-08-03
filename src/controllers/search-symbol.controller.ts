/* eslint-disable @typescript-eslint/no-explicit-any */
import {inject} from '@loopback/core';
import {get, param} from '@loopback/rest';
import {Alphavantage} from '../services/alphavantage.service';

import data from "../my_key.json";

const APIKEY = process.env.APIKEY ? process.env.APIKEY : data.key

// const AlphavantageServiceInterface = 'Alphavantage'
export class SearchSymbolController {
  constructor(@inject('services.Alphavantage') public alphavantage: Alphavantage) {
  }

  //example
  @get('/hello')
  hello():string{
    return 'Hello World';
  }

  @get('/symbol/{symbol}')
  async getDetails(@param.path.string('symbol') symbol: string): Promise<any> {
    console.log(`Calling Alphavantage Service for stock symbol search data: ${symbol}`);
    return this.callAlphavantage(symbol);
  }
  async callAlphavantage(symbol: string): Promise<any> {
    const apiKey = APIKEY;
    return this.alphavantage.symbolSearch(symbol,apiKey);
  }

}
