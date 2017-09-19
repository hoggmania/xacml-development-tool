import React from 'react';
import Sample_policy_1 from './Sample_policy_1';
import Sample_policy_2 from './Sample_policy_2';
import ReactMustache from 'react-mustache';


class policy_window extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            value: "select",
        }
        this.change=this.change.bind(this);
    }
    change(event){
        this.setState({value: event.target.value});
    }

    render() {

        const foo = ["Select policy template","Sample_policy_1","Sample_policy_2"];


        return (

                         <div className="tabbable tabs-bottom">
                            <div className="tab-content">
                                <div className="tab-pane active" id="xml">
                                    <div className="jumbotron">
                                        <center>
                                            <div>
                                                <select id="policy_list" onChange={this.change} value={this.state.value}>
                                                    {foo.map( item => <option value={item}>{item}</option> )}

                                                </select>
                                                {(this.state.value == "Sample_policy_1") && (<div><Sample_policy_1></Sample_policy_1></div>)}
                                                {(this.state.value == "Sample_policy_2") && (<div><Sample_policy_2></Sample_policy_2></div>)}
                                            </div>
                                        </center>
                                    </div>
                                </div>
                                <br/>
                                <div className="tab-pane" id="ui">
                                    <div className="jumbotron">
                                       <div id="policy_template_window">mmmmm
                                       </div>
                                    </div>
                                </div>

                                <div className="tab-pane" id="view">
                                    <div className="jumbotron">
                                        <ReactMustache template="Welcome {{title}}" data={{title: 'Mr. Gregory'}} />
                                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                                    </div>
                                </div>


                            </div>

                            <ul className="nav nav-tabs">
                                <li className="active"><a href="#xml" data-toggle="tab">XML View</a></li>
                                <li><a href="#ui" data-toggle="tab">UI View</a></li>
                                <li><a href="#view" data-toggle="tab">View</a></li>

                            </ul>

                        </div>


        );
    }
}

export default policy_window;

