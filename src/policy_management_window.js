import React from 'react';

class policy_management_window extends React.Component {
    constructor(props) {

        super(props);
        this.state = {

            treeData: [{title: 'User', children: [{title: 'Name'}, {title: 'Tenant'}]},
                {title: 'Environment', children: [{title: 'IP'}, {title: 'Time'}]}],
            value: "select",
            tabIndex: 0,
        }
        this.change = this.change.bind(this);
    }

    change(event) {
        this.setState({value: event.target.value});
    }

    render() {
        const getNodeKey = ({treeIndex}) => treeIndex;
        const maxDepth = 2;


        return (
            <div>
                <form>
                    <fieldset className="field_set_1">
                        <legend>Request</legend>

                        <fieldset className="field_set_2">
                            <legend>XML
                                <br/><br/><br/><br/><br/></legend>

                        </fieldset>
                        <br/><br/><br/>


                    </fieldset>
                </form>
            </div>


        );
    }
}

export default policy_management_window;

