require('dotenv').config()
const express = require('express')
const { createClient } = require('@supabase/supabase-js')
const jwt = require('jsonwebtoken')
const rateLimit = require('express-rate-limit')
const { Resend } = require('resend')

const app = express()
const port = process.env.PORT || 5000

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY // Use service role key for backend
const supabase = createClient(supabaseUrl, supabaseKey)

const jwtSecret = process.env.JWT_SECRET
const adminUsername = 'iskipper123'
const adminPassword = 'Mafin110!' // In a real application, hash this password

const resend = new Resend(process.env.RESEND_API_KEY)

app.use(express.json())

// Rate limiting for login
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limit each IP to 10 login requests per windowMs
  message:
    'Too many login attempts from this IP, please try again after 15 minutes',
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

// JWT Authentication Middleware
const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (authHeader) {
    const token = authHeader.split(' ')[1]

    jwt.verify(token, jwtSecret, (err, user) => {
      if (err) {
        return res.sendStatus(403) // Forbidden
      }
      req.user = user
      next()
    })
  } else {
    res.sendStatus(401) // Unauthorized
  }
}

app.get('/', (req, res) => {
  res.send('Backend server is running!')
})

// Login route
app.post('/login', loginLimiter, (req, res) => {
  const { username, password } = req.body

  // In a real application, validate against a database
  if (username === adminUsername && password === adminPassword) {
    const accessToken = jwt.sign({ username: username }, jwtSecret, {
      expiresIn: '1h',
    })
    res.json({ accessToken })
  } else {
    res.status(401).send('Invalid credentials')
  }
})

// Contact form submission route
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body

  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Replace with your verified sender email
      to: 'your_email@example.com', // Replace with your recipient email
      subject: 'New Contact Form Submission',
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    })

    if (error) {
      return res.status(500).json({ error })
    }

    res.status(200).json({ data })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Quote request submission route
app.post('/quote', async (req, res) => {
  const { projectType, budget, deadline, details } = req.body

  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Replace with your verified sender email
      to: 'your_email@example.com', // Replace with your recipient email
      subject: 'New Quote Request',
      html: `<p>Project Type: ${projectType}</p><p>Budget: ${budget}</p><p>Deadline: ${deadline}</p><p>Details: ${details}</p>`,
    })

    if (error) {
      return res.status(500).json({ error })
    }

    res.status(200).json({ data })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Example protected route for admin panel
app.get('/adminpanel/data', authenticateJWT, async (req, res) => {
  // This route is protected and requires a valid JWT
  const { data, error } = await supabase.from('admin_data_table').select('*') // Replace 'admin_data_table'
  if (error) return res.status(500).json({ error: error.message })
  res.json(data)
})

// Example route to fetch data from Supabase (public)
app.get('/data', async (req, res) => {
  const { data, error } = await supabase.from('your_table_name').select('*') // Replace 'your_table_name'
  if (error) return res.status(500).json({ error: error.message })
  res.json(data)
})

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`)
})
