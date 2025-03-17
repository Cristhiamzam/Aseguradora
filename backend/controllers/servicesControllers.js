import { services } from '../data/polizaServices.js'
import Services from '../models/Services.js'
import { validateObjectId, handleNotFoundError } from '../utils/index.js'

//Crear Servicio
const createService = async (req, res) =>{
    if(Object.values(req.body).includes('')){
        const error = new Error('Todos los campos son obligatorios')
        return res.status(400).json({
            msg: error.message
        })
    }
    try {
        const service = new Services(req.body)
        await service.save()
        res.json({
            msg:'Servicio almacenado Correctamente!!!'
        })
    } catch (error) {
        console.log(error) 
    }
}

const getServices = (req, res) =>{
    res.json(services)
}

const getServicesById = async (req, res) =>{
    const { id } = req.params

    //Validacion del objeto id
    if(validateObjectId(id, res)) return 

    //Validadr que exista desde utils
    const service = await Services.findById(id)
    if(!service){
        return handleNotFoundError('El servicio no existe!!!', res)
    }

    //Mostrar el Servicio
    res.json(service)
}

//Actualizar Servicio
const updateService = async(req, res) =>{
    const { id } = req.params

    //Validacion por object ID
    if(validateObjectId(id, res)) return

    //Validacion de que exista
    const service = await Services.findById(id)
    if(!service){
        return handleNotFoundError('El Servicio no existe!!!', res)
    }

    //Nuevos Valores al escribir
    service.name = req.body.name || service.name
    service.price = req.body.price || service.price

    try {
        await service.save()
        res.json({
            msg: 'Servicio Actualizado Correctamente!!!'
        })
    } catch (error) {
        console.log(error)
    }
}

//Eliminar Servicio
const deleteService = async(req, res) =>{
    const { id } = req.params

    //Validacion por object ID
    if(validateObjectId(id, res)) return

    //Validacion de que exista
    const service = await Services.findById(id)
    if(!service){
        return handleNotFoundError('El Servicio no existe!!!', res)
    }

    try {
        await service.deleteOne()
        res.json({
            msg: 'Servicio Elimninado Correctamente!!!!'
        })
    } catch (error) {
        console.log(error)
    }
}

export{
    createService,
    getServices,
    getServicesById,
    updateService,
    deleteService
}