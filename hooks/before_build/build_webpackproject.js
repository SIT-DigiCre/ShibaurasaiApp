#!/usr/bin/env node
const exec = require("child_process").execSync;
module.exports = function(context){
    const result = exec("npm run build");
    return result;
};