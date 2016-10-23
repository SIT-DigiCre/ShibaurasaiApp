import * as React from "react";
import * as ReactDOM from "react-dom";
import * as injectTapEventPlugin from "react-tap-event-plugin";
import MenuBar from "./components/menu/MenuBar";
import SimpleContent from "./components/SimpleContent";
import EventPage from "./components/event/EventsPage";
import StagePage from "./components/stage/StagePage";
import { Router, Route, hashHistory, IndexRoute } from "react-router";
injectTapEventPlugin();

interface Text {
    content: string;
}

class TestElement extends React.Component<Text, {}> {
    render() {
        return (
            <div className="test">
                <MenuBar appName="Shibaura Fes Navi" />
                {this.props.children || <SimpleContent/>}
            </div>
        );
    }
}
ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={TestElement}>
            <IndexRoute component={SimpleContent}/>
            <Route path="/event" component={EventPage}/>
            <Route path="/stage" component={StagePage}/>
       </Route>
    </Router>
), document.getElementById("app"));