import React from 'react';

class pre_policies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div id="previous_policy_window">
                <ul>
                    <li><a href="#">authn_role_based_policy</a></li>
                    <li><a href="#">authn_scope_based_policy</a></li>
                    <li><a href="#">authn_time_and_role_based_policy</a></li>
                </ul>
            </div>
        );
    }
}

export default pre_policies;
