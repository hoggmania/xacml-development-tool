import React from 'react';
import SortableTree, {addNodeUnderParent, removeNodeAtPath, changeNodeAtPath} from 'react-sortable-tree';
import Sample_policy_1 from '../Sample_policy_1';
import Sample_policy_2 from '../Sample_policy_2';
import DragDrop from '../drag_drop/Container.js';
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


        }

    }


    render() {
        const externalNodeType = 'yourNodeType';
        const {shouldCopyOnOutsideDrop} = this.state;




        return (


                                    <form className="form-inline">


                                            <div className="col collapse in" id="demo">
                                                <div className="row">
                                                    <div className="col-md-3">
                                                        <div className="form-group">
                                                            <div id="tree2"
                                                                 style={{
                                                                     height: 75,
                                                                     width: 300,
                                                                     float: 'left',
                                                                     border: 'solid black 1px',

                                                                 }}
                                                            >
                                                                <SortableTree
                                                                    treeData={this.state.treeData2}
                                                                    onChange={treeData2 => this.setState({treeData2})}
                                                                    dndType={externalNodeType}
                                                                    shouldCopyOnOutsideDrop={shouldCopyOnOutsideDrop}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                                    <div className="col-md-1">
                                                        <div className="col-sm-2">
                                                            <button
                                                                className="btn btn-default dropdown-toggle"
                                                                type="button"
                                                                data-toggle="dropdown">equals
                                                            </button>
                                                            <ul className="dropdown-menu">
                                                                <li><a href="#">Global (All tenants)</a>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


                                                    <br/>

                                                    <div className="col-md-3">
                                                        <div className="col-sm-6">
                                                            <input type="URI" className="form-control"
                                                                   id="URI"
                                                                   placeholder="Enter Value"/>
                                                        </div>
                                                    </div>
                                                    <br/>
                                                    <div className="col-md-2">
                                                        <button
                                                            className="btn btn-default dropdown-toggle"
                                                            type="button"
                                                            data-toggle="dropdown">AND
                                                        </button>
                                                        <ul className="dropdown-menu">
                                                            <li><a href="#">OR</a>
                                                            </li>
                                                            <li><a href="#">END</a>
                                                            </li>

                                                        </ul>
                                                    </div>

                                                    <div className="col-md-1">
                                                        <button>
                                                            <img
                                                                src="/images/add.png"
                                                                alt="my image"
                                                                width="15"
                                                                height="15"
                                                            />
                                                        </button>
                                                    </div>
                                                </div>


                                            </div>




                                    </form>




        );
    }
}

export default policy_creating_window;
