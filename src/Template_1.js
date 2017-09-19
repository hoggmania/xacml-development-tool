import React from 'react';
import ReactMustache from 'react-mustache';

class Template_1 extends React.Component {
    constructor(props) {

        super(props);
        this.state = {

        }

    }


    render() {


        return (



        <ReactMustache template="<b><td>{{=<% %>=}}<<% start.lat %>,Policy <% start.lon %>><%={{ }}=%></td>Welcome {{title}}</b>" data={{title: 'Mr. Gregory'}} />

        );
    }
    }

    export default Template_1;
