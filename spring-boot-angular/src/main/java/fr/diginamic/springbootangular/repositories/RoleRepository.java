package fr.diginamic.springbootangular.repositories;

import fr.diginamic.springbootangular.entities.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface RoleRepository extends JpaRepository <Role, Long>  {
    Optional<Role> findByNomRole( String nomRole);
}
