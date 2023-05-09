const express=require('express');
const router= express.Router();
const Curry=require('../model/Curry')
const curryController=require('../controllers/curryController');

router.get('/',curryController.getAllCurries);
router.post('/',curryController.addCurry);
router.get('/:id',curryController.getById);
router.put('/:id',curryController.updateCurry);
router.delete('/:id',curryController.deleteCurry);

module.exports=router;