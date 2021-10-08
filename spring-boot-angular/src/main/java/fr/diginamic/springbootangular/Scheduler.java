package fr.diginamic.springbootangular;

import fr.diginamic.springbootangular.services.AbsenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.time.DayOfWeek;
import java.time.LocalDate;

@Component
public class Scheduler {

    @Autowired
    AbsenceService absenceService;
    @Scheduled(cron = "0 40 14 * * *")
    public void batch(){


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
