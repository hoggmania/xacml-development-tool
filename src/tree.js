import React, { Component } from 'react';
import SortableTree from 'react-sortable-tree';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            treeData1: [
                { title: 'User', children: [{ title: 'Name' }] },
                { title: 'Environment' },
            ],
            treeData2: [{ title: 'Add a category' }],
            shouldCopyOnOutsideDrop: true,
        };
    }

    render() {
        // Both trees need to share this same node type in their
        // `dndType` prop
        const externalNodeType = 'yourNodeType';
        const { shouldCopyOnOutsideDrop } = this.state;
        return (
            <div>
                <div id="tree1"
                    style={{
                        height: 350,
                        width: 350,
                        float: 'left',
                        border: 'solid black 1px',
                    }}
                >
                    <SortableTree id="stree1"
                        treeData={this.state.treeData1}
                        onChange={treeData1 => this.setState({ treeData1 })}
                        dndType={externalNodeType}
                        shouldCopyOnOutsideDrop={shouldCopyOnOutsideDrop}
                                  generateNodeProps={({ node, path }) => ({
                                      title: (
                                          <input
                                              style={{ fontSize: '1.1rem' }}
                                              value={node.title}
                                              onChange={event => {
                                                  const title = event.target.value;

                                                  this.setState(state => ({
                                                      treeData: changeNodeAtPath({
                                                          treeData: state.treeData,
                                                          path,
                                                          getNodeKey,
                                                          newNode: { node, title },
                                                      }),
                                                  }));
                                              }}
                                          />
                                      ),
                                  })}
                    />
                </div>

                <div id="tree2"
                    style={{
                        height: 350,
                        width: 350,
                        float: 'left',
                        border: 'solid black 1px',

                    }}
                >
                    <SortableTree
                        treeData={this.state.treeData2}
                        onChange={treeData2 => this.setState({ treeData2 })}
                        dndType={externalNodeType}
                        shouldCopyOnOutsideDrop={shouldCopyOnOutsideDrop}


                    />

                </div>

                <div style={{ clear: 'both' }} />


            </div>


        );
    }
}

export default App;
