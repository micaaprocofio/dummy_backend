const express = require('express');
const router = express.Router();
const dummyController = require('../controllers/dummyController');

router.get('/user/get', dummyController.userGet);
router.get('/package/get', dummyController.packageGet);
router.get('/history/get', dummyController.historyGet);

router.post('/package/add', dummyController.addPackage);
router.put('/package/mod', dummyController.modifyPackage);
router.delete('/package/delete', dummyController.deletePackage);
router.put('/user/mod', dummyController.modifyUser);
router.get('/user/filter', dummyController.getUserByMemberNumber);

module.exports = router;


