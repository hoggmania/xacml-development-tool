import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <ul className="nav navbar-nav navbar-left">
                            <li><a className="navbar-brand pull-left" href="#">
                                {this.props.title}</a></li>
                            <li><a href="#">File</a></li>
                            <li><a href="#">Edit</a></li>
                            <li><a href="#">Help</a></li>
                            <li><a href="#">Run</a></li>
                        </ul>

                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                        </ul>
                    </div>

                    <ul className="nav navbar-nav navbar-left">
                        <li><a href="#"><span className="fw fw-blank-document"></span></a></li>
                        <li><a href="#"><span className="fw fw-file-browse"></span></a></li>
                        <li><a href="#"><span className="fw fw-undo"></span></a></li>
                        <li><a href="#"><span className="fw fw-redo"></span></a></li>
                        <li><a href="#"><span className="fw fw-start"></span></a></li>
                        <li><a href="#"><span className="fw fw-publish"></span></a></li>
                        <li><a href="#"><span className="fw fw-bug"></span></a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}
export default Header;
