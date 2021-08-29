package fr.diginamic.springbootangular.controllers;

import fr.diginamic.springbootangular.services.DepartmentService;
import fr.diginamic.springbootangular.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DepartmentController {
    @Autowired
    DepartmentService departmentService;






}
