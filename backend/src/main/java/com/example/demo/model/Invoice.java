package com.example.demo.model;

import com.example.demo.controller.response.InvoiceResponse;
import com.example.demo.controller.response.ProductResponse;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Invoice {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int number;

    private float total;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_User")
    private User user;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "invoice_product",
            joinColumns = @JoinColumn(name = "invoiceId"),
            inverseJoinColumns = @JoinColumn(name = "productId"))
    private List<Product> invoice_product = new ArrayList<>();

    @JsonIgnore
    public InvoiceResponse createInvoiceResponse(){
        List<ProductResponse> productResponseList = new ArrayList<>();
        if(!invoice_product.isEmpty()){
            for(Product product : invoice_product){
                productResponseList.add(product.createProductResponse());
            }
        }
        return new InvoiceResponse(
                this.id,
                this.number,
                this.total,
                productResponseList
        );
    }
}
