const coursesRouter = require('./courses.route');
const newsRouter = require('./news.route');
const siteRouter = require('./site.route');

function routes(app) {
    app.use('/news', newsRouter);
    app.use('/courses', coursesRouter);
    app.use('/', siteRouter);
}

module.exports = routes;
