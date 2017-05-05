/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-04-27 17:35:12
 * @version $Id$
 */
console.log(111)
module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: __dirname+'/app/main.js',
    output:{
        path: __dirname+'/public/',
        filename: "bundle.js"
    },
    devServer:{
        host: 'localhost',
        port: 8082,
        // hot: true,
        contentBase:'./public/',
        // colors: true
        historyApiFallback: true,
        inline: true
    },
    module:{
        loaders:[
            {
                test:/\.json$/,
                loader:"json"
            },
            {
                test:/\.js$/,
                exclude: /node-modules/,
                
            }
        ]
    }
}