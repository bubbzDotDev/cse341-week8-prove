const express = require('express');

const controller = require('../controllers/professional');

const router = express.Router();

router.get('/professional', controller.getProfessional);

module.exports = router;