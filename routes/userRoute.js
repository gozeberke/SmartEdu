const express = require('express');
const authController=require('../controller/authController')

const router=express.Router()

router.route('/signup').post(authController.creatUser)
router.route('/login').post(authController.loginUser)


module.exports=router