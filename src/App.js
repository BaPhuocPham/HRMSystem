import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MenuBar } from "./components/Menu/Menu";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Department } from "./pages/Department/Department";
import { Employee } from "./pages/Employee/Employee";

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
              <Route path="/new_employee" element={<Dashboard />} />
              <Route path="/ot_applications" element={<Dashboard />} />
              <Route path="/my_ot_applications" element={<Dashboard />} />
              <Route path="/leave_applications" element={<Dashboard />} />
              <Route path="/my_leave_applications" element={<Dashboard />} />
              <Route path="/other_applications" element={<Dashboard />} />
              <Route path="/my_other_applications" element={<Dashboard />} />
              <Route path="/salary" element={<Dashboard />} />
              <Route path="/my_salary" element={<Dashboard />} />
              <Route path="/contracts" element={<Dashboard />} />
              <Route path="/my_contract" element={<Dashboard />} />
              <Route path="/candidates" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
