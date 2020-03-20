import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'

// const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/myday'
const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/myday'
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise

const Reflection = mongoose.model('Reflection', {
  feeling1: { 
    type: String,
  },
  feeling2: { 
    type: String,
  },
  feeling3: { 
    type: String,
  },
  feeling4: { 
    type: String,
  },
  feeling5: { 
    type: String,
  },
  feeling6: { 
    type: String,
  },

  messagePeople: {
    type: String,
    minlength: 1,
    maxlength: 140
  },
  messageGrateful: {
    type: String,
    minlength: 1,
    maxlength: 140
  },
  messageLookForward: {
    type: String,
    minlength: 1,
    maxlength: 140
  },
  messageReflections: {
    type: String,
    minlength: 1,
    maxlength: 140
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const port = process.env.PORT || 9000
const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/', async (req, res) => {
  const reflections = await Reflection.find().sort({createdAt: 'desc'}).limit(140).exec()
  res.json(reflections)
})

app.post('/', async (req, res) => {
  const {message} = req.body
  console.log(req.body)

  const reflection = new Reflection(req.body)
  try {
    const savedReflection = await reflection.save()
    res.status(201).json(savedReflection)
  }catch (err) {
    res.status(400).json({message: 'Could not save your reflection', error: err.errors}) 
  }
})

app.get('/reflections/:id', async (req, res) => {
  const reflection = await Reflection.findById(req.params.id)
  if (reflection) {
    res.json(reflection)
  } else {
    res.status(404).json({ error: 'Reflection not found' })
  }
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})

