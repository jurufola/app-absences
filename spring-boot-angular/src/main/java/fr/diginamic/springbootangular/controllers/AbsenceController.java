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

@CrossOrigin(origins = "*", allowedHeaders = "*")
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

    @CrossOrigin
    @GetMapping("usersAbsences/{id}")
    public Set<Absence> getAbsencesByUserId(@PathVariable("id") long id){
        return absenceService.getAbsencesByUserId(id);
    }
    @CrossOrigin
    @PostMapping("absences")
    public String createAbsence(@RequestBody Absence absence){

        return absenceService.addAbsence(absence);

    }

    @PutMapping("absences/{id}")
    public String updateAbsence(@PathVariable("id") long id, @RequestBody Absence absence){
        absenceService.updateAbsence(id, absence);
        return "Update succeed";
    }

    @DeleteMapping("absences/{id}")
    public void removeAbsence(@PathVariable("id") long id){
        absenceService.deleteAbsence(id);
        //return "Delete succeed";
    }


}
