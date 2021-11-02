package com.example.demo.exception;

public class InvoiceNotFound extends RuntimeException {
    public InvoiceNotFound() {
        super("Invoice Not Found.");
    }

    public InvoiceNotFound(String message) {
        super(message);
    }
}