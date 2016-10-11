import "!style-loader!css-loader!react-mdl/extra/material.css";
import "react-mdl/extra/material.js";
import { Button, Drawer, Navigation, Layout } from "react-mdl";
import * as React from "react";
import * as ReactDOM from "react-dom";

interface Text {
    content: string;
}
class TestElement extends React.Component<Text, {}> {
    render() {
        return (
            <div className="test">
                Hello,World!
                <Layout>
                    <Drawer title="Title">
                        <Navigation>
                            <a href="">Link</a>
                            <a href="">Link</a>
                            <a href="">Link</a>
                        </Navigation>
                    </Drawer>
                </Layout>
            </div>
        );
    }
}

ReactDOM.render(<TestElement content="test" />, document.getElementById("app"));