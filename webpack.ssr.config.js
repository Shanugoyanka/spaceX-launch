const HtmlWebpackPlugin = require("html-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const BrotliPlugin = require("brotli-webpack-plugin"); //brotli
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const config = require("react-ssr-scripts/config/webpack/index");

config.entry = "./src/index.js";

// config.output.filename = "static/ssr/[name].js";
// config.output.libraryTarget = "commonjs2";
// delete config.output.chunkFilename;

config.target = "node";
config.externals = /^[a-z\-0-9]+$/;
delete config.devtool;

config.plugins = [
  HtmlWebpackPlugin,
  ManifestPlugin,
  SWPrecacheWebpackPlugin,
  new CompressionPlugin({
    filename: "[path].gz[query]",
    algorithm: "gzip",
    test: /\.(js|css|html|svg)$/,
    threshold: 8192,
    minRatio: 0.8,
  }),
  new BrotliPlugin({
    //brotli plugin
    asset: "[path].br[query]",
    test: /\.(js|css|html|svg)$/,
    threshold: 10240,
    minRatio: 0.8,
  }),
  new BundleAnalyzerPlugin(),
];
module.exports = config;
