package com.example.demo.exception;

public class UsernameAlreadyExists extends RuntimeException {
    public UsernameAlreadyExists() {
        super("Username Already Exists.");
    }

    public UsernameAlreadyExists(String message) {
        super(message);
    }
}