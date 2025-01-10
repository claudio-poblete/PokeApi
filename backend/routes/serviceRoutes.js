const express = require('express')
const {
  createService,
  getAllServices,
  getNearbyServices,
  getServiceById,
  updateService,
  deleteService
} = require('../controllers/serviceController')
const { 
  validateServiceData, 
  handleValidationErrors 
} = require('../middlewares/validateService')
const authenticateUser = require('../middlewares/authenticate')
const router = express.Router()

router.post('/services', authenticateUser, validateServiceData, handleValidationErrors, createService)
router.get('/services', getAllServices)
router.get('/services/nearby', getNearbyServices)
router.get('/services/:id', getServiceById)
router.put('/services/:id', authenticateUser,  validateServiceData, handleValidationErrors, updateService)
router.delete('/services/:id', deleteService)

module.exports = router

