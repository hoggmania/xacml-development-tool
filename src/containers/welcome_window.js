import React from 'react';
import Pre_policies from '../components/pre_policies';
import Welcome_samples from '../components/welcome_samples';

class welcome_window extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 1
        };
        this.handleSelect = this.handleSelect.bind(this)
    }
    handleSelect(key) {
        this.setState({key});
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row no-gutters">
                        <div className="col-lg-2">
                            <center>
                                <div>
                                </div>
                                <br/>
                                <div>
                                    <button id="open_file_button" type="button" className="btn btn-warning"><i className="fw fw-folder-open fw-2x"></i>&nbsp;&nbsp;Open File
                                    </button>
                                </div>
                                    <br/>
                                    <div>
                                        <button id="open_directory_button" type="button" className="btn btn-warning"><i className="fw fw-folder fw-2x"></i>&nbsp;&nbsp;Open Directory
                                        </button>
                                </div>
                            </center>
                        </div>

                        <div className="mycontent-left">
                            <div className="col-lg-1">
                            </div>
                        </div>
                        <div className="col-lg-1">
                        </div>

                        <div className="col-lg-6">
                            <center><h3>Recent Policies</h3></center>
                            <div>
                                <Pre_policies></Pre_policies>
                            </div>

                            <center><h3>Try out our samples</h3></center>
                            <Welcome_samples></Welcome_samples>

                            <center><h3>Get Help</h3></center>
                            <div className="jumbotron">
                                <ul>
                                    <li><a href="#">Questions</a></li>
                                    <li><a href="#">Tutorials</a></li>
                                    <li><a href="#">Support</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default welcome_window;

