package com.example.demo.controller.request;

import com.example.demo.model.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserRequest {
    private String name;
    private String password;
    private int age;

    @JsonIgnore
    public User createUser(){
        return User
                .builder()
                .name(this.name)
                .password(this.password)
                .age(this.age)
                .build();
    }
}
