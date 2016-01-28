var connect = require('connect');
var serveStatic = require('serve-static');

connect()
	.use(serveStatic(__dirname))
	.listen(9000);

console.log('Listening on port 9000.');