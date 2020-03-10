import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/myday'
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise

const Reflection = mongoose.model('Reflection', {
  message: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 140
  },

  // checkbox: { 
  //   type: String,
  //   // required: true,
  //   enum: ['Happy', 'Worried', 'Strong', 'Sad'],
  //   placeholder: 'Text',
  //   forceField: 'checkbox'
  
// })

  // hearts: {
  //   type: Number,
  //   default: 0
  // },
  createdAt: {
    type: Date,
    default: Date.now
  }
})
// Defines the port the app will run on. Defaults to 8080, but can be 
// overridden when starting the server. For example:
//
//   PORT=9000 npm start
const port = process.env.PORT || 9000
const app = express()

// Add middlewares to enable cors and json body parsing
app.use(cors())
app.use(bodyParser.json())

// Start defining your routes here
//Theresa added down below from 51-55
app.get('/', async (req, res) => {
  const reflections = await Reflection.find().sort({createdAt: 'desc'}).limit(140).exec()
  res.json(reflections)
})

app.post('/', async (req, res) => {
  //Retrieve the information sent by the client to our API endpoint
  const {message} = req.body

  //Use our mongoose model to create the database entry
  const reflection = new Reflection({message})

  try {
    //Success
    const savedReflection = await reflection.save()
    res.status(201).json(savedReflection)
  }catch (err) {
    res.status(400).json({message: 'Could not save your reflection', error: err.errors}) 
  }
})

// app.post('/reflection', async (req, res) => {
//     const reflection = new Reflection({ message }) // removed checkbox allt här som ska sparas
//     const savedReflection = await reflection.save()
//     res.status(201).json(savedReflection)
// })

// hej hej //

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})

