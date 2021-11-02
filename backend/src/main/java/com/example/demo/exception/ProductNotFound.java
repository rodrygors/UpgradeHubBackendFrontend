package com.example.demo.exception;

public class ProductNotFound extends RuntimeException {
    public ProductNotFound() {
        super("Product Not Found.");
    }

    public ProductNotFound(String message) {
        super(message);
    }
}