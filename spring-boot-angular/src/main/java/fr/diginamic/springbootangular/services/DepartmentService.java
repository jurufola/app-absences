package fr.diginamic.springbootangular.services;

import fr.diginamic.springbootangular.entities.Department;
import fr.diginamic.springbootangular.entities.User;
import fr.diginamic.springbootangular.repositories.DepartmentRepository;
import fr.diginamic.springbootangular.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartmentService {
    @Autowired
    DepartmentRepository departmentRepository;
    public List<Department> departments(){
        return departmentRepository.findAll();
    }
}
