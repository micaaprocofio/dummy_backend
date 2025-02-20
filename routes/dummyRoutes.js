const express = require('express');
const router = express.Router();
const dummyController = require('../controllers/dummyController');

router.post('/post', dummyController.dummyPost);
router.get('/get', dummyController.dummyGet);

module.exports = router;