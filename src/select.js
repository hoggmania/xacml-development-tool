
import React, { Component } from 'react';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            optionsdata : [
                {key:'101',value:'Lion'},
                {key:'102',value:'Giraffe'},
                {key:'103',value:'Zebra'},
                {key:'104',value:'Hippo'},
                {key:'105',value:'Penguin'}
            ]
        }
    }
    handleChange (e) {
        console.log(e.target.value);
        var value = this.state.optionsdata.filter(function(item) {
            return item.key == e.target.value
        })
        console.log(value[0].value);
    }
    render() {
        return (
            <select onChange={this.handleChange}>
                {this.state.optionsdata.map(function(data, key){  return (
                    <option key={key} value={data.key}>{data.value}</option> )
                })}
            </select>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
