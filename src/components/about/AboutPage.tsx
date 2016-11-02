import * as React from "react";
import { List, ListItem } from "material-ui/List";
import RestaurantMenuIcon from "material-ui/svg-icons/maps/restaurant-menu";
import CakeIcon from "material-ui/svg-icons/social/cake";
import RemoveRedEyeIcon from "material-ui/svg-icons/image/remove-red-eye";
import SlideShowIcon from "material-ui/svg-icons/image/slideshow";
import AccessibilityIcon from "material-ui/svg-icons/action/accessibility";
import FaceIcon from "material-ui/svg-icons/action/face";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const style = {
    content: {
        marginLeft: "2em"
    },
    text: {
        textIndent: "0.5em",
        link: {
            textDecoration: "none",
            color: "#33b500",
            fontWeight: 600
        }
    }
};

const AboutPage: React.SFC<{}> = (props) => {
    return (
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <div>
                <h1>Shibaura Fes Naviについて</h1>
                <div style={style.content}>
                    <h2>注意事項</h2>
                    <ul>
                        <li>
                            このアプリケーションは芝浦祭の <b>非公式</b>のアプリケーションです。このアプリケーションに関する問い合わせは芝浦祭実行委員会ではなく，下記の連絡先へお願いします．また，予告なく公開を停止する場合があります．予めご了承ください．
                </li>
                        <li>
                            このソフトウェアは開発中のものです．画面，機能，デザインなどは予告変更される可能性があります．
                </li>
                    </ul>
                    <h2>バグ報告のお願い</h2>
                    <div style={style.text}>
                        このアプリケーションに関する不具合，要望などがございましたら，
                    <a href="mail:nobuk4869@gmail.com" style={style.text.link}>メール</a>などで報告していただけると助かります．
                </div>
                    <div style={style.text}>
                        また，Twitterでハッシュタグ
                    <a href="https://twitter.com/hashtag/shibaurafesnavi?f=tweets&vertical=default&src=hash" style={style.text.link}> #shibaurafesnavi </a>をつけて要望をつけて呟いていただく形でも大変助かります．
                </div>
                    <h2>開発者について</h2>
                    <ul>
                        <li>企画考案者 : MiniDragonEgg</li>
                        <li>開発者 : Yoshiki Imaizumi</li>
                        <li>開発者 : Nobuhiro Kasai  <a href="http://sh4869.net" style={style.text.link}>WebSite</a></li>
                        <li>団体 : デジクリ <a href="http://www.digicre.net/" style={style.text.link}>WebSite</a></li>
                    </ul>
                    <h2>イベント種類</h2>
                    <List>
                        <ListItem leftIcon={<AccessibilityIcon />} disabled={true}>
                            <b>  体験系 </b>: 来場者が実際に体験して楽しめる企画です。
                        </ListItem>
                        <ListItem leftIcon={<RemoveRedEyeIcon />} disabled={true}>
                            <b>  展示発表(展示) </b>: 成果物などの展示を中心とした企画です。
                        </ListItem>
                        <ListItem leftIcon={<SlideShowIcon />} disabled={true}>
                            <b>   展示発表(発表) </b>: 実演などの発表を中心とした企画です。
                        </ListItem>
                        <ListItem leftIcon={<RestaurantMenuIcon />} disabled={true}>
                            <b>   食事 </b>: 昼食に適する食品を販売しています。
                        </ListItem>
                        <ListItem leftIcon={<CakeIcon />} disabled={true}>
                            <b>  スイーツ </b> :おやつやデザートを販売しています。
                        </ListItem>
                        <ListItem leftIcon={<FaceIcon />} disabled={true}>
                            <b> その他 </b>:上記のいずれにも含まれない、もしくは複合型の企画です。
                        </ListItem>
                    </List>
                </div>
            </div>
        </MuiThemeProvider>
    );
};

export default AboutPage;