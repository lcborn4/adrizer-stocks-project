import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StocksDataService {
  API_URL: string;
  constructor(private http: HttpClient) {

    this.API_URL = 'http://localhost:3000'

  }

  getStocksData(symbol: string) {
    console.log('StocksDataService - this.API_URL', this.API_URL);

    return this.http.get(`${this.API_URL}/intraday/${symbol}`);
  }
}
