import { Outlet, Route, Routes } from "react-router-dom";
import { Welcome } from "../components/Welcome/Welcome";
import { CustomerNav } from "../components/nav/CustomerNav";
import { TicketList } from "../components/tickets/TicketList";

export const CustomerViews = ({currentUser}) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <CustomerNav />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />}></Route>
        <Route path="tickets" element={<TicketList currentUser={currentUser} />} 
        >
          <Route path="create" element={<>ticket form</>} />
          </Route>
      </Route>
    </Routes>
  );
};
