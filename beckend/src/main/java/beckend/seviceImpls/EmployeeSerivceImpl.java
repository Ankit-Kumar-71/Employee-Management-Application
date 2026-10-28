package beckend.seviceImpls;

import beckend.modals.Employee;
import beckend.repositories.EmployeeRepository;
import beckend.services.EmployeeService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeSerivceImpl implements EmployeeService {

    private final EmployeeRepository employeeRepository;

    public EmployeeSerivceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }


    @Override
    public String createEmployee(Employee employee) {
        this.employeeRepository.save(employee);
        return "Saved Successfully";
    }

    @Override
    public List<Employee> getAllEmployees() {
        List<Employee> employees = this.employeeRepository.findAll();
        return employees.stream()
                .map(e -> new Employee(e.getId(), e.getName(), e.getPhone(), e.getEmail()))
                .toList();
    }

    @Override
    public boolean deleteEmployee(Long id) {
        Employee employee = this.employeeRepository.findById(id).get();
        this.employeeRepository.delete(employee);
        return true;
    }

    @Override
    public String updateEmployee(Long id, Employee employee) {
        Employee existEmployee = this.employeeRepository.findById(id).get();
        existEmployee.setName(employee.getName());
        existEmployee.setEmail(employee.getEmail());
        existEmployee.setPhone(employee.getPhone());
        employeeRepository.save(existEmployee);
        return "Update Succesfully";
    }

    @Override
    public Employee getEmployeeById(Long id) {
        return this.employeeRepository.findById(id).get();
    }
}
