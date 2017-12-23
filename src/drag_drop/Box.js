import React from 'react';
import PropTypes from 'prop-types';
import {DragSource} from 'react-dnd';

const boxSource = {
    beginDrag(props) {
        return {
            name: props.name,
        }
    },
}

@DragSource(props => props.type, boxSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
}))
export default class Box extends React.Component {
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
        const {name, value, isDropped, isDragging, connectDragSource} = this.props
        const opacity = isDragging ? 0.4 : 1

        let border = '1px dashed gray'
        let backgroundColor = 'white'
        let padding = '0.5rem 1rem'
        let marginRight = '1.5rem'
        let marginBottom = '0.5rem'
        let cursor = 'move'
        let float = 'left'
        let width = '75px'

        return connectDragSource(
            <div style={{
                border,
                backgroundColor,
                padding,
                marginRight,
                marginBottom,
                cursor,
                float,
                opacity,
                width,
            }}>
                {isDropped ? <s>{name}</s> : name}
            </div>,
        )
    }
}
