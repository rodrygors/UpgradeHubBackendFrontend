package com.example.demo.exception;

import com.example.demo.controller.HttpErrorResponse;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;

@RestControllerAdvice
public class ExceptionsHandler {
    @ExceptionHandler({ProductNotFound.class})
    @ResponseStatus(HttpStatus.CONFLICT)
    public HttpErrorResponse handleGenericException(ProductNotFound exception) {
        return new HttpErrorResponse(
                409,
                exception.getMessage(),
                LocalDateTime.now()
        );
    }
    @ExceptionHandler({InvoiceNotFound.class})
    @ResponseStatus(HttpStatus.CONFLICT)
    public HttpErrorResponse handleGenericException(InvoiceNotFound exception) {
        return new HttpErrorResponse(
                409,
                exception.getMessage(),
                LocalDateTime.now()
        );
    }
    @ExceptionHandler({UserNotFound.class})
    @ResponseStatus(HttpStatus.CONFLICT)
    public HttpErrorResponse handleGenericException(UserNotFound exception) {
        return new HttpErrorResponse(
                409,
                exception.getMessage(),
                LocalDateTime.now()
        );
    }
}
