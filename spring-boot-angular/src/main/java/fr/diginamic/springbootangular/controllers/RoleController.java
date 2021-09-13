package fr.diginamic.springbootangular.controllers;

import fr.diginamic.springbootangular.services.RoleService;
import fr.diginamic.springbootangular.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class RoleController {
    @Autowired
    RoleService roleService;






}
