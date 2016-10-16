import * as React from "react";
import * as ReactDOM from "react-dom";
import * as injectTapEventPlugin from "react-tap-event-plugin";
import NaviBar from "./components/NaviBar";
import SimpleContent from "./components/SimpleContent";
import TestContent from "./components/TestContent";
import { Router, Route, hashHistory, IndexRoute } from "react-router";
injectTapEventPlugin();

interface Text {
    content: string;
}

class TestElement extends React.Component<Text, {}> {
    render() {
        return (
            <div className="test">
                <NaviBar appName="Shibaura Fes Navi" />
                {this.props.children || <SimpleContent/>}
            </div>
        );
    }
}
ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={TestElement}>
            <IndexRoute component={SimpleContent}/>
            <Route path="/test" component={TestContent}/>
       </Route>
    </Router>
), document.getElementById("app"));