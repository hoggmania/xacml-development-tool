import React, { Component } from 'react';


var ContentEditable = require("react-contenteditable");
var Sample_policy_1 = React.createClass({
    getInitialState: function(){
        return {html: "&lt;policy_set&gt; Authorization <i>Policy</i>&lt;/policy_set&gt;<br/>" +
        "&lt;Policy&gt; Policy <i>1</i>&lt;/Policy&gt;<br/>" +
        "&lt;Description&gt; Policy <i>1</i>&lt;/Description&gt;<br/>" +
        "&lt;Target&gt; Policy <i>1</i>&lt;/Target&gt;<br/>" +
        "&lt;policy&gt; Policy <i>1</i>&lt;/policy&gt;<br/>" +
        "&lt;policy&gt; Policy <i>1</i>&lt;/policy&gt;<br/>" +
        "&lt;policy&gt; Policy <i>1</i>&lt;/policy&gt;<br/>"};
    },

    handleChange: function(evt){
        this.setState({html: evt.target.value});
    },

    render: function(){


        return <div id="policy_template_window"><ContentEditable
            html={this.state.html} // innerHTML of the editable div
            disabled={false}       // use true to disable edition
            onChange={this.handleChange} // handle innerHTML change
        />
        </div>
    }
});
export default Sample_policy_1;
