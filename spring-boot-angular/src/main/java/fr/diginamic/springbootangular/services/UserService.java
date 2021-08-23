package fr.diginamic.springbootangular.services;

import fr.diginamic.springbootangular.entities.User;
import fr.diginamic.springbootangular.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public List<User> users(){
        return userRepository.findAll();
    }
    public void addUser(User newUser) {
        userRepository.save(newUser);
    }

}
