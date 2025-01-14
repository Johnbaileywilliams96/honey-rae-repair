import { Route, Routes } from "react-router-dom"
import "./App.css"
import { Login } from "./components/auth/Login.jsx"
import { Register } from "./components/auth/Register.jsx"
import { Authorized } from "./views/Authorized.jsx"
import { ApplicationViews } from "./views/ApplicationViews.jsx"



export const App = () => {
return <>
<Routes>

    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="*" element={
        //Check if the user is authorized first
        <Authorized>

            <ApplicationViews />
        </Authorized>
    }
    />
</Routes>
</>
}