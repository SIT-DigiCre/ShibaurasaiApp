import * as React from "react";

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
                <h2>その他</h2>
            </div>
        </div>
    );
};

export default AboutPage;