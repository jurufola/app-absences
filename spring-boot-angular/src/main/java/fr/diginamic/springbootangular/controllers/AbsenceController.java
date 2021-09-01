package fr.diginamic.springbootangular.controllers;

import fr.diginamic.springbootangular.entities.Absence;
import fr.diginamic.springbootangular.services.AbsenceService;
import fr.diginamic.springbootangular.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class AbsenceController {
    @Autowired
    AbsenceService absenceService;

    @GetMapping("absences")
    public List<Absence> getAllAbsences() {
        return absenceService.absences();
    }

    @GetMapping("absences/{id}")
    public Absence getAbsenceById(@PathVariable("id") long id){
        return absenceService.getAbsenceById(id);
    }

    @PostMapping("absences")
    public String createAbsence(@RequestBody Absence absence){
        absenceService.addAbsence(absence);
        return "Absence added successfully";
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





}
