var nested = require('postcss-nested');
var postCSSModulesValues = require('postcss-modules-values');
var autoprefixer = require('autoprefixer');

module.exports = {
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style?sourceMap!css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!postcss'
    }, {
      test: /\.eot.*$/,
      loader: 'url'
    }, {
      test: /\.ttf.*$/,
      loader: 'url'
    }, {
      test: /\.woff.*$/,
      loader: 'url'
    }, {
      test: /\.svg.*$/,
      loader: 'url'
    }]
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '', '.css'],
    modulesDirectories: ['node_modules']
  },
  postcss: [
      nested,
      postCSSModulesValues,
      require('postcss-partial-import'),
      autoprefixer({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9' // React doesn't support IE8 anyway
        ]
      }),
    ]
}
