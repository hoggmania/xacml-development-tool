import React from 'react';
import {SortableTreeWithoutDndContext as SortableTree1} from 'react-sortable-tree';
import Select from 'react-select';
import {ReactDOM,findDOMNode} from 'react-dom';
import ItemTypes from './ItemTypes';

class Target extends React.Component {


    constructor(props) {
        super(props);
        this.state = {

            policycomponents: [
                { accepts: [ItemTypes.RULE,ItemTypes.TARGET], lastDroppedItem: null },
            ],

            treeData: [{title: 'User', children: [{title: 'Name'}, {title: 'Tenant'}]},
                {title: 'Environment', children: [{title: 'IP'}, {title: 'Time'}]}],

            treeData4: [{title: 'Drag an attribute'}],
            shouldCopyOnOutsideDrop: true,

            valueselect2: "",
            valueselect3: "",
            targetvalue: '',
            attribute_value:[]

        }

        this.logChange2 = this.logChange2.bind(this);
        this.logChange3 = this.logChange3.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.submitdata = this.submitdata.bind(this);
    }

    handleInputChange(event) {
        this.setState({targetvalue: event.target.value});
    }

    logChange2(val) {
        this.setState({valueselect2: val.value});
    }

    logChange3(val) {
        this.setState({valueselect3: val.value});
    }

    submitdata(e){
        console.log("hi");
        e.preventDefault();
        var attribute_value = (JSON.stringify(this.state.treeData4[1,1])).split(':');
        attribute_value[1] = attribute_value[1].replace(/[{}]/g, "");
        this.props.onSubmit(attribute_value[1],this.state.valueselect2,this.state.targetvalue,this.state.valueselect3);
    }

    render() {

        var equals = [
            {value: 'equals', label: 'equals'},
            {value: 'equals-with-regexp-match', label: 'equals-with-regexp-match'},
        ];

        var ENDANDOR = [
            {value: 'END', label: 'END'},
            {value: 'AND', label: 'AND'},
            {value: 'OR', label: 'OR'},
        ];

        const externalNodeType = 'yourNodeType';
        const {shouldCopyOnOutsideDrop} = this.state;
        const getNodeKey = ({treeIndex}) => treeIndex;

        return (
            <form>

                <button onClick={this.submitdata}>
                    <img
                        src="/images/remove1.png"
                        alt="my image"
                        width="10"
                        height="10"
                    />
                </button>

                {/*<div data-alert className="alert-box error-box" ref={(el) => {this.el = el}}>*/}

                    {/*<button onClick={this.onSubmit}>*/}
                        {/*<img*/}
                            {/*src="/images/check-mark.png"*/}
                            {/*alt="my image"*/}
                            {/*width="10"*/}
                            {/*height="10"*/}
                        {/*/>*/}
                    {/*</button>*/}

                    <input type="submit" value="+" />

                    <button onClick={this.props.onDelete}>
                        <img
                            src="/images/remove.png"
                            alt="my image"
                            width="10"
                            height="10"
                        />
                    </button>
                <div id="tree2"
                     style={{
                         height: 50,
                         width: 200,
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

                <div className="col-sm-6"
                     style={{
                         height: 20,
                         width: 150,
                         float: 'left',
                     }}
                >
                    <Select id="equals"
                            name="form-field-name"
                            value={this.state.valueselect2}
                            options={equals}
                            onChange={this.logChange2}
                    />
                </div>

                <div className="col-sm-6"
                     style={{
                         height: 20,
                         width: 200,
                         float: 'left',
                         _fontSize:'8px'

                     }}>
                    <input className="form-control" id="value"
                           placeholder="Value"
                           value={this.state.targetvalue}
                           onChange={this.handleInputChange}
                    /></div>

                <div className="col-sm-6"
                     style={{
                         height: 20,
                         width: 150,
                         float: 'left',

                     }}
                >
                    <Select id="ENDANDOR"
                            name="form-field-name"
                            value={this.state.valueselect3}
                            options={ENDANDOR}
                            onChange={this.logChange3}
                    />
                </div>

            </form>
        );


    }
}

export default Target;

