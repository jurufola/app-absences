package fr.diginamic.springbootangular.repositories;

import fr.diginamic.springbootangular.entities.Department;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartmentRepository extends JpaRepository <Department , Long>  {
}
