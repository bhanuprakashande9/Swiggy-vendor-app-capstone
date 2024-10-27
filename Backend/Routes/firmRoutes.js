const express = require('express');
const firmController = require('../Controllers/firmController');
const verifyToken= require('../Middleware/VerifyToken')

const router =express.Router()
router.post('/add-firm',verifyToken,firmController.addfirm);

module.exports=router