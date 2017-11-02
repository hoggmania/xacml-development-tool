import React from 'react';
import Header from '../components/Header';
import Sortable_tree from './sortable_tree';
import Policy_window from '../policy_window';
import Policy_management_window from '../policy_management_window';
import Policy_viewing_window from '../policy_viewing_window';
import Pre_policies from '../components/pre_policies';
import Welcome_samples from '../components/welcome_samples';
import Main_window from './main_window';


class welcome_window extends React.Component {


    render() {

        return (


            <div>
                <Header title="XACML DEVELOPMENT TOOL"/>

                <div className="container-fluid">
                    <div className="row no-gutters">
                        <div className="col-lg-0.5 verticalLine">
                        </div>

                        <div className="col-lg-2">
                            <center>
                                <div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </div>
                                <div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </div>
                                <div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </div>
                                <div>

                                    <button id="create_new_policy_button" type="button" onClick={<Main_window></Main_window>} className="btn btn-warning"><i
                                        className="fw fw-policy fw-2x"></i>&nbsp;&nbsp;Create New Policy

                                    </button>
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

