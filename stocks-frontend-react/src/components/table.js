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
                headerName: "timeStamp", field: "timeStamp"
            }, {
                headerName: "totalVolume", field: "totalVolume"
            }, {
                headerName: "minPrice", field: "minPrice"
            }
                , {
                headerName: "maxPrice", field: "maxPrice"
            }
                , {
                headerName: "openingPrice", field: "openingPrice"
            }
                , {
                headerName: "closingPrice", field: "closingPrice"
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