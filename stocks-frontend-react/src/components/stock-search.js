import React, { Component } from 'react';

import axios from 'axios'

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import '../stock-search.css'

import Loader from 'react-loader-spinner'
import Table from './table'

class StocksSearchComponent extends Component {

    constructor() {
        super();
        this.state = {
            symbol: '',
            data: [],
            loading: false,
            optionsList: []
        }
    }

    changeHandler = async event => {

        if (event.target.value !== '') {

            this.setState({
                symbol: event.target.value
            });

            const url = `http://localhost:3000/symbol/${event.target.value}`;
            const response =
                await axios.get(url)
            let bestMatches = response.data.bestMatches;
            this.parseSymbols(bestMatches)
        }

    }

    onClick = async event => {
        console.log('event.target.value', event.target.innerText)

        this.setState({
            symbol: event.target.innerText,
            data: [],
            loading: true
        }, async () => {
            console.log('this.state.symbol', this.state.symbol)
            const url = `http://localhost:3000/intraday/${this.state.symbol}`;
            const response =
                await axios.get(url)
            let dataRecords = response.data['Time Series (5min)'];
            let newData = this.parseData(dataRecords);
            this.setState({ data: newData, loading: false, optionsList: [] });
        })

    }

    formSubmitHandler = async () => {
        console.log(this.state.symbol);
        this.setState({
            data: [],
            loading: true
        });
        const url = `http://localhost:3000/intraday/${this.state.symbol}`;
        const response =
            await axios.get(url)
        let dataRecords = response.data['Time Series (5min)'];
        let newData = this.parseData(dataRecords);
        this.setState({ data: newData, loading: false, optionsList: [] });
    }

    parseData(dataRecords) {
        console.log('dataRecords', dataRecords);

        let data = [];

        Object.keys(dataRecords).forEach(element => {

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

    parseSymbols(bestMatches) {
        console.log('bestMatches', bestMatches)

        //array of suggested stock symbols
        let suggestions = [];
        Object.keys(bestMatches).forEach((element, index) => {
            if (bestMatches[element]['4. region'] === 'United States') {
                suggestions.push({ key: index, symbol: bestMatches[element]['1. symbol'] })
            }

        })

        this.setState({
            optionsList: suggestions
        });

    }

    render() {
        if (this.state.data.length > 0) {

            let optionList
            if (this.state.optionsList.length > 0) {
                optionList = (
                    <ul className="options">
                        {this.state.optionsList.map((option, i) => {
                            return <li key={option.symbol} onClick={this.onClick}>{option.symbol} </li>
                        })}
                    </ul>
                )
            }
            else if (this.state.symbol !== '') {
                optionList = (<p>No Options</p>)
            }


            return (

                <div>
                    <h1>Stocks Project</h1>
                    <div>
                        <form>
                            <input type="text"
                                className="search-box"
                                name="symbol"
                                value={this.state.symbol}
                                onChange={this.changeHandler}
                                placeholder="Type in Stock Symbol"
                            />
                            {optionList}
                        </form>
                        <button onClick={this.formSubmitHandler}> Submit </button>
                    </div>
                    <Table symbolFromParent={this.state.symbol} dataFromParent={this.state.data} />
                </div>
            );
        }
        else if (this.state.loading) {
            return (

                <div>
                    <h1>Stocks Project</h1>
                    <div>
                        <form>
                            <input type="text"
                                className="search-box"
                                name="symbol"
                                value={this.state.symbol}
                                onChange={this.changeHandler}
                                placeholder="Type in Stock Symbol"
                            />
                        </form>
                        <button onClick={this.formSubmitHandler}> Submit </button>
                    </div>

                    <Loader
                        type="TailSpin"
                        color="#00BFFF"
                        height={100}
                        width={100}
                    />
                </div>
            );

        }
        else {

            let optionList
            if (this.state.optionsList.length > 0) {
                optionList = (
                    <ul className="options">
                        {this.state.optionsList.map((option, i) => {
                            return <li key={option.symbol} onClick={this.onClick}>{option.symbol} </li>
                        })}
                    </ul>
                )
            }
            else if (this.state.symbol !== '') {
                optionList = (<p>No Options</p>)
            }

            return (
                <div>
                    <h1>Stocks Project</h1>
                    <div className="search">
                        <form>
                            <input type="text"
                                className="search-box"
                                name="symbol"
                                value={this.state.symbol}
                                onChange={this.changeHandler}
                                placeholder="Type in Stock Symbol"
                            />
                            {optionList}
                        </form>
                        <button onClick={this.formSubmitHandler}> Submit </button>
                    </div>
                </div>
            )
        }
    }
}

export default StocksSearchComponent;