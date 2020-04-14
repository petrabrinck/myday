import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import crypto from 'crypto'
import bcrypt from 'bcrypt'

// const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/myday'
const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/myday'
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise

const User = mongoose.model('User', {
  name: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    required: true
  },

  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString('hex')
  }
});


// Defines the port the app will run on. Defaults to 8080, but can be
// overridden when starting the server. For example:
//
//   PORT=9000 npm start
const port = process.env.PORT || 9000;
const app = express();

// Add middlewares to enable cors and json body parsing
// app.use(cors());
// app.use(bodyParser.json());

const authenticateUser = async (req, res, next) => {
  try {
    const user = await User.findOne({
      accessToken: req.header('Authorization')
    })
    user.password = undefined // so password is not returned
    if (user) {
      req.user = user
      next()
    } else {
      res.status(401).json({loggedOut: true, message: "Please try logging in again"})
    }
  } catch (err) {
    res
      .status(403)
      .json({ message: 'access token missing or wrong', errors: err.message })
  }
}

// Start defining your routes here
// app.get('/', (req, res) => {
//   res.send('Hello world');
// });

// Creating user who is signing up
app.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password: bcrypt.hashSync(password) });
    const saved = await user.save();
    res
      .status(201).json(saved); 
  } catch (err) {
    console.error(err.message)
    res
      .status(400)
      .json({ message: 'Error! Could not create user', error: err.message });
  }
});

// app.get('/secrets', authenticateUser);
// app.get('/secrets', (req, res) => {
//   res.json({ secret: 'This is secret message' });
// });

// Secure endpoint, user needs to be logged in to access this.
// This function calls up to the const authenticateUser further up
app.get('/users/:id', authenticateUser)
app.get('/users/:id', (req, res) => {
  try {
    res.status(201).json(req.user)
  } catch (err) {
    res.status(400).json({message: 'could not save user', errors: err.message})
  }
})

// Member signing in
app.post('/sessions', async (req, res) => {
  try {  
    const { email, password } = req.body

    const user = await User.findOne({ email }) //retrieve user, can use name too, change in const above in that case
    if (user && bcrypt.compareSync(password, user.password)) { //comparing passwords so the member already has signed up
      //success 
      res.status(201).json({ userId: user._id, accessToken: user.accessToken })
    } else {
      //faliure 
      res.json({ message: "wrong username or paaaword" })
    }
  } catch (err) {
    res.status(400).json({  errors: err.errors })
  }
})



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

// const port = process.env.PORT || 9000
// const port = process.env.PORT || 8080

// const app = express()
// app.use(cors())
// app.use(bodyParser.json())

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