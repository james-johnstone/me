var path                        = require('path');

module.exports = function (app) {
    //====================================================================
    // PARTIALS ROUTE
    //====================================================================
    app.get('/partials/*', function (req, res) {
        //res.render(path.normalize(req.url));
        res.render('partials/' + req.params[0]);
    });

    //====================================================================
    // DEFAULT ROUTES
    //====================================================================
    app.all('/api/*', function (req, res) {
        res.send(404);
    });

    app.get('*', function (req, res) {
        res.render('index');
    });
}
