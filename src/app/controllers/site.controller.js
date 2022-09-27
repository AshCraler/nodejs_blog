const Course = require('../models/course.model');
const { multipleModelToObjects } = require('../../utils/mongoose.util');

class SiteController {
    //[GET] /
    index(req, res, next) {
        Course.find({})
            .then((courses) =>
                res.render('home', {
                    courses: multipleModelToObjects(courses),
                }),
            )
            .catch(next);
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
