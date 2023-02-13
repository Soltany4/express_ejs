

const API = 'https://hub.dummyapis.com/employee?noofRecords=100&idStarts=1'

export let employee = fetch(API)
                .then(res => res.json())
                 .then(data => employee = data)


export const listEmployee = (req, res) => {
    res.send(employee)
    
    res.render("list")

}

export const addEmployee = (req, res) => {

    const emp = req.body

    const lastId = parseInt(employee[employee.length - 1].id)

    employee.push({...emp, id:  lastId + 1})

    res.send(res.redirect('/'))
    
}

export const getEmployee = (req, res) => {

    let id = parseInt(req.params.id)

    const emp = employee.filter((e) => (e.id === id))
    res.send(emp)


}

export const deleteEmployee = (req, res) => {

    const id = parseInt(req.params.id)

    employee = employee.filter((e) => (e.id !== id))

    res.send(res.redirect('/'))

}

export const updateEmployee = (req, res) => {

    let id = parseInt(req.params.id)
    const {imageUrl, firstName, lastName, email, contactNumber, age, dob, salary, address}= req.body

    const emp = employee.filter((e) => (e.id === id))

    if (imageUrl) {
        emp[0].imageUrl = imageUrl
    }
    if (firstName) {
        emp[0].firstName = firstName
    }
    if (lastName) {
        emp[0].lastName = lastName
    }
    if (email) {
        emp[0].email = email
    }
    if (contactNumber) {
        emp[0].contactNumber = contactNumber
    }
    if (age) {
        emp[0].age = age
    }
    if (dob) {
        emp[0].dob = dob
    }
    if (salary) {
        emp[0].salary = salary
    }
    if (address) {
        emp[0].address = address
    }

    res.send(res.redirect('/'))



}