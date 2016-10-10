import "!style-loader!css-loader!react-mdl/extra/material.css";
import "react-mdl/extra/material.js";
import {Button} from "react-mdl";
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
                <Button>いろいろ</Button>
            </div>
        );
    }
}

ReactDOM.render(<TestElement content="test"/>, document.getElementById("app"));