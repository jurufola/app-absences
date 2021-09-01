package fr.diginamic.springbootangular.controllers;

import fr.diginamic.springbootangular.entities.Absence;
import fr.diginamic.springbootangular.entities.ClosedDay;
import fr.diginamic.springbootangular.entities.User;
import fr.diginamic.springbootangular.services.AbsenceService;
import fr.diginamic.springbootangular.services.ClosedDayService;
import fr.diginamic.springbootangular.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class AbsenceController {
    @Autowired
    AbsenceService absenceService;
    @Autowired
    UserService userService;

    @Autowired
    ClosedDayService closedDayService;

    /*@PostMapping("absence")
    public String addAbsence(@RequestBody Absence absence) {
        return absenceService.addAbsence(absence);

    }*/
    @GetMapping("absences")
    public List<Absence> getAllAbsences() {
        return absenceService.absences();
    }

    @GetMapping("absences/{id}")
    public Absence getAbsenceById(@PathVariable("id") long id){
        return absenceService.getAbsenceById(id);
    }
    @GetMapping("usersAbsences/{id}")
    public Set<Absence> getAbsencesByUserId(@PathVariable("id") long id){
        return absenceService.getAbsencesByUserId(id);
    }

    @PostMapping("absences")
    public String createAbsence(@RequestBody Absence absence){
        // Overlapping test
        //System.out.println("Absence => " + absence);
        //System.out.println(datesOverlapping(absence));
        if(datesOverlapping(absence)) {
            //System.out.println("JE suis dans le if datesOverlapping(absence)");
            return "Votre demande d'absence chévauche une autre demande. Merci de Changer les dates";
        }

        // Closed Day test
        System.out.println(isClosedDay(absence.getDateDebut()));
        if(isClosedDay(absence.getDateDebut())) {
            return "La date de début tombe sur un jour férié ou un Rtt employeur";
        }
        if(isClosedDay(absence.getDateFin())) {
            return "La date de fin tombe sur un jour férié ou un Rtt employeur";
        }

        // week-end test

        if (isAWeekDay(absence.getDateDebut())) {
            return "La date de début ne peut être un jour de week-end";
        }
        if (isAWeekDay(absence.getDateFin())) {
            return "La date de fin ne peut être un jour de week-end";
        }

        absenceService.addAbsence(absence);
        return "Votre demande d'abscence a bien été prise en compte";
    }

    @PutMapping("absences/{id}")
    public String updateAbsence(@PathVariable("id") long id, @RequestBody Absence absence){
        absenceService.updateAbsence(id, absence);
        return "Update succeed";
    }

    @DeleteMapping("absences/{id}")
    public String removeAbsence(@PathVariable("id") long id){
        absenceService.deleteAbsence(id);
        return "Delete succeed";
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



}
