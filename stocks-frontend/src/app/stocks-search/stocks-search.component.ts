import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { StocksDataService } from '../stocks-data.service';

@Component({
  selector: 'app-stocks-search',
  templateUrl: './stocks-search.component.html',
  styleUrls: ['./stocks-search.component.scss']
})
export class StocksSearchComponent implements OnInit {

  symbolForm = new FormGroup({
    symbol: new FormControl(''),
  });

  symbol: any;
  data: any;

  constructor(public stocksDataService: StocksDataService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('onSubmit')
    this.symbol = this.symbolForm.get('symbol').value;
    console.log('onSubmit')
    console.log('symbol', this.symbol)

    this.getStocksData(this.symbol);
  }

  getStocksData(symbol) {
    console.log('inside getStocksData')
    this.stocksDataService.getStocksData(symbol).subscribe(
      (stocksData) => {
        let dataRecords = stocksData['Time Series (5min)'];
        console.log('data', dataRecords)
        console.log('data length', Object.keys(dataRecords).length);
        this.data = this.parseData(dataRecords);
      },
      (err) => console.error(err))
  }

  parseData(dataRecords) {
    console.log('dataRecords', dataRecords);

    let data = [];

    Object.keys(dataRecords).forEach(element => {
      console.log('element',element)

      console.log(dataRecords[element]['5. volume']);
      console.log(dataRecords[element]['3. low']);
      console.log(dataRecords[element]['2. high']);
      console.log(dataRecords[element]['1. open']);
      console.log(dataRecords[element]['4. close']);

      let newData = {
        timeStamp: element,
        totalVolume: dataRecords[element]['5. volume'],
        minPrice: dataRecords[element]['3. low'],
        maxPrice: dataRecords[element]['2. high'],
        openingPrice: dataRecords[element]['1. open'],
        closingPrice: dataRecords[element]['4. close']
      }

      data.push(newData)
    });

    console.log('returning data',data)

    return data;
  }

}
