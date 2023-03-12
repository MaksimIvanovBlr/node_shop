require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHeandler = require('./middleware/ErrorHeandlerMiddleware')
const path = require('path')


const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname,'static')))
app.use(fileUpload({}))
app.use('/api', router)
app.use(errorHeandler)

// app.get('/', (req, res) => {
//     res.status(200).json({messaage:'WORKING!!!'})
    
// })



const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.get('/', (req, res) => res.send(`Start server on port ${PORT}!`))
        app.listen(PORT, () => console.log(`Start server on port ${PORT}!`))
        
    } catch (error) {
        console.log(error);
    }
}


start()
