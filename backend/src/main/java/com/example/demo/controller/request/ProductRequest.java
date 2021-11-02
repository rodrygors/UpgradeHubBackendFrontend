package com.example.demo.controller.request;

import com.example.demo.model.Product;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

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
