import * as React from "react";
import * as ReactDOM from "react-dom";
import * as injectTapEventPlugin from "react-tap-event-plugin";
import NaviBar from "./components/NaviBar";
import SimpleContent from "./components/SimpleContent";
injectTapEventPlugin();

interface Text {
    content: string;
}

class TestElement extends React.Component<Text, {}> {
    render() {
        return (
            <div className="test">
                <NaviBar appName="Shibaura Fes Navi"/>
                <SimpleContent/>
            </div>
        );
    }
}

ReactDOM.render(<TestElement content="test" />, document.getElementById("app"));