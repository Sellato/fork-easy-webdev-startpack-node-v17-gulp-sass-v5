const bs = require('browser-sync');

module.exports = async function bs_html() {
	bs.init({
		server: {
			baseDir: 'build/',
			host: '127.0.0.1',
		},
		callbacks: {
			ready: async function (err, bs) {
				bs.addMiddleware("*", function (req, res) {
					res.writeHead(302, {
						location: "404.html"
					});
					res.end("Redirecting!");
				});
			}
		},
		browser: ['default'], // возможные варианты ['chrome'] ['firefox'] ['opera'] ['google-chrome-stable'] и т.п. или массив ['opera','firefox', 'vivaldi']
		logPrefix: 'BS-HTML:',
		logLevel: 'info',
		logConnections: true,
		logFileChanges: true,
		open: true
	})
}
