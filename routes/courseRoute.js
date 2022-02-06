const express = require('express');
const courseController=require('../controller/courseController')

const router=express.Router()

router.route('/').post(courseController.creatCourse)
router.route('/').get(courseController.getAllCourse)
router.route('/:slug').get(courseController.getSingleCourse)


module.exports=router