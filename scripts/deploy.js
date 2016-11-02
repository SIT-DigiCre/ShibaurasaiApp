const ghpages = require("gh-pages");
const paht = require("path");

const GH_TOKEN = process.env.GH_TOKEN;

ghpages.publish(
    path.join(__dirname, '..', 'www'),
    {
        repo: 'https://' + GH_TOKEN + '@github.com/SIT-Digicre/ShibaurasaiApp',
        user: {
            name: "sh4869",
            email: "nobuk4869@gmail.com",
        },
        message: "[ci skip] UPDATEE WEBPAGE"
    },
    function (err) {
        if(err){
            console.log(err);
            process.exit(1);
        } else {
            console.log("Update WebPage");
        }
    }
);