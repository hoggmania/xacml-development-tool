import React from 'react';


class test extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            treeData: [
                {
                    title: 'Parent1',
                    children: [{ title: 'Child1' }, { title: 'Child2' }],
                },
                {
                    title: 'Parent2',
                    children: [{ title: 'Child1' }, { title: 'Child2' }],
                },
            ],
        };
    }

    render() {
        const getNodeKey = ({ treeIndex }) => treeIndex;

        return (
            <div style={{ height: 400 }}>
                <SortableTree
                    treeData={this.state.treeData}
                    onChange={treeData => this.setState({ treeData })}
                    generateNodeProps={({ node, path }) => ({
                        title: !node.needsTitle ? (
                            node.title
                        ) : (
                            <form
                                onSubmit={event => {
                                    event.preventDefault();
                                    const { needsTitle, nodeWithoutNeedsTitle} = node;
                                    this.setState(state => ({
                                        treeData: changeNodeAtPath({
                                            treeData: state.treeData,
                                            path,
                                            getNodeKey,
                                            newNode: nodeWithoutNeedsTitle,
                                        }),
                                    }));
                                }}
                            >
                                <input
                                    autoFocus
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
                            </form>
                        ),
                        buttons: [
                            <button
                                className="btn"
                                id={path.length === 1 ? 'btn_add_parent' : 'btn_add_children'}
                                onClick={() =>
                                    this.setState(state => ({
                                        treeData: addNodeUnderParent({
                                            treeData: state.treeData,
                                            parentKey: path[path.length - 1],
                                            expandParent: false,
                                            getNodeKey,
                                            newNode: {
                                                title: '',
                                                needsTitle: true,
                                            },
                                        }).treeData,
                                    }))}
                            >
                                <img
                                    src="/images/add.png"
                                    alt="my image"
                                    width="15"
                                    height="15"
                                />
                            </button>,
                        ],
                    })}
                />
            </div>
        );
    }
}

export default test;
