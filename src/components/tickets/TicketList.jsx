import { useEffect, useState } from "react"
import { deleteTicket, getAllTickets } from "../../services/ticketServices.js"
import "./Ticket.css"
import { Ticket } from "./Ticket.jsx"
import { HandleSearchTerm } from "./TicketSearch.jsx"
import { TicketFilterBar } from "./TicketFilterBar.jsx"

export const TicketList = ({currentUser, getAndSetTickets}) => {
const [allTickets, setAllTickets] = useState([])
const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)
const [showOpenOnly, setShowOpenOnly] = useState(false)
const [filteredTickets, setFilteredTickets] = useState([])
const [searchTerm, setSearchTerm] = useState('')

useEffect(() => {
  getAllTickets().then(ticketsArray => {
    if (currentUser.isStaff) {
      setAllTickets(ticketsArray)
    } else {
      const customerTickets = ticketsArray.filter(
        (ticket) => ticket.userId === currentUser.id
      )
      setAllTickets(customerTickets)
    }
    
  })

}, [currentUser])// only runs on initial render of component. 

useEffect(() => {
  const foundTickets = allTickets.filter(ticket => ticket.description.toLowerCase().includes(searchTerm.toLowerCase()))
  setFilteredTickets(foundTickets)
}, [searchTerm, allTickets])

useEffect(() => {
  if (showEmergencyOnly) {
    const emergencyTickets = allTickets.filter(
      (ticket) => ticket.emergency === true
    )
    setFilteredTickets(emergencyTickets)
  } else {
    setFilteredTickets(allTickets)
  }
}, [showEmergencyOnly, allTickets])

useEffect(() => {
  if (showOpenOnly) {
    const openTickets = allTickets.filter(
      ticket => ticket.dateCompleted === ''
    )
    setFilteredTickets(openTickets)
  } else {
    setFilteredTickets(allTickets)
  }
}, [showOpenOnly, allTickets])


return <div className="tickets-container">
  <h2>Tickets</h2>

  <TicketFilterBar
    setShowEmergencyOnly={setShowEmergencyOnly}
    setShowOpenOnly={setShowOpenOnly}
    setSearchTerm={setSearchTerm}
    currentUser={currentUser}
    />

  {/* <HandleSearchTerm setShowEmergencyOnly={setShowEmergencyOnly} setSearchTerm={setSearchTerm}/>
   */}
  <article className="tickets">
    {filteredTickets.map(ticketObj => {
      return <><Ticket 
      ticket={ticketObj} 
      currentUser={currentUser}
      key={ticketObj.id}/></>
    })}
  </article>
</div>
}