import React from "react";
import { useState ,useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import EmployeeService from "../Service/EmployeeService";

const EmployeeList = () => {
  const [loading , setLoading] = useState(true);
  const [employees, setEmployees]= useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try{
        const response = await EmployeeService.getEmployees();
        setEmployees(response.data);
      }catch(error){
        console.log(error);
      }
      setLoading(false);
    }; 
    fetchData();
  }, []);


  const editEmployee = (e,id) => { 
    e.preventDefault();
    navigate(`/editEmployee/${id}`);
  };


  const deleteEmployee =(e,id) => {
    e.preventDefault();
    EmployeeService.deleteEmployeeById(id)
    .then(()=>{
        if(employees){
        setEmployees((prevElement)=>{
          return prevElement.filter((employee)=>employee.id !== id);
        })
      }   
    })
  };
  
  const navigate = useNavigate();
  return (
    <div className="container mx-auto my-10 ">
      <div>
        <button 
         onClick={()=> navigate("/addEmployee")}
         className="bg-slate-600 hover:bg-blue-700 my-4 px-20 py-2 font-semibold">
          Add Employee
        </button>
      </div>
      <div>
        <table className="shadow">
          <thead className="bg-slate-600">
            <tr>
              <th className="px-6 py-3 uppercase tracking-wide"> Name </th>
              <th className="px-6 py-3 uppercase tracking-wide"> phone </th>
              <th className="px-6 py-3 uppercase tracking-wide"> Email </th>
              <th className="px-6 py-3 uppercase tracking-wide"> Action </th>
            </tr>
          </thead>
           {!loading && (
          <tbody>
            {employees.map((employee)=>(
            <tr key={employee.id} className="hover:bg-white hover:text-black">

              <td className="text-left px-6 py-4 whitespace-nowrap">             
                {employee.name}
              </td>

              <td className="text-left px-6 py-4 whitespace-nowrap">            
                {employee.phone}
              </td>

              <td className="text-left px-6 py-4 whitespace-nowrap">               
                {employee.email}
              </td>

              <td className="text-left px-6 py-4 whitespace-nowrap">
                <a 
                 onClick={(e,id)=>editEmployee(e,employee.id)}
                className="mx-5 hover:text-green-500 hover:cursor-pointer"
                > Edit </a>
                <a 
                onClick={(e,id)=>deleteEmployee(e,employee.id)}
                className="mx-5 hover:text-red-500 hover:cursor-pointer"> Delete </a>
              </td>
            </tr>
           ))}
          </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
