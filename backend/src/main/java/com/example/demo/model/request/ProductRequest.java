package com.example.demo.model.request;

import com.example.demo.model.Invoice;
import com.example.demo.model.Product;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.Entity;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProductRequest {
    private String name;
    private float value;

    @JsonIgnore
    public Product createProduct(){
        return Product
                .builder()
                .name(this.name)
                .value(this.value)
                .build();
    }
}
