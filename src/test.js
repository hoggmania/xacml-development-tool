import React from 'react';


class test extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 'random text'
        }
    }
    handleChange (e) {
        console.log('handle change called')
    }
    handleClick () {
        this.setState({value: 'another random text'})
        var event = new Event('input', { bubbles: true });
        this.myinput.dispatchEvent(event);
    }
    render () {
        return (
            <div>
                <input readOnly value={this.state.value} onChange={(e) => {this.handleChange(e)}} ref={(input)=> this.myinput = input}/>
                <button onClick={this.handleClick.bind(this)}>Change Input</button>
            </div>
        )
    }
}

export default test;
