package fr.diginamic.springbootangular.services;

import fr.diginamic.springbootangular.entities.Absence;
import fr.diginamic.springbootangular.entities.User;
import fr.diginamic.springbootangular.repositories.AbsenceRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

public class AbsenceService {
    @Autowired
    AbsenceRepository absenceRepository;

    /**
     * Return the list of all absences found in database
     * @return
     */
    public List<Absence> absences(){
        return absenceRepository.findAll();
    }
    public String addAbsence(Absence newAbsence) {
        return absenceRepository.save(newAbsence)!=null ? "Nouvelle abscence " + newAbsence + " rajoutée à la base  " :
                "Error de rajout";

    }

    public Absence getAbsenceById(Long id){
        Optional<Absence> absenceGet = absenceRepository.findById(id);
        if(absenceGet.isPresent()){
            return  absenceGet.get();
        }
        else{
            System.err.println("No absence found with this id");
            return null;
        }
    }
    /**
     * Add an absence in database if it not already exist
     * @param newAbsence
     */
    public void addAbsence(Absence newAbsence) {
        // 1 - We check if this absence not already exist in database
        Optional<Absence> absenceAlreadyIn = absenceRepository.findByDateDebutAndDateFinAndUser(
                newAbsence.getDateDebut(), newAbsence.getDateFin(), newAbsence.getUser()
        );
        if(absenceAlreadyIn.isPresent()){
            System.out.println("This absence already exist in database");
        }
        else {
            absenceRepository.save(newAbsence);
            System.out.println("Absence de " + newAbsence.getUser().getLogin() + "added to database");
        }
    }

    /**
     * Update an absence in database (if it exists)
     * @param absenceId
     * @param absence
     */
    public void updateAbsence(long absenceId, Absence absence){
        Optional<Absence> absenceData = absenceRepository.findById(absenceId);
        if(absenceData.isPresent()){
            Absence absenceToUpdate = absenceData.get();
            absenceToUpdate.setDateDebut(absence.getDateDebut());
            absenceToUpdate.setDateFin(absence.getDateFin());
            absenceToUpdate.setAbsenceType(absence.getAbsenceType());
            absenceToUpdate.setRequestStatus(absence.getRequestStatus());
            absenceToUpdate.setMotif(absence.getMotif());
        }
        else {
            System.out.println("No absence corresponding to this id in database");
        }
    }

    /**
     * Remove an absence of database
     * @param id
     */
    public void deleteAbsence(long id){
        absenceRepository.deleteById(id);
    }
}
