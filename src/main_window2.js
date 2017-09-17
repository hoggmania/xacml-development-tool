import React from 'react';
import Header from './Header';
import Todo from './Todo';
import Sample_policy_1 from './Sample_policy_1';
import category_attribute_list from './category_attribute_list'
import SortableTree,{ addNodeUnderParent, removeNodeAtPath,changeNodeAtPath } from 'react-sortable-tree';
import SkyLight from 'react-skylight';
<rt-import name="myComp" from="comps" />
//<rt-import name="*" as="utils" from="utils/utils" />

//import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';



class app extends React.Component {
    constructor(props) {


        super(props);
        this.state = {

            treeData: [{ title: 'User', children: [ { title: 'Name' },{ title: 'Tenant' } ] },
                { title: 'Environment', children: [ { title: 'IP' },{ title: 'Time' } ] }],

            tabIndex: 0,
            getInitialState: function() {
                return {
                    value: 'select'
                }
            },
            change: function(event){
                this.setState({value: event.target.value});
            },


        };

        var create = function () {
            return React.createElement('h2', {}, 'Hello world');
        };


    }


    render() {
        const getNodeKey = ({ treeIndex }) => treeIndex;
        const maxDepth=2;
        const foo = ["OPT1","OPT2"];


        return (
            <div>
                <Header title="XACML DEVELOPMENT TOOL"/>
                <br/>
                <div className="row">
                    <div className="col-lg-3"><center><h3>Categories and Attributes List</h3></center>


                        <div id="categories_and_attribute_list_window">
                            <SortableTree
                                treeData={this.state.treeData}
                                //treeData_1={this.state.treeData_1}
                                onChange={treeData => this.setState({ treeData })}

                                generateNodeProps={({ node, path }) => ({



                                    buttons: [

                                        <button type="button" className="btn"
                                                id=
                                                    {path.length == 1 ? (
                                                        "btn_edit_parent_category"
                                                    ) : (
                                                        "btn_edit_children_category"
                                                    )}

                                                onClick={() => this.refs.editCategoryDetails.show()}>
                                            <img src="/images/edit.png" alt="my image" width="15" height="15"/>
                                        </button>,

                                        <button type="button" className="btn"
                                                id=
                                                    {path.length == 1 ? (
                                                        "btn_edit_parent_attributes"
                                                    ) : (
                                                        "btn_edit_children_attributes"
                                                    )}

                                                onClick={() => this.refs.editAttributeDetails.show()}>
                                            <img src="/images/edit.png" alt="my image" width="15" height="15"/>
                                        </button>,




                                        <button className="btn" id=
                                            {path.length == 1 ? (
                                                "btn_add_parent"
                                            ) : (
                                                "btn_add_children"
                                            )}


                                                onClick={() =>
                                                    this.setState(state => ({
                                                        treeData: addNodeUnderParent({
                                                            treeData: state.treeData,
                                                            parentKey: path[1 - 1], //parentKey: path[path.length - 1].. path.lenth=1 here
                                                            expandParent: false,

                                                            getNodeKey,

                                                            newNode:
                                                                {
                                                                    title: (
                                                                        <input/>
                                                                    )
                                                                },

                                                        }).treeData,
                                                    }))}
                                        >
                                            <img src="/images/add.png" alt="my image" width="15" height="15"/>

                                        </button>,


                                        <button type="button" className="btn"

                                                onClick={() =>
                                                    this.setState(state => ({
                                                        treeData: removeNodeAtPath({
                                                            treeData: state.treeData,
                                                            path,
                                                            getNodeKey,
                                                        }),
                                                    }))}
                                        ><img src="/images/remove.png" alt="my image" width="15" height="15"/>
                                        </button>,
                                    ],


                                })}
                            />

                            <center>
                                <SkyLight hideOnOverlayClicked ref="editCategoryDetails" title="Configure Category Details" id="edit_category_details_popup">
                                    <form className="form-actions form-horizontal center_div">
                                        <div className="form-group">
                                            <label className="control-label col-sm-6" for="name">Name:</label>
                                            <div className="col-sm-6 ">
                                                <input type="name" className="form-control" id="name" placeholder="Enter Attribute Name"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label col-sm-6" for="pwd">URI:</label>
                                            <div className="col-sm-6">
                                                <input type="URI" className="form-control" id="URI" placeholder="Enter URI"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label col-sm-6" for="email">Display Name:</label>
                                            <div className="col-sm-6">
                                                <input type="Display Name" className="form-control" id="Display Name" placeholder="Enter Display Name"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label col-sm-6" for="display_name">Scope:</label>
                                            <div className="col-sm-2">
                                                <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Select Scope
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><a href="#">Global (All tenants)</a></li>
                                                    <li><a href="#">Global (Current tenant)</a></li>
                                                    <li><a href="#">Template</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <br/>
                                        <br/>

                                        <div class="form-group">
                                            <div class="col-sm-6">
                                                <button type="submit" className="btn btn-primary">Submit</button>
                                            </div>
                                        </div>

                                    </form>
                                </SkyLight>
                            </center>

                            <center>
                                <SkyLight hideOnOverlayClicked ref="editAttributeDetails" title="Configure Attribute Details" id="edit_attribute_details_popup">
                                    <form className="form-actions form-horizontal center_div">


                                        <div className="form-group">
                                            <label className="control-label col-sm-6" for="name">Name:</label>
                                            <div className="col-sm-6 ">
                                                <input type="name" className="form-control" id="name" placeholder="Enter Attribute Name"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label col-sm-6" for="pwd">URI:</label>
                                            <div className="col-sm-6">
                                                <input type="URI" className="form-control" id="URI" placeholder="Enter URI"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label col-sm-6" for="email">Display Name:</label>
                                            <div className="col-sm-6">
                                                <input type="Display Name" className="form-control" id="Display Name" placeholder="Enter Display Name"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label col-sm-6" for="display_name">Scope:</label>
                                            <div className="col-sm-2">
                                                <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Select Scope
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><a href="#">Global (All tenants)</a></li>
                                                    <li><a href="#">Global (Current tenant)</a></li>
                                                    <li><a href="#">Template</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <br/>
                                        <br/>

                                        <div class="form-group">
                                            <div class="col-sm-6">
                                                <button type="submit" className="btn btn-primary">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </SkyLight>
                            </center>

                            <center><button type="button" className="btn btn-success"
                                            onClick={() =>
                                                this.setState(state => ({
                                                    treeData: state.treeData.concat({
                                                        title: (
                                                            <input/>
                                                        )
                                                    }),
                                                }))}
                            >
                                Add Categories
                            </button></center>



                        </div>
                    </div>

                    <div className="col-lg-5"><center><h3 className="bg-info">Create New Policy</h3></center>

                        <div className="tabbable tabs-bottom">
                            <div className="tab-content">
                                <div className="tab-pane active" id="ui">
                                    <div className="jumbotron">
                                        <h4><center>UI View of the policy will be displayed



                                            <div>
                                                <select id="policy_list" onChange={this.change} value={this.state.value}>
                                                    /*{foo.map( item => <option value={item}>{item}</option> )}*/
                                                    <option value="select">Select policy template</option>
                                                    <option value="SP1">Sample policy 1</option>
                                                    <option value="SP2">Sample policy 2</option>
                                                </select>

                                                {this.state.value === "SP1" && <div> <Sample_policy_1></Sample_policy_1></div>}
                                                {this.state.value === "SP2" && <div> <Sample_policy_2></Sample_policy_2></div>}


                                            </div>


                                        </center></h4>
                                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                                    </div>
                                </div>
                                <div className="tab-pane" id="xml">
                                    <div className="jumbotron">
                                        <h4><center>XML View of the policy will be displayed</center></h4>
                                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                                    </div>
                                </div>

                                <div className="tab-pane" id="view">
                                    <div className="jumbotron">
                                        <h4><center>View</center></h4>
                                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                                    </div>
                                </div>


                            </div>

                            <ul className="nav nav-tabs">
                                <li className="active"><a href="#ui" data-toggle="tab">UI View</a></li>
                                <li><a href="#xml" data-toggle="tab">XML View</a></li>
                                <li><a href="#view" data-toggle="tab">View</a></li>

                            </ul>

                        </div>

                        <br/><br/><br/><br/><br/><br/>

                    </div>




                    <div className="col-lg-4"><center><h3>Policy Management</h3></center>
                        <form><fieldset className="field_set_1">
                            <legend>Request</legend>

                            <fieldset className="field_set_2">
                                <legend>XML
                                    <br/><br/><br/><br/><br/> </legend>

                            </fieldset>
                            <br/><br/><br/>

                            <fieldset className="field_set_2">
                                <legend>JSON
                                    <br/><br/><br/><br/><br/> </legend>

                            </fieldset>
                            <br/><br/><br/><br/><br/><br/>

                        </fieldset>
                        </form>
                    </div>


                </div>
            </div>

        );
    }
}

export default app;

