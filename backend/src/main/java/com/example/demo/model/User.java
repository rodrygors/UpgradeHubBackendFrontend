package com.example.demo.model;

import com.example.demo.controller.response.InvoiceResponse;
import com.example.demo.controller.response.UserResponse;
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
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String password;
    private int age;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Invoice> invoices = new ArrayList<>();

    @JsonIgnore
    public UserResponse createUserResponse(){
        List<InvoiceResponse> invoiceResponseList = new ArrayList<>();

        if(!invoices.isEmpty()){
            for (Invoice invoice : invoices) {
                invoiceResponseList.add(invoice.createInvoiceResponse());
            }
        }

        return new UserResponse(
                this.id,
                this.name,
                this.password,
                this.age,
                invoiceResponseList
        );
    }
}
