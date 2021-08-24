package fr.diginamic.springbootangular.controllers;

import fr.diginamic.springbootangular.entities.Absence;
import fr.diginamic.springbootangular.services.AbsenceService;
import fr.diginamic.springbootangular.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class AbsenceController {
    @Autowired
    AbsenceService absenceService;

    @PostMapping("absence")
    public String addAbsence(@RequestBody Absence absence) {
        return absenceService.addAbsence(absence);
    }





}
