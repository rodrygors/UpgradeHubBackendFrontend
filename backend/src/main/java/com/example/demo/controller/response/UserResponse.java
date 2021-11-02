package com.example.demo.controller.response;

import lombok.*;

import java.util.List;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserResponse {
    private Long id;
    private String name;
    private String password;
    private int age;
    private List<InvoiceResponse> invoiceResponseList;
}
