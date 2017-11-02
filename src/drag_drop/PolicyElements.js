import React, { Component } from 'react'
import update from 'immutability-helper'
import { DragDropContext } from 'react-dnd'
import HTML5Backend, { NativeTypes } from 'react-dnd-html5-backend'
import PolicyComponents from './PolicyComponents'
import Box from './Box'
import ItemTypes from './ItemTypes'
import Sample_policy_1 from './Rule'


@DragDropContext(HTML5Backend)
export default class Container extends Component {
    constructor(props) {
        super(props)
        this.state = {
            policycomponents: [
                { accepts: [ItemTypes.RULE], lastDroppedItem: null },
                { accepts: [ItemTypes.CONDITION], lastDroppedItem: null },
                {
                    accepts: [ItemTypes.OBLIGATION, ItemTypes.RULE],
                    lastDroppedItem: null,
                },
                { accepts: [ItemTypes.OBLIGATION], lastDroppedItem: null },
            ],

            boxes: [
                { name: 'Rule', value:"hh",type: ItemTypes.RULE },
                { name: 'Condition', value:<input type="text"/>, type: ItemTypes.CONDITION },
                { name: 'Obligation',value:<input/>, type: ItemTypes.OBLIGATION },
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
                        {boxes.map(({ value,name, type }, index) => (
                            <Box
                                value={value}
                                name={name}
                                type={type}

                                isDropped={this.isDropped(value)}
                                key={index}
                            />
                        ))}
                    </div>
                </div>


            </div>
        )
    }

    handleDrop(index, item) {
        const { value } = item
        const droppedBoxNames = value ? { $push: [value] } : {}

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
            }),
        )
    }
}
