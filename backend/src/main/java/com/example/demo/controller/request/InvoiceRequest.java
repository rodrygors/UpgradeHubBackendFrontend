package com.example.demo.controller.request;

import com.example.demo.model.Invoice;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class InvoiceRequest {
    private int number;
    private float total;

    @JsonIgnore
    public Invoice createInvoice(){
        return Invoice
                .builder()
                .number(this.number)
                .total(this.total)
                .build();
    }
}
