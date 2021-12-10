const bs = require('browser-sync');

module.exports = function bs_php() {
	bs.init({
		browser: ['default'], // возможные варианты ['chrome'] ['firefox'] ['opera'] ['google-chrome-stable'] или массив ['opera','firefox', 'vivaldi']
		watch: true,
		proxy: '',
		logLevel: 'info',
		logPrefix: 'BS-PHP:',
		logConnections: true,
		logFileChanges: true,
	})
}