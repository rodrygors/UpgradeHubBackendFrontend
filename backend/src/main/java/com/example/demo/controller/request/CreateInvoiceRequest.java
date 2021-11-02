package com.example.demo.controller.request;

import com.example.demo.model.Invoice;
import com.example.demo.model.Product;
import com.example.demo.model.User;
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
public class CreateInvoiceRequest {
    private int number;
    private float total;
    private Long userId;
    private List<Long> productIdList;

    @JsonIgnore
    public Invoice createInvoice(User user, List<Product> products){
        return Invoice
                .builder()
                .number(this.number)
                .total(this.total)
                .user(user)
                .invoice_product(products)
                .build();
    }
}
