import React from 'react';

class welcome_samples extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="jumbotron">
                <button type="button" id="template1_button" className="btn btn-warning"><i className="fw fw-google-slides fw-3x"></i>Template 1</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="button" id="template1_button" className="btn btn-warning"><i className="fw fw-google-docs fw-3x"></i>Template 2</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="button" id="template1_button" className="btn btn-warning"><i className="fw fw-enterprise fw-3x"></i>Template 3</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="button" id="template1_button" className="btn btn-warning"><i className="fw fw-google-slides fw-3x"></i>Template 4</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
        );
    }
}

export default welcome_samples;
