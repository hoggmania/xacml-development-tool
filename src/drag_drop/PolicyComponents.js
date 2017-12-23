import React from 'react';
import PropTypes from 'prop-types';
import {DropTarget} from 'react-dnd';
import Target from './Target';
import Rule from './Rule';
import Select from 'react-select';

const policyComponentTarget = {
    drop(props, monitor) {
        props.onDrop(monitor.getItem())
    },
}

@DropTarget(props => props.accepts, policyComponentTarget, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
}))
export default class PolicyComponents extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            connectDropTarget: PropTypes.func.isRequired,
            isOver: PropTypes.bool.isRequired,
            canDrop: PropTypes.bool.isRequired,
            accepts: PropTypes.arrayOf(PropTypes.string).isRequired,
            lastDroppedItem: PropTypes.object,
            onDrop: PropTypes.func.isRequired,
            name:'',

            policy_name:'',
            description:'',
            rule_combine_algorithm:''
        }
        this.changeAlgorithm = this.changeAlgorithm.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescriptionChange=this.handleDescriptionChange.bind(this);
    }

    changeAlgorithm(val) {
        this.setState({rule_combine_algorithm: val.value});
        this.props.addAlgorithm(this.state.rule_combine_algorithm);
    }

    renderDroppedItem(lastDroppedItem) {
        let component;
        console.log(lastDroppedItem);
        switch (lastDroppedItem.name) {
            case 'Target':
                component = (<Target onDelete={this.props.onDelete} onSubmit={this.props.onSubmit} />);
                break;
            case 'Rule':
                component = (<Rule onDelete={this.props.onDelete} onSubmit1={this.props.onSubmit1} onSubmit3={this.props.onSubmit3} />);
                break;
            default: component = undefined;
        }
        console.log(component);
        return component
    }

    handleNameChange(event) {
        this.setState({policy_name: event.target.value});
        this.props.addName(this.state.policy_name);
    }

    handleDescriptionChange(event) {
        this.setState({description: event.target.value});
        this.props.addDescription(this.state.description);
    }

    render() {
        var equals = [
            {value: 'Deny-overrides', label: 'Deny-overrides'},
            {value: 'Permit-overrides', label: 'Permit-overrides'},
            {value: 'First-applicable', label: 'First-applicable'}
        ];

        const {
            accepts,
            isOver,
            canDrop,
            connectDropTarget,
            lastDroppedItem,
        } = this.props
        const isActive = isOver && canDrop

        let backgroundColor = 'rgb(95, 89, 89)'
        if (isActive) {
            backgroundColor = 'darkgreen'
        } else if (canDrop) {
            backgroundColor = 'darkkhaki'
        }


        let height = '500px'
        let width = '1500px'
        let marginRight = '1.5rem'
        let marginBottom = '1.5rem'
        let color = 'black'
        let padding = '1rem'
        let textAlign = 'center'
        let fontSize = '2rem'
        let lineHeight = 'normal'
        let float = 'left'

        return connectDropTarget(
            <div style={{
                height,
                width,
                marginRight,
                marginBottom,
                color,
                padding,
                textAlign,
                fontSize,
                lineHeight,
                float,
                backgroundColor
            }}>
                Policy component
                {isActive
                    ? 'Release to drop'
                    : `This component accepts: ${accepts.join(', ')}`}

                {lastDroppedItem && (
                <p>Last dropped: {JSON.stringify(lastDroppedItem)}
                </p>
                )}

                <div style={{ overflow: 'hidden', clear: 'both'}}>
                <form className="form-horizontal">
                <div className="form-group">
                    <label className="control-label col-sm-6" for="name">Policy
                        Name:</label>
                    <div className="col-sm-3 ">
                        <input type= "name" className="form-control" id="name"
                               placeholder="Enter Policy Name" value={this.props.policy_name}
                               onChange={this.handleNameChange}/>
                    </div>
                </div>

                    <div className="form-group">
                    <label className="control-label col-sm-6"
                           for="pwd">Description:</label>
                    <div className="col-sm-3">
                        <input type="URI" className="form-control" id="URI"
                               placeholder="Enter Description" value={this.state.description}
                               onChange={this.handleDescriptionChange}/>
                    </div>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-6" for="display_name">Rule
                        Combining Algorithm:</label>
                    <div className="col-sm-3">

                        <Select id="equals"
                                name="form-field-name"
                                value={this.state.rule_combine_algorithm}
                                options={equals}
                                onChange={this.changeAlgorithm}
                        />
                    </div>
                </div>
                </form>
                </div>
                {lastDroppedItem && this.renderDroppedItem(lastDroppedItem)}
            </div>,
        )
}}
