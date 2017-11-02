import React from 'react';
import SortableTree1, {addNodeUnderParent, removeNodeAtPath, changeNodeAtPath} from 'react-sortable-tree';

class Rule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            treeData: [{title: 'User', children: [{title: 'Name'}, {title: 'Tenant'}]},
                {title: 'Environment', children: [{title: 'IP'}, {title: 'Time'}]}],

            treeData4: [{title: 'Drag an attribute'}],
            shouldCopyOnOutsideDrop: true,

            value: "select",
            tabIndex: 0,
        }
    }

    render() {
        const externalNodeType = 'yourNodeType';
        const {shouldCopyOnOutsideDrop} = this.state;
        const getNodeKey = ({treeIndex}) => treeIndex;

        return (
            <div className="form-group">
                    Rule name:<input type="text" name="firstname" value="rule name"/><br/>
                    Rule effect:<input type="text" name="lastname" value="rule effect"/><br/>

                    <div id="tree2"
                         style={{
                             height: 75,
                             width: 300,
                             float: 'left',
                             border: 'solid black 1px',

                         }}
                    >
                        <SortableTree1
                            treeData={this.state.treeData4}
                            onChange={treeData4 => this.setState({treeData4})}
                            dndType={externalNodeType}
                            shouldCopyOnOutsideDrop={shouldCopyOnOutsideDrop}
                        />
                    </div>
                </div>

        );
    }
}

export default Rule;

