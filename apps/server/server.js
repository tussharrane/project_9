import Express from "express"
import cors from 'cors'
import bodyParser from 'body-parser'
import session from 'express-session'

const app = Express()
const port = 3000
app.use(bodyParser.json())
app.use(session({
  secret: "MySessionSecretKey010599",
  saveUninitialized: true,
  resave: false,
}))
app.use(cors({credentials: true, origin: 'http://localhost:5173'}))

app.get('/', (req, res) => {
  if (req.session.userId === 'tusharr') {
    res.send({result: 'Welcome Tushar'})
  } else {
    req.session.userId = 'tusharr'
    res.send({result: 'Hello world!!'})
  }
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

