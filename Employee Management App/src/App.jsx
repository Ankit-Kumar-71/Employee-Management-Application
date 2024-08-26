import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddEmployee from "./Components/AddEmployee";
import UpdateEmployee from "./Components/updateEmployee";
import EmployeeList from "./Components/EmployeeList";
import Navber from "./Components/Navber";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navber />
        <Routes>
          <Route index element={<EmployeeList />} />
          <Route path="/" element={<EmployeeList />} />
          <Route path="/addEmployee" element={<AddEmployee />} />
          <Route path="/editEmployee/:id" element={<UpdateEmployee />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
