const express = require('express');
const router = express.Router();
//middleware
const auth = require('../middleware/auth');

const validate = require('../middleware/validateUser');
const { validateCreate,validateLogin } = require('../validator/UserValidator');
//controller
const DirectorController = require('../controllers/Director_controller');


router.put('/api/v1/directorUpdate/:id', DirectorController.updateDirector);
//router.delete('/api/users/delete/:id',auth.validateToken,validate.isAdmin,UserController.deleteUser);
module.exports = router;