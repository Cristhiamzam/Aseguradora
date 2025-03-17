import express from 'express'
import { createService, getServicesById, getServices, updateService, deleteService } from '../controllers/servicesControllers.js'

const router = express.Router()

router.post('/', createService)
router.get('/', getServices)
router.get('/:id', getServicesById)
router.put('/:id', updateService)
router.delete('/:id', deleteService)

export default router