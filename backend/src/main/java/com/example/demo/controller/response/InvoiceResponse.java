package com.example.demo.controller.response;

import lombok.*;

import java.util.List;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class InvoiceResponse {
    private Long id;
    private int number;
    private float total;
    private List<ProductResponse> productResponseList;
}
