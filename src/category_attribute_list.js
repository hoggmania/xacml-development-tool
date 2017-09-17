import React from 'react';

class category_attribute_list extends React.Component {

    render() {
        return (
            <category_attribute_list>
                <img src="/images/garbage-bin-png-1.png" />
                <h5>{this.props.title}</h5>
            </category_attribute_list>
        )
    }

}

export default category_attribute_list;