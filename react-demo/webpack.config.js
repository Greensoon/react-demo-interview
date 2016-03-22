/**
 * Created by lizilin on 16/3/22.
 */
var webpack = require('webpack');

var path = require("path");
var srcPath = path.join(__dirname,"src");

module.exports={
    entry : path.join(srcPath,"entry.js"),
    output : {
        filename : "bundle.min.js",
        path     : "./build"
    },
    module : {
        loaders :[
            {test : /\.js?$/,exclude:/node_modules/,loader:"babel"},
            {
                test : /\.less/,loader : "style!css!less"
            }
        ]
    },

    devServer : {
        port : "3000",
        contentBase : "./build"
    }
}