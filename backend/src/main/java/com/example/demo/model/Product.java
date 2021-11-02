package com.example.demo.model;

import com.example.demo.model.response.ProductResponse;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private float value;

    @ManyToMany(mappedBy = "invoice_product", cascade = CascadeType.ALL)
    private List<Invoice> invoices;

    @JsonIgnore
    public ProductResponse createProductResponse(){
        return new ProductResponse(
                this.id,
                this.name,
                this.value
        );
    }
}
