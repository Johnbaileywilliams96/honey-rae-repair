import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getEmployeeByUserId } from "../../services/employeeService"
import "./Employees.css"

export const EmployeeDetails = () => {
    const {employeeId} = useParams()
    const [employee, setEmployee] = useState({})

    useEffect(() => {
        getEmployeeByUserId(employeeId).then((data) => {
            const singleEmployee = data[0]
            if (singleEmployee) {
                setEmployee(singleEmployee)
            }
        })
    }, [employeeId])

    return <>
    <section className="employee">
        <header className="employee-header">{employee.user?.fullName}</header>
        <div>
            <span className="customer-info">Email: </span>
            {employee.user?.email}
        </div>
        <div>
            <span className="customer-info">Specialty: </span>
            {employee.specialty}
        </div>
        <div>
            <span className="customer-info">Rate: </span>
            {employee.rate}
        </div>
        <footer className="employee-footer">
            Currently working on {employee.employeeTickets?.length} tickets
        </footer>
    </section>
    </>

}