import React from 'react';
import PropTypes from 'prop-types';
import {DropTarget} from 'react-dnd';
import Select from 'react-select';
import Condition from './Condition';
import Obligation from "./Obligation";

const ruleComponentTarget = {
    drop(props, monitor) {
        props.onDrop(monitor.getItem())
    },
}

@DropTarget(props => props.accepts, ruleComponentTarget, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
}))
export default class RuleComponents extends React.Component {
    constructor(props) {

        super(props);
        this.state = {

            connectDropTarget: PropTypes.func.isRequired,
            isOver: PropTypes.bool.isRequired,
            canDrop: PropTypes.bool.isRequired,
            accepts: PropTypes.arrayOf(PropTypes.string).isRequired,
            lastDroppedItem: PropTypes.object,
            onDrop: PropTypes.func.isRequired,

            rule_effects: "",
            rulename: ''
        }
        this.logChange1 = this.logChange1.bind(this);
        this.submitdata = this.submitdata.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({rulename: event.target.value});
    }

    renderDroppedItem(lastDroppedItem) {
        let component;
        console.log(lastDroppedItem);
        switch (lastDroppedItem.name) {
            case 'Condition':
                component = (<Condition onDelete={this.props.onDelete} onSubmit3={this.props.onSubmit3} />);
                break;
            case 'Obligation':
                component = (<Obligation onDelete={this.props.onDelete} />);
                break;
            default: component = undefined;
        }
        console.log(component);
        return component
    }

    logChange1(val) {
        this.setState({rule_effects: val.value});
    }

    submitdata(e){
        console.log("hi");
        e.preventDefault();
        this.props.onSubmit1(this.state.rulename,this.state.rule_effects);
    }

    render() {

        var rule_effects = [
            {value: 'permit', label: 'permit'},
            {value: 'deny', label: 'deny'},
            {value: 'not applicable', label: 'not applicable'}
        ];

        const {
            accepts,
            isOver,
            canDrop,
            connectDropTarget,
            lastDroppedItem,
        } = this.props
        const isActive = isOver && canDrop

        let backgroundColor = '#d9d9d9'
        if (isActive) {
            backgroundColor = 'darkblue'
        } else if (canDrop) {
            backgroundColor = 'darkblue'
        }

        let height = '400px'
        let width = '1100px'
        let marginRight = '1.5rem'
        let marginBottom = '1.5rem'
        let color = 'black'
        let padding = '1rem'
        let textAlign = 'center'
        let fontSize = '2rem'
        let lineHeight = 'normal'
        let float = 'left'

        return connectDropTarget(
            <div
                style={{
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
                }}
                >

                <form>

                    <button onClick={this.submitdata}>
                        <img
                            src="/images/remove1.png"
                            alt="my image"
                            width="10"
                            height="10"
                        />
                    </button>

                    <input type="submit" value="+" />
                        <button onClick={this.props.onDelete}>
                            <img
                                src="/images/remove.png"
                                alt="my image"
                                width="10"
                                height="10"
                            />
                        </button>


                <label className="col-sm-6" for="rule_name"> Rule Name:</label>
                    <div className="col-sm-6"
                         style={{
                             height: 20,
                             width: 200,
                             float: 'left',
                             _fontSize:'8px'

                         }}>
                        <input className="form-control" id="value"
                               placeholder="Value"
                               value={this.state.rulename}
                               onChange={this.handleInputChange}
                        /></div>

                <br/> <br/>
                <label className="col-sm-6" for="rule_effect">Effect:</label>
                <div className="col-sm-6"
                     style={{
                         height: 20,
                         width: 200,
                         float: 'left',
                     }}
                >
                    <Select id="rule_effects"
                            name="form-field-name"
                            value={this.state.rule_effects}
                            options={rule_effects}
                            onChange={this.logChange1}
                    />
                </div>

                </form>

                {isActive
                    ? 'Release to drop'
                    : `This component accepts: ${accepts.join(', ')}`}

                {lastDroppedItem && this.renderDroppedItem(lastDroppedItem)}
            </div>,
        );
    }
}
