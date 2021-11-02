package com.example.demo.exception;

public class UserNotFound extends RuntimeException {
    public UserNotFound() {
        super("User Not Found.");
    }

    public UserNotFound(String message) {
        super(message);
    }
}