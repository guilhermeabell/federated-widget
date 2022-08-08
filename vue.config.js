const { defineConfig } = require("@vue/cli-service");
const {container:{ModuleFederationPlugin}} = require('webpack')

module.exports = defineConfig({
    publicPath:'http://localhost:8080/',
    transpileDependencies: true,
    configureWebpack:{
    optimization:{
        splitChunks:false,
    },
    plugins:[
        new ModuleFederationPlugin({
            name:'widgetFeedback',
            filename:'remoteEntry.js',
            exposes:{
                './Widget':'./src/components/widget/index.vue',
            },
            remotes:{},
            shared:{
                ...require('./package.json').dependencies
            },
        })
    ]
  }
});
