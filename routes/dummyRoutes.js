const express = require('express');
const router = express.Router();
const dummyController = require('../controllers/dummyController');

router.post('/post', dummyController.dummyPost);

router.get('/user/get', dummyController.userGet);
router.get('/package/get', dummyController.packageGet);
router.get('/history/get', dummyController.historyGet);

module.exports = router;