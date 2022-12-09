'use strict';

module.exports = (mode) => ({
  mode,
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            // Compiles Sass to CSS
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sassOptions: {
                quietDeps: true
              },
              sourceMap: true,
              additionalData: `
                @import "./assets/css/_vue-component.scss";
              `
            }
          }
        ]
      },
    ]
  },
});
