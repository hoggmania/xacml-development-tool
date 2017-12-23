import React from 'react'
import Mainwindow from './containers/main_window';
import WelcomeWindow from './containers/welcome_window';
import Header from './components/Header';
import Tabs, {TabPane} from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

let index = 0;

class MainTabWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: [{
                title: 'Welcome',
                content: <WelcomeWindow/>,
            }],
            activeKey: 'Welcome',
        };
        this.onTabChange = this.onTabChange.bind(this)
        this.construct = this.construct.bind(this)
        this.remove = this.remove.bind(this)
        this.add = this.add.bind(this)
    }

    onTabChange(activeKey) {
        this.setState({activeKey});
    }

    construct() {
        const disabled = true;
        return this.state.tabs.map((t) => {
            return (<TabPane
                tab={<span>{t.title}
                    <a
                        style={{
                            position: 'relative',
                            cursor: 'pointer',
                            color: 'black',
                            right: 0,
                            top: -5,
                        }}
                        onClick={this.remove.bind(this, t.title)}
                    >x</a>
      </span>}
                key={t.title}
            >
                <div style={{padding: 0}}>
                    {t.content}
                </div>
            </TabPane>);
        }).concat([
            <TabPane
                tab={<a style={{color: 'black', cursor: 'pointer'}} onClick={this.add}> + New Policy</a>}
                disabled={disabled}
                key={'__add'}
            />,
        ]);
    }


    remove(title, e) {
        e.stopPropagation();
        if (this.state.tabs.length === 1) {
            alert('只剩一个，不能删');
            return;
        }
        let foundIndex = 0;
        const after = this.state.tabs.filter((t, i) => {
            if (t.title !== title) {
                return true;
            }
            foundIndex = i;
            return false;
        });
        let activeKey = this.state.activeKey;
        if (activeKey === title) {
            if (foundIndex) {
                foundIndex--;
            }
            activeKey = after[foundIndex].title;
        }
        this.setState({
            tabs: after,
            activeKey,
        });
    }

    add(e) {
        e.stopPropagation();
        index++;
        const newTab = {
            title: `Policy: ${index}`,
            content: <Mainwindow/>,
        };
        this.setState({
            tabs: this.state.tabs.concat(newTab),
            activeKey: `Policy: ${index}`,
        });
    }

    render() {
        const tabStyle = {
            width: 1800,
        };

        return (
            <div style={{margin: 20}}>
                <div className="row no-gutters">
                    <div className="col-lg-0.5 verticalLine">
                    </div>
                </div>

                <Header title="XACML DEVELOPMENT TOOL"/>

                <div style={tabStyle}>
                    <Tabs
                        renderTabBar={() => (
                            <ScrollableInkTabBar
                                extraContent={
                                    <button id="create_new_policy_button" type="button" className="btn btn-warning"
                                            onClick={this.add}><i
                                        className="fw fw-policy fw-2x"></i>&nbsp;&nbsp;Create New Policy
                                    </button>
                                }
                            />
                        )}
                        renderTabContent={() => <TabContent/>}
                        activeKey={this.state.activeKey}
                        onChange={this.onTabChange}
                    >
                        {this.construct()}
                    </Tabs>
                </div>
            </div>
        )
    }
}

export default MainTabWindow;


