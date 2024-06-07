/** @type {import('next').NextConfig} */

const webpack = require('webpack');
const DFXWebPackConfig = require('./dfx.webpack.config');
const canisterEnvVariables = DFXWebPackConfig.canisterEnvVariables;
const internetIdentityUrl = DFXWebPackConfig.internetIdentityUrl;

const EnvPlugin = new webpack.EnvironmentPlugin({
  NODE_ENV: 'development',
  II_URL: internetIdentityUrl,
  ...canisterEnvVariables,
});

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: { unoptimized: true },
  reactStrictMode: true,
  swcMinify: true,
  

  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg')
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: { not: /\.(css|scss|sass)$/ },
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        loader: '@svgr/webpack',
        options: {
          dimensions: false,
          titleProp: true,
        },
      }
    );
    
    // Plugin
    config.plugins.push(EnvPlugin);

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;
    return config;
  },
  output: 'export',
};

module.exports = nextConfig;
