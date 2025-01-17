import { useEffect, useState } from "react"
import { getAllEmployees } from "../../services/employeeService"
import { deleteTicket } from "../../services/ticketServices"

export const Ticket = ({ ticket, currentUser }) => {
    const [employees, setEmployees] = useState([])
    const [assignedEmployee, setAssignedEmployee] = useState({})

    useEffect(() => {
        getAllEmployees().then((employeesArray) => {
            setEmployees(employeesArray)
        })
    }, [])

    useEffect(() => {
        const foundEmployee = employees.find(
            employee => employee.id === ticket.employeeTickets[0]?.employeeId
        )
        setAssignedEmployee(foundEmployee)
    }, [employees, ticket])

    const handleClaim = () => {
        // Implement claim functionality here
    }

    const handleDelete = () => {
      deleteTicket(ticket.id).then(() => {
        getAndSetTickets()
      })
    }

    return (
        <section className="ticket">
            <header className="ticket-info">#{ticket.id}</header>
            <div>{ticket.description}</div>
            <footer>
                <div>
                    <div className="ticket-info">assignee</div>
                    <div>{assignedEmployee ? assignedEmployee.user?.fullName : "none"}</div>
                </div>
                <div>
                    <div className="ticket-info">emergency</div>
                    <div>{ticket.emergency ? "yes" : "no"}</div>
                </div>
                <div className="btn-container">
                    {currentUser.isStaff && !assignedEmployee ? (
                        <button className="btn btn-secondary" onClick={handleClaim}>
                            claim
                        </button>
                    ) : (
                        ""
                    )}
                    {!currentUser.isStaff ? (
                        <button className="btn btn-warning" onClick={handleDelete}>Delete</button>
                    ) : (
                        ""
                    )}
                </div>
            </footer>
        </section>
    )
}