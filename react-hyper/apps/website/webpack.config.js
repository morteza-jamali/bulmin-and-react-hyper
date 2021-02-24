const { resolve } = require('path');

module.exports = (config) => {
  config.module.rules.push({
    test: /\.md$/,
    use: [
      {
        loader: 'html-loader',
      },
      {
        loader: 'markdown-loader',
      },
    ],
  });

  config.module.rules.forEach((rule, index) => {
    if (String(rule.test) === String(/\.([jt])sx?$/)) {
      config.module.rules[index] = {
        test: /\.([jt])sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'webpack-atomizer-loader',
            options: {
              configPath: resolve(__dirname, 'atomizer.config.js'),
            },
          },
          {
            loader: rule.loader,
            options: rule.options,
          },
        ],
      };
    }
  });

  return config;
};
