const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number], // [longitud, latitud]
      required: true
    }
  },
  createdBy: {
    type: String, // User ID
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

//Crear un indice geoespacial para las coordenadas
serviceSchema.index({ location: '2dsphere' })

const Service = mongoose.model('Service', serviceSchema)

module.exports = Service