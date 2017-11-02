import React from 'react';
import SortableTree, {addNodeUnderParent, removeNodeAtPath, changeNodeAtPath} from 'react-sortable-tree';
import SkyLight from 'react-skylight';
import Sample_policy_1 from '../Sample_policy_1';
import Sample_policy_2 from '../Sample_policy_2';
import Policy_window from '../policy_window';
import Policy_creating_window from './policy_creating_window';
import Policy_creating_window3 from './policy_creating_window3';
import Policy_creating_window2 from './policy_creating_window2';
import Pre_policies from '../components/pre_policies';


class sortable_tree extends React.Component {
    constructor(props) {

        super(props);
        this.state = {

            treeData: [
                {
                    title: 'User',
                    children: [{title: 'ID'}, {title: 'Name'}],
                },
                {
                    title: 'Environment',
                    children: [{title: 'IP'}, {title: 'Tenant'}],
                },
            ],

            treeData2: [{title: 'Drag an attribute'}],
            shouldCopyOnOutsideDrop: true,

            tabIndex: 0,
            value: "select",

        }
        this.change = this.change.bind(this);
    }

    change(event) {
        this.setState({value: event.target.value});
    }


    render() {
        const externalNodeType = 'yourNodeType';
        const {shouldCopyOnOutsideDrop} = this.state;
        const getNodeKey = ({treeIndex}) => treeIndex;
        const foo = ["Select policy template", "Sample_policy_1", "Sample_policy_2"];
        const rule_combining_algorithm = ["Select rule combining algorithm", "Deny-overrides", "Permit-overrides", "First-applicable"];
        const equals = ["equals", "equals-with-regexp-match"];
        const occurences = ["END", "AND", "OR"];

        return (
            <div className="container-fluid">


                <div className="row no-gutters">
                    <div className="col-lg-0.5 verticalLine">
                    </div>

                    <div className="col-lg-3.5" id="tree1">

                        <center><h3>Categories and Attributes List</h3></center>
                        <div id="categories_and_attribute_list_window">
                            <SortableTree
                                treeData={this.state.treeData}
                                //treeData_1={this.state.treeData_1}
                                onChange={treeData => this.setState({treeData})}
                                dndType={externalNodeType}
                                shouldCopyOnOutsideDrop={shouldCopyOnOutsideDrop}
                                generateNodeProps={({node, path}) => ({

                                    title: !node.needsTitle ? (
                                        node.title
                                    ) : (
                                        <form
                                            onSubmit={event => {
                                                event.preventDefault();
                                                const {needsTitle, nodeWithoutNeedsTitle} = node;
                                                this.setState(state => ({
                                                    treeData: changeNodeAtPath({
                                                        treeData: state.treeData,
                                                        path,
                                                        getNodeKey,
                                                        newNode: nodeWithoutNeedsTitle,
                                                    }),
                                                }));
                                            }}
                                        >
                                            <input
                                                autoFocus
                                                value={node.title}
                                                onChange={event => {
                                                    const title = event.target.value;

                                                    this.setState(state => ({
                                                        treeData: changeNodeAtPath({
                                                            treeData: state.treeData,
                                                            path,
                                                            getNodeKey,
                                                            newNode: {node, title},
                                                        }),
                                                    }));
                                                }}
                                            />
                                        </form>
                                    ),

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

                                        <button
                                            className="btn"
                                            id={path.length === 1 ? 'btn_add_parent' : 'btn_add_children'}
                                            onClick={() =>
                                                this.setState(state => ({
                                                    treeData: addNodeUnderParent({
                                                        treeData: state.treeData,
                                                        parentKey: path[path.length - 1],
                                                        expandParent: false,
                                                        getNodeKey,
                                                        newNode: {
                                                            title: '',
                                                            needsTitle: true,
                                                        },
                                                    }).treeData,
                                                }))}
                                        >
                                            <img
                                                src="/images/add.png"
                                                alt="my image"
                                                width="15"
                                                height="15"
                                            />
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
                                        ><img src="/images/remove.png" alt="my_image" width="15" height="15"/>
                                        </button>,
                                    ],
                                })}
                            />

                            <center>
                                <SkyLight hideOnOverlayClicked ref="editCategoryDetails"
                                          title="Configure Category Details" id="edit_category_details_popup">
                                    <form className="form-actions form-horizontal center_div">
                                        <div className="form-group">
                                            <label className="control-label col-sm-6" for="name">Name:</label>
                                            <div className="col-sm-6 ">
                                                <input type="name" className="form-control" id="name"
                                                       placeholder="Enter Attribute Name"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label col-sm-6" for="pwd">URI:</label>
                                            <div className="col-sm-6">
                                                <input type="URI" className="form-control" id="URI"
                                                       placeholder="Enter URI"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label col-sm-6" for="email">Display Name:</label>
                                            <div className="col-sm-6">
                                                <input type="Display Name" className="form-control" id="Display Name"
                                                       placeholder="Enter Display Name"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label col-sm-6" for="display_name">Scope:</label>
                                            <div className="col-sm-2">
                                                <button className="btn btn-default dropdown-toggle" type="button"
                                                        data-toggle="dropdown">Select Scope
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

                                        <div className="form-group">
                                            <div className="col-sm-6">
                                                <button type="submit" className="btn btn-primary">Submit</button>
                                            </div>
                                        </div>

                                    </form>
                                </SkyLight>
                            </center>

                            <center>
                                <SkyLight hideOnOverlayClicked ref="editAttributeDetails"
                                          title="Configure Attribute Details" id="edit_attribute_details_popup">
                                    <form className="form-actions form-horizontal center_div">
                                        <div className="form-group">
                                            <label className="control-label col-sm-6" for="name">Name:</label>
                                            <div className="col-sm-6 ">
                                                <input type="name" className="form-control" id="name"
                                                       placeholder="Enter Attribute Name"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label col-sm-6" for="pwd">URI:</label>
                                            <div className="col-sm-6">
                                                <input type="URI" className="form-control" id="URI"
                                                       placeholder="Enter URI"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label col-sm-6" for="email">Display Name:</label>
                                            <div className="col-sm-6">
                                                <input type="Display Name" className="form-control" id="Display Name"
                                                       placeholder="Enter Display Name"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label col-sm-6" for="display_name">Scope:</label>
                                            <div className="col-sm-2">
                                                <button className="btn btn-default dropdown-toggle" type="button"
                                                        data-toggle="dropdown">Select Scope
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

                                        <div className="form-group">
                                            <div className="col-sm-6">
                                                <button type="submit" className="btn btn-primary">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </SkyLight>
                            </center>


                            <button type="button" className="btn btn-warning"
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
                            </button>
                        </div>
                    </div>

                    <div className="col-lg-9">
                        <center><h3>Policy Creating Window</h3></center>
                        <Policy_creating_window3></Policy_creating_window3>
                    </div>

                </div>
            </div>

        );
    }
}

export default sortable_tree;

