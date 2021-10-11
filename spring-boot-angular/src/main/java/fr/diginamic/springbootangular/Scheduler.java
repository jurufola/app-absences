package fr.diginamic.springbootangular;

import fr.diginamic.springbootangular.entities.Absence;
import fr.diginamic.springbootangular.entities.User;
import fr.diginamic.springbootangular.repositories.AbsenceRepository;
import fr.diginamic.springbootangular.services.AbsenceService;
import fr.diginamic.springbootangular.services.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import javax.mail.MessagingException;
import java.io.UnsupportedEncodingException;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.util.Set;

@Component
public class Scheduler {

    @Autowired
    AbsenceService absenceService;
    @Autowired
    AbsenceRepository absenceRepository;
    @Autowired
    EmailService emailService;
    @Scheduled(cron = "0 53 14 * * *")
    public void batch(){



        /*** All the absences withe initiale status ordered by descendant id ***/
        Set<Absence> absences =  absenceService.findByStatusOrderByIdAsc(Absence.Status.INITIALE);
        int nbDaysOfAbsence = 0;
        for (Absence absence : absences) {
            System.out.println(absence);
            nbDaysOfAbsence = workingDays(absence.getDateDebut(), absence.getDateFin());
            User user = absence.getUser();
            System.out.println("Id user " + user.getId() + "user " + user);
            System.out.println("nombre de jours d'absence : " + nbDaysOfAbsence);
            if (nbDaysOfAbsence <= user.getCongesPayesRestants() || nbDaysOfAbsence <= user.getRttRestants()) {
                absence.setRequestStatus(Absence.Status.EN_ATTENTE_VALIDATION);
                String recipient = "moulaye.haidara@laposte.net";
                String subject = "Nouvelle absence en attentte de validation de " + user.getNom() + " " + user.getPrenom();
                String content =
                        "Merci accepter ou de rejeter la demande d'absence de " + user.getNom() + " "
                                + user.getPrenom() +" du " + absence.getDateDebut() + " au " + absence.getDateFin() ;

                try {
                    emailService.sendEmail(recipient, subject, content);
                } catch (UnsupportedEncodingException | MessagingException e) {
                    System.out.println(e.getStackTrace());
                }
            }else {
                absence.setRequestStatus(Absence.Status.REJETEE);
            }
            //Update absence in all cases
            absenceRepository.save(absence);

        }


    }

    /**
     * Return number of working days between start and end dates of absence
     * @param start Absence start date
     * @param end Absence end date
     * @return number  of working days
     */
    public  int workingDays(LocalDate start, LocalDate end) {
        int result = 0;
        LocalDate date = start;
        System.out.println("date before => " + date);
        while (date.isBefore(end) || date.isEqual(end)){
            if ((date.getDayOfWeek() != DayOfWeek.SATURDAY && date.getDayOfWeek() != DayOfWeek.SUNDAY) && !absenceService.isClosedDay(date)) {
                result++;
                System.out.println("Number of days : => " + result);
                System.out.println(" Day of week => " + date.getDayOfWeek());
            }
            date = date.plusDays(1);
            System.out.println("date => " + date);
        }
        return result;
    }
}
