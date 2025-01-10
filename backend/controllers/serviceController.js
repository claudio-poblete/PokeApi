const Service = require('../models/serviceModel')

const createService = async (req, res) => {
  try {
    const { name, category, description, location, createdBy } = req.body
    const  newService = new Service({
      name,
      category,
      description,
      location,
      createdBy
    })
    await newService.save()
    res.status(201).json({
      success: true,
      message: 'Servicio creado exitosamente',
      data: newService
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error en la creacion del servicio',
      error: error.message
    })
  }
}

const getAllServices = async (req, res) => {
  try {
    const services = await Service.find()
    res.status(200).json({
      success: true,
      message: 'Servicios obtenidos exitosamente',
      data: services
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener los servicios',
      error: error.message
    })
  }
}

const getNearbyServices = async (req, res) =>{
  const { lat, long, maxDistance } = req.query
  try {
    const services = await Service.find({
      location: {
        $near: {
          $geometry: { type: 'Point', coordinates: [long, lat] },
          $maxDistance: maxDistance || 5000 // 5 km por defecto
        }
      }
    })
    res.status(200).json(services)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.param.id)
    if (!service) {
      return res.status(404).json({
        success: false,
        message: 'Servicio no encontrado',
        error: 'Servicio no encontrado'
      })
    }
    res.status(200).json({
      success: true,
      message: 'Servicio obtenido exitosamente',
      data: service
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener el servicio',
      error: error.message
    })
  }
}

const updateService = async (req, res) => {
  try {
    const updateService = await Service.finByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true }
    )
    if (!updateService) {
      return res.status(404).json({
        success: false,
        message: 'Servicio no encontrado',
        error: 'Servicio no encontrado'
      })
    }
    res.status(200).json({
      success: true,
      message: 'Servicio actualizado exitosamente',
      data: updateService
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al actualizar el servicio',
      error: error.message
    })
  }
}

const deleteService = async (req, res) => {
  try {
    const deleteService = await Service.findByIdAndDelete(req.params.id)
    if (!deleteService) {
      return res.status(404).json({
        success: false,
        message: 'Servicio no encontrado',
        error: 'Servicio no encontrado'
      })
    }
    res.status(200).json({
      success: true,
      message: 'Servicio eliminado exitosamente',
      data: deleteService
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al eliminar el servicio',
      error: error.message
    })
  }
}

module.exports = {
  createService,
  getAllServices,
  getNearbyServices,
  getServiceById,
  updateService,
  deleteService
}



























