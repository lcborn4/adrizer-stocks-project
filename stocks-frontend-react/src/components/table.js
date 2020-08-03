import React, { Component } from 'react';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

class TableComponent extends Component {

    symbol;

    displayedColumns = ['timeStamp', 'totalVolume', 'minPrice', 'maxPrice', 'openingPrice', 'closingPrice'];

    constructor(props) {
        super(props);

        console.log('table.js - props.dataFromParent', props.dataFromParent)

        this.state = {
            columnDefs: [{
                headerName: "Time Stamp", field: "timeStamp"
            }, {
                headerName: "Total Volume", field: "totalVolume"
            }, {
                headerName: "Min Price", field: "minPrice"
            }
                , {
                headerName: "Max Price", field: "maxPrice"
            }
                , {
                headerName: "Opening Price", field: "openingPrice"
            }
                , {
                headerName: "Closing Price", field: "closingPrice"
            }
            ],
            rowData: this.props.dataFromParent
        }
    }

    render() {
        return (
            <div>
                <div style={{ height: '1000px', width: '1000px' }} className="ag-theme-alpine">
                    <AgGridReact
                        columnDefs={this.state.columnDefs}
                        rowData={this.props.dataFromParent}>
                    </AgGridReact>
                </div>
            </div>
        )
    }

}

export default TableComponent;