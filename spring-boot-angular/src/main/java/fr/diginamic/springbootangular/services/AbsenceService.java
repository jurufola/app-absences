package fr.diginamic.springbootangular.services;

import fr.diginamic.springbootangular.entities.Absence;
import fr.diginamic.springbootangular.entities.ClosedDay;
import fr.diginamic.springbootangular.entities.User;
import fr.diginamic.springbootangular.repositories.AbsenceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class AbsenceService {
    @Autowired
    AbsenceRepository absenceRepository;
    @Autowired
    ClosedDayService closedDayService;
    @Autowired
    UserService userService;

    /**
     * Return the list of all absences found in database
     * @return
     */
    public List<Absence> absences(){
        return absenceRepository.findAll();
    }
    /*public String addAbsence(Absence newAbsence) {
        return absenceRepository.save(newAbsence)!=null ? "Nouvelle abscence " + newAbsence + " rajoutée à la base  " :
                "Error de rajout";

    }*/

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
    public String addAbsence(Absence newAbsence) {
        // 1 - We check if this absence not already exist in database
        Optional<Absence> absenceAlreadyIn = absenceRepository.findByDateDebutAndDateFinAndUser(
                newAbsence.getDateDebut(), newAbsence.getDateFin(), newAbsence.getUser()
        );
        if(absenceAlreadyIn.isPresent()){
            //System.out.println("This absence already exist in database");
            return "This absence already exist in database";
        }
        else {

            // Overlapping test
            //System.out.println("Absence => " + absence);
            //System.out.println(datesOverlapping(absence));
            if(datesOverlapping(newAbsence)) {
                //System.out.println("JE suis dans le if datesOverlapping(absence)");
                return "Votre demande d'absence chévauche une autre demande. Merci de Changer les dates";
            }

            // Closed Day check
            System.out.println(isClosedDay(newAbsence.getDateDebut()));
            if(isClosedDay(newAbsence.getDateDebut())) {
                return "La date de début tombe sur un jour férié ou un Rtt employeur";
            }
            if(isClosedDay(newAbsence.getDateFin())) {
                return "La date de fin tombe sur un jour férié ou un Rtt employeur";
            }

            // week-end check

            if (isAWeekDay(newAbsence.getDateDebut())) {
                return "La date de début ne peut être un jour de week-end";
            }
            if (isAWeekDay(newAbsence.getDateFin())) {
                return "La date de fin ne peut être un jour de week-end";
            }
            // passed dates check
            if (inThePast(newAbsence.getDateDebut()) || inThePast(newAbsence.getDateFin())) {
                return "On ne peut poser une demande dans le passé!";
            }
            absenceRepository.save(newAbsence);
            System.out.println("Absence de " + newAbsence.getUser().getLogin() + "added to database");
            return "Votre demande d'abscence a bien été prise en compte";
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

    public Set<Absence> getAbsencesByUserId(long userId) {
        return absenceRepository.findAllByUserId(userId);
    }

    /**
     * Check if new absence for a user start date or end date overlapps with the others absences dates for the same
     * user
     * @param absence
     * @return
     */
    public boolean datesOverlapping(Absence absence) {
        //System.out.println("debut datesOverlapping");

        long userId = absence.getUser().getId();
        User user = this.userService.getUserByLogin(absence.getUser().getLogin());
        //System.out.println("User Id  => " + userId);
        //System.out.println("User => " + user);
        Set<Absence> userAbsences = user.getAbsences();
        //System.out.println(userAbsences.size());

        for (Absence userAbsence : userAbsences) {
            // System.out.println("Boucle absences user");
           /* if(absence.getDateDebut().compareTo(userAbsence.getDateDebut())>=0 && absence.getDateDebut().compareTo
           (userAbsence.getDateFin())<=0) {
                return true;
            }
            if(absence.getDateFin().compareTo(userAbsence.getDateDebut())>=0 && absence.getDateFin().compareTo(userAbsence.getDateFin())<=0) {
                return true;
            }*/
            // We test is start date of the new abscence is beetween start date and end dates of user abscences
            if(absence.getDateDebut().isAfter(userAbsence.getDateDebut()) && absence.getDateDebut().isBefore(userAbsence.getDateFin())){
                return true;
            }
            // We test is end date of the new abscence is beetween start date and end dates of user abscences
            if(absence.getDateFin().isAfter(userAbsence.getDateDebut()) && absence.getDateFin().isBefore(userAbsence.getDateFin())){
                return true;
            }

            // We test is star date of the new abscence is before start dates user abscences and end date of the new
            // user is after the end dates of user  absences
            if(absence.getDateDebut().isBefore(userAbsence.getDateDebut()) && absence.getDateFin().isAfter(userAbsence.getDateFin())) {
                return true;
            }

            // We test if the start date of the new absence is equal to the start dates or the end dates of user
            // absences
            if(absence.getDateDebut().isEqual(userAbsence.getDateDebut()) || absence.getDateDebut().isEqual(userAbsence.getDateFin())) {
                return true;
            }

            // We test if the end date of the new absence is equal to the start dates or the end dates of user
            // absences
            if(absence.getDateFin().isEqual(userAbsence.getDateDebut()) || absence.getDateFin().isEqual(userAbsence.getDateFin())) {
                return true;
            }
        }
        return false;
    }

    /**
     * check if a date is a closed Day
     * @param date
     * @return
     */
    public boolean isClosedDay(LocalDate date) {
        List<ClosedDay> closedDays = closedDayService.closedDays();
        System.out.println("Nombre de closed days => " + closedDays.size());
        for (ClosedDay closedDay : closedDays) {
            System.out.println(closedDay);
            System.out.println("closed Day => " + closedDay);
            System.out.println("date => " + date);
            return date.isEqual(closedDay.getDate());
        }

        return false;
    }

    /**
     * Ceck if a date is saturday or sunday
     * @param date
     * @return
     */
    public boolean isAWeekDay(LocalDate date) {
        DayOfWeek day = date.getDayOfWeek();
        return day == DayOfWeek.SATURDAY || day == DayOfWeek.SUNDAY;
    }

    /**
     * Check is a date is in the past
     * @param date
     * @return
     */
    public boolean inThePast(LocalDate date) {

        return date.isBefore(LocalDate.now());
    }

}
