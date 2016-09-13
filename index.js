var httpServer = require('http-server');

httpServer.createServer().listen(process.env.PORT || 3000);