const express = require('express');
const authController=require('../controller/authController')

const router=express.Router()

router.route('/signup').post(authController.creatUser)


module.exports=router