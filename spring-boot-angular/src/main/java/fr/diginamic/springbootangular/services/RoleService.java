package fr.diginamic.springbootangular.services;

import fr.diginamic.springbootangular.entities.Role;
import fr.diginamic.springbootangular.entities.User;
import fr.diginamic.springbootangular.repositories.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleService {
    @Autowired
    RoleRepository roleRepository;

    public List<Role> roles(){
        return roleRepository.findAll();
    }
    public void addRole(Role newRole) {
        roleRepository.save(newRole);
    }

}
