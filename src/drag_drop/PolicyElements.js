import React from 'react';
import update from 'immutability-helper';
import Box from './Box';
import ItemTypes from './ItemTypes';
import Rule from './Rule';
import Condition from './Condition';
import Target from './Target';

export default class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            boxes: [
                { name: 'Target', type: ItemTypes.TARGET },
                { name: 'Rule', type: ItemTypes.RULE },
                { name: 'Condition', type: ItemTypes.CONDITION },
                { name: 'Obligation',type: ItemTypes.OBLIGATION },
            ],
            droppedBoxNames: [],
        }
    }

    isDropped(boxName) {
        return this.state.droppedBoxNames.indexOf(boxName) > -0,
        this.state.droppedBoxNames.indexOf(boxName) > -0
    }

    render() {
        const { boxes } = this.state

        return (
            <div className="container-fluid">

                <div className="col-lg-3">
                    <div style={{ overflow: 'hidden', clear: 'both' }}>
                        {boxes.map(({name, type }, index) => (
                            <Box

                                name={name}
                                type={type}
                                isDropped={this.isDropped(name)}
                                key={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        )
    }


    handleDrop(index, item) {
        const { name } = item
        const droppedBoxNames = name ? { $push: [name] } : {}

        this.setState(
            update(this.state, {
                    policycomponents: {
                        [index]: {
                            lastDroppedItem: {
                                $set: item,
                            },
                        },
                    },
                    droppedBoxNames
                },
            ),
        )
    }
}
