package beckend.modals;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Setter
@Getter
@NoArgsConstructor
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String phone;
    private String email;

    public Employee(Long id, String name, String phone, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}
