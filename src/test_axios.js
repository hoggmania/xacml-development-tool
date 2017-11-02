import React from 'react';

class test_axios extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
        };
    }

    componentDidMount() {
        fetch("http://localhost:8090/movies/titles").then((Response) => Response.json()).then((findresponse) => {
                this.setState({
                    movies: findresponse.movies,
                })
            }
        )
    }


    render() {
        return (
            <div className="container">
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

export default test_axios;
