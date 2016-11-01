const fs = require('fs-extra');

console.log("------------------------------------------")
/* JSON Copy */
fs.copy('src/data', 'www/src/data/', (err) => {
    if (err) {
        console.log(err);
        process.exit(1);
    };
    console.log("Success to copy json!");
});