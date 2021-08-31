package fr.diginamic.springbootangular.controllers;

import fr.diginamic.springbootangular.entities.User;
import fr.diginamic.springbootangular.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class UserController {
    @Autowired
    UserService userService;

    @GetMapping("users")
    public List<User> getAllUsers(){
        return userService.users();
    }

    @GetMapping("user/{login}")
    public User getUserByLogin(@PathVariable("login") String login){
        return userService.getUserByLogin(login);
    }
    
    @GetMapping("user/{login}/{password}")
    public User getUserByLoginPassword(@PathVariable("login") String login, @PathVariable("password") String password){
        return userService.getUserByLoginPassword(login, password);
    }

    @PostMapping("user")
    public void createUser(@RequestBody User user) {
        userService.addUser(user);
    }


}
