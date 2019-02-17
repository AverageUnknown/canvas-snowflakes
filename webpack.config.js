const webpack = require("webpack");
const path = require("path");
const htmlwebpack = require("html-webpack-plugin");
const uglify = require("uglifyjs-webpack-plugin");
module.exports = {
    "entry": {
        "index": "./src/index.js"
    },
    "output": {
        "path": path.resolve(__dirname,"out"),
        "filename": "./bundle-[hash].js"
    },
    "devtool": "source-map",
    "watch": false,
    "plugins": [
        new uglify({"sourceMap": true}),
        new htmlwebpack({"template": "./src/index.html"})
    ]
};
