const router = require('express').Router();
const userController = require('../controllers/user.controller');

router.put("/changepassword",userController.changePassword);
router.put("/update",userController.updateUser);
router.get("/",userController.getUser);

module.exports = router;