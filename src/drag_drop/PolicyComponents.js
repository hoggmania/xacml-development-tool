import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DropTarget } from 'react-dnd'


const dustbinTarget = {
    drop(props, monitor) {
        props.onDrop(monitor.getItem())
    },
}

@DropTarget(props => props.accepts, dustbinTarget, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
}))
export default class Dustbin extends Component {
    constructor(props) {

        super(props);
        this.state = {

            connectDropTarget: PropTypes.func.isRequired,
            isOver: PropTypes.bool.isRequired,
            canDrop: PropTypes.bool.isRequired,
            accepts: PropTypes.arrayOf(PropTypes.string).isRequired,
            lastDroppedItem: PropTypes.object,
            onDrop: PropTypes.func.isRequired,


        }
    }

    render() {
        const {
            accepts,
            isOver,
            canDrop,
            connectDropTarget,
            lastDroppedItem,
        } = this.props
        const isActive = isOver && canDrop

        let backgroundColor = '#f3ffcc'
        if (isActive) {
            backgroundColor = 'darkgreen'
        } else if (canDrop) {
            backgroundColor = 'darkkhaki'
        }


            let  height= '700px'
            let width= '700px'
        let marginRight= '1.5rem'
            let marginBottom= '1.5rem'
            let color= 'black'
            let padding='1rem'
            let textAlign= 'center'
            let fontSize= '2rem'
            let lineHeight= 'normal'
            let float= 'left'

        const value = lastDroppedItem ? lastDroppedItem.value : "";

        return connectDropTarget(
            <div style={{height,width,marginRight,marginBottom,color, padding,textAlign,fontSize,lineHeight,float,backgroundColor }}>
                {isActive
                    ? 'Release to drop'
                    : `This component accepts: ${accepts.join(', ')}`}

                {lastDroppedItem && (
                    <p>Last dropped: {value} </p>
                )}
            </div>,
        )
    }
}
