import React from 'react';

class Header extends React.Component {

    render() {
        return (
            <header>
                <h1><img src="/images/WSO2_Software_Logo.png" alt="logo" height={175} width={250}/>
               {this.props.title}</h1>
            </header>
        )
    }

}

export default Header;
