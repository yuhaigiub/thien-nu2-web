const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: {
		main: { import: "./src/index.js", dependOn: "assets" },
		assets: "./src/import_assets.js",
	},
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	plugins: [
		new HTMLWebpackPlugin({
			title: "html-test",
			template: "./index.html",
		}),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery",
		}),
	],
	devServer: {
		static: "./dist",
		port: 3000,
	},
	optimization: {
		runtimeChunk: "single",
	},
	devtool: "inline-source-map",
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /.(png|jpg|jpeg|svg|gif)$/,
				type: "asset/resource",
				generator: {
					filename: "images/[name][ext]",
				},
			},
			{
				test: /\.mp4$/,
				type: "asset/resource",
				generator: {
					filename: "videos/[name][ext]",
				},
			},
		],
	},
};
