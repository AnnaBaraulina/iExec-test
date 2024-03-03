const webpack = require('webpack');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      const fallback = webpackConfig.resolve.fallback || {};
      Object.assign(fallback, {
        "crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify"),
      });
      webpackConfig.resolve.fallback = fallback;


      webpackConfig.plugins.push(
        new webpack.ProvidePlugin({
          process: 'process/browser',
        })
      );

   
      webpackConfig.plugins.push(
        new webpack.NormalModuleReplacementPlugin(/node:crypto/, function(resource) {
          resource.request = resource.request.replace(/^node:/, '');
        })
      );

      return webpackConfig;
    }
  }
};