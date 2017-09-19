import React from 'react';
import Header from './Header';
import Sortable_tree from './sortable_tree';
import Policy_window from './policy_window';
import Policy_management_window from './policy_management_window';
import Policy_viewing_window from './policy_viewing_window';


class main_window extends React.Component {


    render() {

        return (


            <div>
                <Header title="XACML DEVELOPMENT TOOL"/>

                <div className="container-fluid">
                <br/>
                    <div className="row">
                        <div className="col-lg-8">
                            <Sortable_tree/>
                        </div>
                        <div className="col-lg-4 col">

                            <div class="modal-body row"><center><h3>Policy Viewing</h3></center>
                                <div class="col-md-6">
                                    <Policy_viewing_window/>
                                </div>
                                <div class="col-md-6"><center><h3>Policy Management</h3></center>
                                    <Policy_management_window/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default main_window;

