package fr.diginamic.springbootangular.controllers;

import fr.diginamic.springbootangular.entities.ClosedDay;
import fr.diginamic.springbootangular.services.ClosedDayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ClosedDayController {
    @Autowired
    ClosedDayService closedDayService;

    @GetMapping("closed-days")
    public List<ClosedDay> getAllClosedDays(){
        return closedDayService.closedDays();
    }

    @PostMapping("closed-days")
    public String createClosedDay(@RequestBody ClosedDay closedDay){
        closedDayService.addClosedDay(closedDay);
        return "Closed day added successfully";
    }

    @DeleteMapping("closed-days/{id}")
    public String removeClosedDay(@PathVariable("id") long id){
        closedDayService    .deleteClosedDay(id);
        return "Delete succeed";
    }
}
