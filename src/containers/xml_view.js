import React from 'react';
import Container from '../drag_drop/Container';
import Sample_policy_1 from '../drag_drop/Sample_policy_1';

class xml_view extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showXmlView: true,
            showDesignView: false,
            showDesignButton: true
        }
        this.showDesignView = this.showDesignView.bind(this);
    }

    showDesignView() {
        this.setState({
            showXmlView: false,
            showDesignView: true,
            showDesignButton: false
        });
    }

    render() {
        return (
            <div className="container-fluid">
                <div style={{overflow: 'hidden', clear: 'both'}}>
                    {this.state.showXmlView ?
                        <Sample_policy_1/>
                        : ''}
                    {this.state.showDesignButton ?
                        <button id="open_file_button" type="button" onClick={this.showDesignView}
                                className="btn btn-warning pull-right"><i
                            className="fw fw-design-view fw-2x"></i>&nbsp;&nbsp;Design View
                        </button>
                        : ''}
                    {this.state.showDesignView ?
                        <Container/> :
                        ''}
                </div>
            </div>
        )
    }
}

export default xml_view;
