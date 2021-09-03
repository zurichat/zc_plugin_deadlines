const TARGETS_NODE = '12.13.0'
const CORE_JS_VERSION = '3.6'

module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				targets: { node: TARGETS_NODE },
				useBuiltIns: 'usage',
				corejs: {
					version: CORE_JS_VERSION,
					proposals: true,
				},
			},
		],
	],
	plugins: [
		[
			'babel-plugin-module-resolver',
			{
				alias: {
					'@modules': './src/modules',
					'@utils': './src/utils',
					'@shared': './src/shared',
					'@config': './src/config',
					'@validations': './src/validations',
					'@controllers': './src/controllers',
					'@models': './src/models',
					'@routes': './src/routes',
					'@types': './src/types',
					'@sockets': './src/sockets',
				},
			},
		],
		['@babel/plugin-proposal-class-properties'],
		[
			'@babel/plugin-transform-runtime',
			{
				corejs: { version: 3, proposals: true },
				version: '^7.8.3',
			},
		],
		['@babel/plugin-proposal-private-methods'],
		['@babel/plugin-proposal-private-property-in-object'],
	],
}
