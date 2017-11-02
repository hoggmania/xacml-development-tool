import React from 'react';
import Header from './components/Header';
import axios from 'axios';

class entitlement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
        };
    }

    componentDidMount() {
        var th = this;
        this.serverRequest =
            axios.get("https://localhost:9443/api/identity/entitlement/decision/pdp")
                .then(function (result) {
                    console.log(result)
                    th.setState({
                        movies: result.data.movies
                    });
                })
    }


    componentWillUnmount() {
        this.serverRequest.abort();
    }

    render() {
        return (
            <div>
                {this.state.movies.map((dynamicData, key) =>
                    <div>
                        <table>
                            <tr>
                                <th>Title</th>
                                <th>Release Year</th>
                            </tr>
                            <tr>
                                <td>{dynamicData.title}</td>
                                <td>{dynamicData.releaseYear}</td>
                            </tr>
                        </table>
                    </div>
                )}
            </div>
        );
    }
}

export default entitlement;
