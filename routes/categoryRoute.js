const express = require('express');
const categoryController=require('../controller/categoryController')

const router=express.Router()

router.route('/').post(categoryController.creatCategory)


module.exports=router