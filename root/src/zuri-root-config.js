import { registerApplication, start } from 'single-spa'

registerApplication({
	name: '@zuri/zuri-plugin-deadlines',
	app: () => System.import('@zuri/zuri-plugin-deadlines'),
	activeWhen: ['/'],
})

start({
	urlRerouteOnly: true,
})
