const Course = require('../models/course.model');
const { modelToObject } = require('../../utils/mongoose.util');

class CoursesController {
    //[GET] /courses
    show(req, res, next) {
        Course.findOne({
            slug: req.params.slug,
        })
            .then((course) =>
                res.render('courses/show', {
                    course: modelToObject(course),
                }),
            )
            .catch(next);
    }

    //[GET] /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }

    //[POST] /courses/store
    store(req, res, next) {
        var formData = req.body;
        formData.image = `https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        course.save();

        res.send('Saved');
    }
}

module.exports = new CoursesController();
