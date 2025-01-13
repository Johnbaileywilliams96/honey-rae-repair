import { useEffect, useState } from "react"
import { getAllTickets } from "../../services/ticketServices.js"
import "./Ticket.css"
import { Ticket } from "./Ticket.jsx"
import { HandleSearchTerm } from "./TicketSearch.jsx"

export const TicketList = () => {
const [allTickets, setAllTickets] = useState([])
const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)
const [filteredTickets, setFilteredTickets] = useState([])
const [searchTerm, setSearchTerm] = useState('')

useEffect(() => {
  getAllTickets().then(ticketsArray => {
    setAllTickets(ticketsArray)
    console.log("tickets set")
  })

}, [])// only runs on initial render of component. 

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

return <div className="tickets-container">
  <h2>Tickets</h2>

  <HandleSearchTerm setShowEmergencyOnly={setShowEmergencyOnly} setSearchTerm={setSearchTerm}/>
  
  <article className="tickets">
    {filteredTickets.map(ticketObj => {
      return <><Ticket ticket={ticketObj} name="Joe" key={ticketObj.id}/></>
    })}
  </article>
</div>
}