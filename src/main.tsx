import * as React from "react";
import * as ReactDOM from "react-dom";

interface Text {
    content: string;
}
class  TestElement extends React.Component<Text, {}> {
    render() {
        return  (
            <div className="test">
                Hello,World!
            </div>
        );
    }
}

ReactDOM.render(<TestElement content="test"/>, document.getElementById("app"));