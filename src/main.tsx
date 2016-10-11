import * as React from "react";
import * as ReactDOM from "react-dom";
import * as injectTapEventPlugin from "react-tap-event-plugin";
import TopLayout from "./components/NaviBar";
injectTapEventPlugin();

interface Text {
    content: string;
}

class TestElement extends React.Component<Text, {}> {
    render() {
        return (
            <div className="test">
                <TopLayout name="メニュー"/>
            </div>
        );
    }
}

ReactDOM.render(<TestElement content="test" />, document.getElementById("app"));