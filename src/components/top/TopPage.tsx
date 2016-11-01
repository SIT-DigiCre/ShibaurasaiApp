import * as React from "react";
import Paper from "material-ui/Paper";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Link } from "react-router";
const menus = [
    ["Event", "展示発表や体験企画，屋台などを紹介しています。", "/event"],
    ["Stage", "大講義企画やステージ企画を紹介しています。", "/stage"],
    ["Search", "展示発表や体験企画を検索出来ます。", "/search"],
    ["Map", "地図上から建物ごとのイベントを確認できます。", "/map"],
    ["About", "このアプリケーションについてです。一番はじめにお読みください。", "/about"]
];
const style = {
    paper: {
        padding: 5,
        paddingLeft: 20,
    },
    link_style: {
        textDecoration: "none",
        color: "black",
    },
};

const TopPage: React.SFC<{}> = () => {
    return (
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <div>
                {menus.map((menu) => {
                    return (
                        <Link to={menu[2]} style={style.link_style}>
                            <Paper zDepth={1} style={style.paper} key={menu[0]}>
                                <h2>{menu[0]}</h2>
                                {menu[1]}
                            </Paper>
                        </Link>
                    );
                })}
            </div>
        </MuiThemeProvider>
    );
};
export default TopPage;
