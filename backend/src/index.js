const mongodbLoader = require("./loaders/mongodb");
const app = require('./loaders/express');
const http = require('http');
require("dotenv").config();

process.env.TZ = 'America/Toronto'

const port = normalizePort(process.env.PORT || 3001);

(async function (){
    // Load MongoDB and GridFS
    await mongodbLoader.load();

    try {
        const server = http.createServer(app);
        server.listen(port);
        server.on('error', onError);

        /**
         * Event listener for HTTP server "listening" event.
         */
        server.on('listening', function onListening() {
            const addr = server.address();
            const bind = typeof addr === 'string'
              ? 'pipe ' + addr
              : 'port ' + addr.port;
            console.log('Listening on ' + bind);
        });


    } catch (e) {
        onError(e);
    }

})();

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}


function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}
