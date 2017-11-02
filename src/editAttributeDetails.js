import React from 'react';
import SortableTree, {addNodeUnderParent, removeNodeAtPath, changeNodeAtPath} from 'react-sortable-tree';
import SkyLight from 'react-skylight';

class editAttributeDetails extends React.Component {
    constructor(props) {

        super(props);
        this.state = {


        }

    }


    render() {
return(




    <SkyLight hideOnOverlayClicked ref="editAttributeDetails"
              title="Configure Attribute Details" id="edit_attribute_details_popup">







<form className="form-actions form-horizontal center_div">
    <div className="form-group">
        <label className="control-label col-sm-6" for="name">Name:</label>
        <div className="col-sm-6 ">
            <input type="name" className="form-control" id="name"
                   placeholder="Enter Attribute Name"/>
        </div>
    </div>
    <div className="form-group">
        <label className="control-label col-sm-6" for="pwd">URI:</label>
        <div className="col-sm-6">
            <input type="URI" className="form-control" id="URI"
                   placeholder="Enter URI"/>
        </div>
    </div>
    <div className="form-group">
        <label className="control-label col-sm-6" for="email">Display Name:</label>
        <div className="col-sm-6">
            <input type="Display Name" className="form-control" id="Display Name"
                   placeholder="Enter Display Name"/>
        </div>
    </div>
    <div className="form-group">
        <label className="control-label col-sm-6" for="display_name">Scope:</label>
        <div className="col-sm-2">
            <button className="btn btn-default dropdown-toggle" type="button"
                    data-toggle="dropdown">Select Scope
            </button>
            <ul className="dropdown-menu">
                <li><a href="#">Global (All tenants)</a></li>
                <li><a href="#">Global (Current tenant)</a></li>
                <li><a href="#">Template</a></li>
            </ul>
        </div>
    </div>
    <br/>
    <br/>

    <div className="form-group">
        <div className="col-sm-6">
            <button type="submit" className="btn btn-primary">Submit</button>
        </div>
    </div>
</form>
    </SkyLight>

);
    }
}

export default editAttributeDetails;
