var express         = require('express')
    morgan          = require('morgan');

module.exports = function (app, config) {
    app.set('views', config.rootPath + '/server/views');
    app.set('view engine', 'jade');
    app.use(morgan('dev'));
    app.use(express.static(config.rootPath + 'public'));
}
