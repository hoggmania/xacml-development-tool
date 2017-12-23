import React from 'react';
import update from 'immutability-helper';
import {SortableTreeWithoutDndContext as SortableTree1} from 'react-sortable-tree';
import Select from 'react-select';
import ItemTypes from './ItemTypes';
import RuleComponents from './RuleComponents';
import Condition from './Condition';
import Obligation from './Obligation';

class Rule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rulecomponents: [
                { accepts: [ItemTypes.CONDITION,ItemTypes.OBLIGATION], lastDroppedItem: null },
            ],

            boxes: [
                { name: 'Target', type: ItemTypes.TARGET },
                { name: 'Rule', type: ItemTypes.RULE },
                { name: 'Condition', type: ItemTypes.CONDITION },
                { name: 'Obligation', type: ItemTypes.OBLIGATION }
            ],

            droppedBoxNames: [],
            showComponent: true,

            valueselect2: "",
            valueselect3: "",
            valueselect4: "",
            value: ''
        }
        this.onDelete = this.onDelete.bind(this);
    }

    isDropped(boxName) {
        return this.state.droppedBoxNames.indexOf(boxName) > -0
    }

    render() {
        const { rulecomponents } = this.state
        return (
            <div className="container-fluid">

                <div style={{ overflow: 'hidden', clear: 'both' }}>
                    {rulecomponents.map(({ accepts, lastDroppedItem }, index) => (

                        this.state.showComponent ?
                        <RuleComponents
                            accepts={accepts}
                            lastDroppedItem={lastDroppedItem}
                            onDrop={item => this.handleDrop(index, item)}
                            key={index}
                            onDelete={this.onDelete}
                            onSubmit1={this.props.onSubmit1}
                            onSubmit3={this.props.onSubmit3}
                        />
                            :''
                    ))}
                </div>
            </div>
        );
    }

    handleDrop(index, item) {
        const { name } = item
        const droppedBoxNames = name ? { $push: [name] } : {}

        this.setState(
            update(this.state, {
                rulecomponents: {
                    [index]: {
                        lastDroppedItem: {
                            $set: item,
                        },
                    },
                },
                droppedBoxNames
            }),
        )
    }

    onDelete() {
        this.setState({ showComponent: false });
    }
}

export default Rule;

