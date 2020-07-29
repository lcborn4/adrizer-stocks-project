import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stocks-table',
  templateUrl: './stocks-table.component.html',
  styleUrls: ['./stocks-table.component.scss']
})
export class StocksTableComponent implements OnInit {

  displayedColumns: string[] = ['timeStamp', 'totalVolume', 'minPrice', 'maxPrice','openingPrice', 'closingPrice'];

  @Input()
  data: any;

  // dataSource : any;

  constructor() { }

  ngOnInit(): void {

    // this.dataSource = this.data;

  }

}
