package beckend.services;

import beckend.modals.Employee;

import java.util.List;

public interface EmployeeService {

    String createEmployee(Employee employee);
    List<Employee> getAllEmployees();
    boolean deleteEmployee(Long id);
    String updateEmployee(Long id, Employee employee);
    Employee getEmployeeById(Long id);

}

