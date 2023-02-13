import  express  from "express"
import bodyParser from "body-parser"
import employeesRoutes from './routes/employee.js'
import { employee } from "./controllers/employee.js"
import cors from 'cors'

const app = express()
const PORT = 8080


app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended: true
  }))

app.use(cors())

app.use('/employee', employeesRoutes)

app.listen(PORT)

app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    res.render('index', {employee: employee})
})


