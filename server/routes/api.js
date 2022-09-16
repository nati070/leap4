const express = require('express')
const router = express.Router()
const mapUrlController = require('../controllers/mapURL')

//Q1
router.route('/create-map-url').post(mapUrlController.handleCreateMapUrl)
//Q2
router.route('/get-all-mapping').get(mapUrlController.handleGetAllUrls)
//Q3
router.route('/get-map-url').post(mapUrlController.handleMapUrl)



module.exports = router;