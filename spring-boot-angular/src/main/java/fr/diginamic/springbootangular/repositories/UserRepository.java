package fr.diginamic.springbootangular.repositories;

import fr.diginamic.springbootangular.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository <User , Long> {
}
