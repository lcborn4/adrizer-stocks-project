import React, { Component } from 'react';
import axios from 'axios'

class StocksSearchComponent extends Component {

    constructor() {
        super();
        this.state = {
            symbol: ''
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
        console.log('url',url)
    const response =
      await axios.get(url)
    console.log(response.data)
        
      }
    
    render() {
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
        );
    }
}

export default StocksSearchComponent;