const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config()

const app = express()
const port = process.env.PORT || 5000

//middleware
app.use(express.json())

//Conectar  a la base de datos MongoDB
mongoose.connect(process.env.MONGO_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
.then(() => console.log('Conectado a MongoDB'))
.catch(() => console.log('Error al conectar a MongoDB'))

//Ruta de prueba
app.get('/', (req, res) =>{
	res.send('Hola Mundo')
})

app.listen(port, () => {
	console.log(`Servidor corriendo en el puerto ${port}`)
})