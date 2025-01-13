
import { Outlet, Route, Routes } from "react-router-dom"
import "./App.css"
import { CustomerList } from "./components/customers/CustomersList.jsx"
import { EmployeeList } from "./components/employees/EmployeeList.jsx"
import { TicketList } from "./components/tickets/TicketList.jsx"
import { NavBar } from "./components/nav/NavBar.jsx"
import { Welcome } from "./components/Welcome/Welcome.jsx"
import { CustomerDetails } from "./components/customers/CustomerDetails.jsx"



export const App = () => {
return <>
<Routes>
    <Route path="/" element={
        <>
        <NavBar />
        <Outlet />
        </>
    }
    >
        <Route index element={<Welcome />} />
        <Route path="/tickets" element={<TicketList />} />
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="/customers">
            <Route index element={<CustomerList />} />
            <Route path=":customerId" element={<CustomerDetails />} />
        </Route>
    </Route>
</Routes>
</>
}