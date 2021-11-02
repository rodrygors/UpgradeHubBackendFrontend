package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.model.response.UserResponse;
import com.example.demo.service.UserService;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    public List<UserResponse> createUserResponseList(List<User> users){
        List<UserResponse> userResponseList = new ArrayList<>();

        if(!users.isEmpty()){
            for (User user : users) {
                userResponseList.add(user.createUserResponse());
            }
        }
        return userResponseList;
    }
}
