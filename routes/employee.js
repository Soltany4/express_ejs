import express from 'express'
import { addEmployee, deleteEmployee, getEmployee, listEmployee, updateEmployee } from '../controllers/employee.js';

const router = express.Router()



router.get('/', listEmployee)

router.post('/add', addEmployee)

router.get('/:id', getEmployee)

router.get('/delete/:id', deleteEmployee)

router.post('/edit/:id', updateEmployee)


export default router;