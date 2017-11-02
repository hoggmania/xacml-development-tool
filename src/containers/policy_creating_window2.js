import React from 'react';
import SortableTree, {addNodeUnderParent, removeNodeAtPath, changeNodeAtPath} from 'react-sortable-tree';
import Sample_policy_1 from '../Sample_policy_1';
import Sample_policy_2 from '../Sample_policy_2';
import Index from '../drag_drop/index.js';


class policy_creating_window extends React.Component {
    constructor(props) {

        super(props);
        this.state = {

            treeData: [{title: 'User', children: [{title: 'Name'}, {title: 'Tenant'}]},
                {title: 'Environment', children: [{title: 'IP'}, {title: 'Time'}]}],
            value: "select",
            tabIndex: 0,

            treeData2: [{title: 'Drag an attribute'}],
            shouldCopyOnOutsideDrop: true,

            treeData3: [{title: 'Drag an attribute'}],
            shouldCopyOnOutsideDrop: true,
        }
        this.change = this.change.bind(this);
    }

    change(event) {
        this.setState({value: event.target.value});
    }

    render() {
        const externalNodeType = 'yourNodeType';
        const {shouldCopyOnOutsideDrop} = this.state;

        const foo = ["Select policy template", "Sample_policy_1", "Sample_policy_2"];


        return (

            <div className="tabbable tabs-bottom">
                <div className="tab-content">
                    <button type="button" className="btn btn-warning btn-arrow-left pull-right">Try It!</button>

                    <div className="tab-pane active" id="ui">

                        <div className="jumbotron">
                            <div id="policy_ui">
                               <Index/>

                            </div>
                        </div>
                    </div>

                    <div className="tab-pane" id="xml">
                        <div className="jumbotron">

                            <div>
                                <select id="policy_list" onChange={this.change} value={this.state.value}>
                                    {foo.map(item => <option value={item}>{item}</option>)}

                                </select>
                                {(this.state.value == "Sample_policy_1") && (
                                    <div><Sample_policy_1></Sample_policy_1></div>)}
                                {(this.state.value == "Sample_policy_2") && (
                                    <div><Sample_policy_2></Sample_policy_2></div>)}
                            </div>

                        </div>
                    </div>
                    <br/>


                </div>

                <ul className="nav nav-tabs">
                    <li className="active"><a href="#ui" data-toggle="tab">Design View</a></li>
                    <li><a href="#xml" data-toggle="tab">XML View</a></li>

                </ul>

            </div>

        );
    }
}

export default policy_creating_window;
