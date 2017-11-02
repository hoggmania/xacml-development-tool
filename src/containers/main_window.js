import React from 'react';
import Header from '../components/Header';
import Sortable_tree from './sortable_tree';
import Policy_window from '../policy_window';
import Policy_management_window from '../policy_management_window';
import Policy_viewing_window from '../policy_viewing_window';


class main_window extends React.Component {


    render() {

        return (


            <div>
                <Header title="XACML DEVELOPMENT TOOL"/>

                <div className="container-fluid">
                    <br/>
                    <div className="row">

                            <Sortable_tree/>


                    </div>
                </div>
            </div>
        );
    }
}

export default main_window;

