import React from 'react';
import Sortabletree from './sortable_tree';

class main_window extends React.Component {


    render() {
        return (
            <div>
                <div className="container-fluid">
                    <br/>
                    <div className="row">
                            <Sortabletree/>
                    </div>
                </div>
            </div>
        );
    }
}

export default main_window;

