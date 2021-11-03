package com.example.demo.exception;

public class SortingMethodNotFound extends RuntimeException {
    public SortingMethodNotFound() {
        super("Sorting Method Not Identified.");
    }

    public SortingMethodNotFound(String message) {
        super(message);
    }
}