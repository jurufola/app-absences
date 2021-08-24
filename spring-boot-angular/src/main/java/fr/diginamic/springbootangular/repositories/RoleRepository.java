package fr.diginamic.springbootangular.repositories;

import fr.diginamic.springbootangular.entities.Role;
import org.springframework.data.jpa.repository.JpaRepository;


public interface RoleRepository extends JpaRepository <Role, Long>  {
}
