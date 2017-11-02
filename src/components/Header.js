import React from 'react';

class Header extends React.Component {

    render() {
        return (
            <header>


                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">

                            <a className="navbar-brand" href="#"><h3><img src="/images/WSO2_Software_Logo.png" alt="logo" height={40} width={80}/>
                                {this.props.title}</h3></a>

                        <ul className="nav navbar-nav">

                            <li className="dropdown active">
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#">File
                                    <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">New</a></li>
                                    <li><a href="#">Open</a></li>
                                    <li><a href="#">Open Recent</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Edit</a></li>
                            <li><a href="#">Help</a></li>
                            <li><a href="#">Run</a></li>
                        </ul>

                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                        </ul>

                    </div>
                </nav>


                <nav className="navbar navbar-inverse">
                        <ul className="nav navbar-nav navbar-left">
                            <i className="fw fw-blank-document"></i>&nbsp;&nbsp;
                            <i className="fw fw-file-browse"></i>&nbsp;&nbsp;
                            <i className="fw fw-undo"></i>&nbsp;&nbsp;
                            <i className="fw fw-redo"></i>&nbsp;&nbsp;
                            <i className="fw fw-start"></i>&nbsp;&nbsp;
                            <i className="fw fw-publish"></i>&nbsp;&nbsp;
                            <i className="fw fw-bug"></i>&nbsp;&nbsp;
                       </ul>
                </nav>
                
            </header>
        )
    }

}

export default Header;
