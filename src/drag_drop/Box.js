import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DragSource } from 'react-dnd'


const boxSource = {
    beginDrag(props) {
        return {
            value: props.value,
        }
    },
}

@DragSource(props => props.type, boxSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
}))
export default class Box extends Component {
    constructor(props) {
        super(props)
        this.state = {
            connectDragSource: PropTypes.func.isRequired,
            isDragging: PropTypes.bool.isRequired,
            name: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            isDropped: PropTypes.bool.isRequired,
        }
    }

    render() {
        const { name,value, isDropped, isDragging, connectDragSource } = this.props
        const opacity = isDragging ? 0.4 : 1


            let border= '1px dashed gray'
            let backgroundColor= 'white'
                let padding= '0.5rem 1rem'
            let marginRight= '1.5rem'
            let marginBottom='1.5rem'
            let cursor= 'move'
            let float= 'left'


        return connectDragSource(
            <div style={{border,backgroundColor,padding,marginRight,marginBottom,cursor,float, opacity }}>
                {isDropped ? <s>{value}</s> : name}
            </div>,

        )
    }
}
