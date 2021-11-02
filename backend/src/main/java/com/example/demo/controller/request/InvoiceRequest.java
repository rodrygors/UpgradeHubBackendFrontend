package com.example.demo.controller.request;

import com.example.demo.model.Invoice;
import com.example.demo.model.Product;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class InvoiceRequest {
    private int number;
    private float total;

    @JsonIgnore
    public Invoice createInvoice(List<Product> products){
        return Invoice
                .builder()
                .number(this.number)
                .total(this.total)
                .invoice_product(products)
                .build();
    }
}
