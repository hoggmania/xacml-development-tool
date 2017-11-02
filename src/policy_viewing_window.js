import React from 'react';

class policy_viewing_window extends React.Component {
    constructor(props) {

        super(props);
        this.state = {

        }

    }

    render() {

        return (
            <div className="container-fluid">
                <div className="row">

                        <div className="menu">




                            <div className="accordion">

                                <div className="accordion-group">

                                    <div className="accordion-heading area">
                                        <a className="accordion-toggle" data-toggle="collapse" href="#area3">Project</a>
                                    </div>

                                    <div className="accordion-body collapse" id="area3">
                                        <div className="accordion-inner">
                                            <div className="accordion" id="equipamento1">


                                                <div className="accordion-group">
                                                    <div className="accordion-heading equipamento">
                                                        <a className="accordion-toggle" data-toggle="collapse" href="#servico3-1-1">Sample Policies</a>
                                                    </div>

                                                    <div className="accordion-body collapse" id="servico3-1-1">
                                                        <div className="accordion-inner">
                                                            <ul className="nav nav-list">
                                                                <li><a href="#"><i className="icon-chevron-right"></i>Sample Policy 1</a></li>

                                                                <li><a href="#"><i className="icon-chevron-right"></i>Sample Policy 2</a></li>

                                                                <li><a href="#"><i className="icon-chevron-right"></i>Sample Policy 3</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="accordion-group">
                                                    <div className="accordion-heading equipamento">
                                                        <a className="accordion-toggle" data-toggle="collapse" href="#servico3-1-2">Sample Templates</a>
                                                    </div>

                                                    <div className="accordion-body collapse" id="servico3-1-2">
                                                        <div className="accordion-inner">
                                                            <ul className="nav nav-list">
                                                                <li><a href="#"><i className="icon-chevron-right"></i>Sample Template 1</a></li>

                                                                <li><a href="#"><i className="icon-chevron-right"></i>Sample Template 2</a></li>

                                                                <li><a href="#"><i className="icon-chevron-right"></i>Sample Template 3</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


        );
    }
}

export default policy_viewing_window;

