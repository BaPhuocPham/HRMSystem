import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { MenuBar } from "./components/Menu/Menu";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Department } from "./pages/Department/Department";
import { Employee } from "./pages/Employee/Employee";
import { MyContract } from "./pages/MyContract/MyContract";
import { EmployeeContract } from "./pages/EmployeeContract/EmployeeContract";
import { NewEmployee } from "./pages/NewEmployee/NewEmployee";
import { Login } from "./pages/Login/Login";
import { Homepage } from "./pages/Homepage/Homepage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="appWrapper">
          <MenuBar />
          <div className="contentWrapper">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/department" element={<Department />} />
              <Route path="/my_department" element={<Dashboard />} />
              <Route path="/employee" element={<Employee />} />
              <Route path="/new_employee" element={<NewEmployee />} />
              <Route path="/ot_applications" element={<Dashboard />} />
              <Route path="/my_ot_applications" element={<Dashboard />} />
              <Route path="/leave_applications" element={<Dashboard />} />
              <Route path="/my_leave_applications" element={<Dashboard />} />
              <Route path="/other_applications" element={<Dashboard />} />
              <Route path="/my_other_applications" element={<Dashboard />} />
              <Route path="/salary" element={<Dashboard />} />
              <Route path="/my_salary" element={<Dashboard />} />
              <Route path="/contracts" element={<EmployeeContract />} />
              <Route path="/my_contract" element={<MyContract />} />
              <Route path="/candidates" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/homepage" element={<Homepage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
