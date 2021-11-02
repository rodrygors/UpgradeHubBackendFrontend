package com.example.demo.controller;

import com.example.demo.model.Invoice;
import com.example.demo.model.response.InvoiceResponse;
import com.example.demo.service.InvoiceService;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class InvoiceController {
    private final InvoiceService invoiceService;

    public InvoiceController(InvoiceService invoiceService) {
        this.invoiceService = invoiceService;
    }

    public List<InvoiceResponse> createInvoiceResponseList(List<Invoice> invoices){
        List<InvoiceResponse> invoiceResponseList = new ArrayList<>();

        if(!invoices.isEmpty()){
            for (Invoice invoice : invoices) {
                invoiceResponseList.add(invoice.createInvoiceResponse());
            }
        }
        return invoiceResponseList;
    }
}
