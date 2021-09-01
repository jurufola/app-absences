package fr.diginamic.springbootangular.repositories;

import fr.diginamic.springbootangular.entities.Absence;
import fr.diginamic.springbootangular.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface AbsenceRepository extends JpaRepository <Absence , Long> {
    Optional<Absence> findByDateDebutAndDateFinAndUser(LocalDate dateDebut, LocalDate dateFin, User user);

    Set<Absence> findAllByUserId(long userId);
}
