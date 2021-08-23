package fr.diginamic.springbootangular.services;

import fr.diginamic.springbootangular.entities.Absence;
import fr.diginamic.springbootangular.entities.User;
import fr.diginamic.springbootangular.repositories.AbsenceRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class AbsenceService {
    @Autowired
    AbsenceRepository absenceRepository;

    public List<Absence> absences(){
        return absenceRepository.findAll();
    }
    public void addAbsence(Absence newAbsence) {
        absenceRepository.save(newAbsence);
    }
}
