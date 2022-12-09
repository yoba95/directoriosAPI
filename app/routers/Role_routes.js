const express = require('express');
const router = express.Router();
//middleware
const auth = require('../middleware/auth');
const validate = require('../middleware/valitateRole');
const { validateCreate } = require('../validator/RoleValidator');
//controller
const RoleController = require('../controllers/Role_controller');
//prueba de fina¿dall user con roles y roles con users
router.get('/api/roles/user',auth.validateToken, validate.isAdmin, RoleController.allRolesUser);
router.get('/api/roles',auth.validateToken, validate.isAdmin,RoleController.allRoles);
router.get('/api/role/:id',auth.validateToken, validate.isAdmin, RoleController.getRole);
//router.post('/api/getRolesValidator',RoleController.createRole);
router.post('/api/new-roles',auth.validateToken, validate.isAdmin,validateCreate,validate.checkExisted, RoleController.createRole);
router.delete('/api/roles/delete/:id',auth.validateToken, validate.isAdmin, RoleController.deleteRole);



module.exports = router;