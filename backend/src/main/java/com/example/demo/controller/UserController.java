package com.example.demo.controller;

import com.example.demo.controller.request.UserRequest;
import com.example.demo.model.User;
import com.example.demo.controller.response.UserResponse;
import com.example.demo.service.UserService;
import org.springframework.web.bind.annotation.*;

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
    @GetMapping(value = "/users")
    public List<UserResponse> getAllUsers(){
        return createUserResponseList(userService.findAllUsers());
    }
    @PutMapping(value = "/user/{id}")
    public User updateUser(@PathVariable(value = "id") Long id, @RequestBody UserRequest userRequest){
        return userService.updateUser(
                id,
                userRequest.getName(),
                userRequest.getPassword(),
                userRequest.getAge());
    }
    @DeleteMapping(value = "/user/{id}")
    public void deleteUser(@PathVariable(value = "id") Long id){
        userService.deleteUser(id);
    }
}
