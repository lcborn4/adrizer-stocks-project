import React, { Component } from 'react';
import axios from 'axios'

import Table from './table'

class StocksSearchComponent extends Component {

    constructor() {
        super();
        this.state = {
            symbol: '',
            data: [],
        }
    }

    changeHandler = event => {
        this.setState({
            symbol: event.target.value
        });
    }

    formSubmitHandler = async () => {
        console.log(this.state.symbol);

        const url = `http://localhost:3000/intraday/${this.state.symbol}`;
        console.log('url', url)
        const response =
            await axios.get(url)
        console.log(response.data)
        let dataRecords = response.data['Time Series (5min)'];
        // console.log('data', dataRecords)
        // console.log('data length', Object.keys(dataRecords).length);
        // this.state.data = this.parseData(dataRecords);
        let newData = this.parseData(dataRecords);
        this.setState({ data: newData });

    }

    parseData(dataRecords) {
        console.log('dataRecords', dataRecords);

        let data = [];

        Object.keys(dataRecords).forEach(element => {
            // console.log('element', element)

            // console.log(dataRecords[element]['5. volume']);
            // console.log(dataRecords[element]['3. low']);
            // console.log(dataRecords[element]['2. high']);
            // console.log(dataRecords[element]['1. open']);
            // console.log(dataRecords[element]['4. close']);

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

        console.log('returning data', data)

        return data;
    }

    render() {

        if (this.state.data.length > 0) {

            return (

                <div>
                    <h1>Stocks Project</h1>
                    <div>
                        <form>
                            Symbol:<input type="symbol"
                                name="symbol"
                                value={this.state.symbol}
                                onChange={this.changeHandler}
                            />
                        </form>
                        <button onClick={this.formSubmitHandler}> Submit </button>
                    </div>
                    <Table symbolFromParent={this.state.symbol} dataFromParent={this.state.data} />
                </div>
            );
        }
        else {
            return (
                <div>
                    <h1>Stocks Project</h1>
                    <form>
                        Symbol:<input type="symbol"
                            name="symbol"
                            value={this.state.symbol}
                            onChange={this.changeHandler}
                        />
                    </form>
                    <button onClick={this.formSubmitHandler}> Submit </button>
                </div>
            )
        }
    }
}

export default StocksSearchComponent;