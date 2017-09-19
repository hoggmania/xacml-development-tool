import React from 'react';
import Header from './Header';


class app extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            policy_set_name: this.props.policy_set_name,
            policy_name: this.props.policy_name,
            description: this.props.description,
            rule_combine_algorithm: this.props.rule_combine_algorithm,
            };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A new policy was submitted: ' + this.state.value);
        event.preventDefault();
    }


    render() {
        return (
            <div>
            <Header title="XACML DEVELOPMENT TOOL"/>
            <br/>
                <br/>

                <div class="container">
                    <div class="jumbotron">
                        <div class="form-group">
            <form onSubmit={this.handleSubmit}>
                <center>
                <table>
                    <tr>
                        Enter Policy Set Name :
                       <td> <input type="text" value={this.state.policy_set_name} onChange={this.handleChange} />
                    </td></tr>

                    <tr>
                        Policy Name :
                        <td> <input type="text" value={this.state.policy_name} onChange={this.handleChange} />
                        </td></tr>


                    <tr>
                        Description :
                        <td> <input type="text" value={this.state.description} onChange={this.handleChange} />
                        </td></tr>

                    <tr>
                        Policy Combining Algorithm:
                        <td> <input type="text" value={this.state.rule_combine_algorithm} onChange={this.handleChange} />
                        </td></tr>

                    <div>
                    <fieldset>
                        <legend>Define Matches:</legend>
                        Category ID: <input type="text"/>
                        Attribute ID: <input type="text"/>
                        Attribute data type: <input type="text" />
                    </fieldset>

                        <br/>

                    <fieldset>
                        <legend>Define Rules:</legend>
                        Rule Name: <input type="text"/>
                        Description: <input type="text"/>
                        Rule Combining Algorithm: <input type="text" />
                        <fieldset>
                            <legend>Define Matches:</legend>
                            Category ID: <input type="text"/>
                            Attribute ID: <input type="text"/>
                            Attribute data type: <input type="text" />
                        </fieldset>
                    </fieldset>

                        <fieldset>
                            <legend>Define Obligations:</legend>
                            Obligation type: <input type="text"/>
                            ID: <input type="text"/>
                            Effect: <input type="text" />
                            Attribute value: <input type="text" />
                        </fieldset>

                    </div>
                    <br/>
                <br/>
                <input type="submit" value="Add New Policy" />
                </table>
                </center>
            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default app;
