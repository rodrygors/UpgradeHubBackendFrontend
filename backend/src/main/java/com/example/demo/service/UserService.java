package com.example.demo.service;

import com.example.demo.controller.response.UserResponse;
import com.example.demo.exception.UserNotFound;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> findAllUsers() {

        return userRepository.findAll();
    }


    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    public User updateUser(Long id, String name,String password,int age) {
        User user = this.findUserById(id);
        user.setName(name);
       user.setPassword(password);
        user.setAge(age);
        return userRepository.save(user);
    }

    private User findUserById(Long id) {
        return userRepository.findById(id).orElseThrow(UserNotFound::new);
    }
}
