import React from 'react';
import axios from 'axios';
import {stringify} from "json5";
class rest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Result: [],
        };
    }
    componentDidMount() {
        let headers = {
                'Authorization': 'Basic YWRtaW46YWRtaW4=',
                'Content-Type':'application/json',
                'Accept':'apnpplication/json'
        };

        let body=
            {
                Request: {
                    Action: {
                        Attribute: [
                            {
                                AttributeId: 'urn:oasis:names:tc:xacml:1.0:action:action-id',
                                Value: 'read'
                            }
                        ]
                    },
                    Resource: {
                        Attribute: [
                            {
                                AttributeId: 'urn:oasis:names:tc:xacml:1.0:resource:resource-id',
                                Value: 'http://127.0.0.1/service/very_secure/'
                            }
                        ]
                    }
                }
            };
        //axios.defaults.headers.common['Access-Control-Allow-Methods']='POST';
        // axios.defaults.headers.common['Access-Control-Allow-Headers']='Authorization, Content-Type,Accept,Auth_Type';
        //axios.defaults.headers.common['Auth_Type']='Basic Auth';
      /*  axios.defaults.headers.post['Content-Type']='application/json';
        axios.defaults.headers.post['Accept']='apnpplication/json';
        axios.defaults.headers.post['Authorization']='Basic YWRtaW46YWRtaW4=';*/
        //this.serverRequest =
        // let promise =    axios.post("https://localhost:9443/api/identity/entitlement/decision/pdp", JSON.stringify(body),headers);
        // debugger;
        //         promise.then(((response) => {
        //             //debugger;
        //             console.log(response);
        //             this.setState({
        //                 Result: response.data.Result
        //             });
        //         })
        //         .catch((error) =>{
        //             //debugger;
        //             console.log(error);
        //         })

        this.serverRequest =
            axios.post("https://localhost:9443/api/identity/entitlement/decision/pdp/", JSON.stringify(body), headers)
                    .then((response) => {
                        console.log(response);
                        this.setState({
                            Result: response.data.Result
                        });
                    })
                    .catch((error) => {
                        console.log(error);
                    })

    }
    componentWillUnmount() {
        this.serverRequest.abort();
    }
    render() {
        return (
            <div>
                <p> {this.state.Result}</p>
            </div>
        );
    }
}
export default rest;
