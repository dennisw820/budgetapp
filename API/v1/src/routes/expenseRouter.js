const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router
    .get()
    .post('/expense', controller.createData)
    .put()
    .patch()
    .delete()

module.exports = router;