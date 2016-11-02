import * as React from "react";
import LinearProgress from "material-ui/LinearProgress";

const style = {
    conntent: {
        marginRight: "auto",
        marginLeft: "auto",
        marginTop: 0,
        marginBottom: 0
    }
}
const LoadingPage:React.SFC<any> = (props) => {
    return (
        <div style={style.conntent}>
            <p>Now Loading……</p>
        </div>
    );
};

export default LoadingPage;