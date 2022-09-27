const express = require('express');
const router = express.Router();
const newsController = require('../resources/app/controllers/news.controller');

//News index
router.use('/', newsController.index);

module.exports = router;
