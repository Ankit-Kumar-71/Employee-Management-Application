package com.employee.service;

import java.util.List;

import com.employee.modal.Employee;

public interface EmployeeService {
	
	String createEmployee(Employee employee);
    List<Employee> readEmployees();
    boolean deleteEmployee(Long id);
    String updateEmployee(Long id, Employee employee);
    Employee readEmployee(Long id);

}
