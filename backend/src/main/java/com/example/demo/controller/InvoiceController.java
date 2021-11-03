package com.example.demo.controller;

import com.example.demo.controller.request.CreateInvoiceRequest;
import com.example.demo.controller.response.ProductResponse;
import com.example.demo.model.Invoice;
import com.example.demo.controller.response.InvoiceResponse;
import com.example.demo.service.InvoiceService;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class InvoiceController {
    private final InvoiceService invoiceService;

    public InvoiceController(InvoiceService invoiceService) {
        this.invoiceService = invoiceService;
    }

    public List<InvoiceResponse> createInvoiceResponseList(List<Invoice> invoices) {
        List<InvoiceResponse> invoiceResponseList = new ArrayList<>();

        if (!invoices.isEmpty()) {
            for (Invoice invoice : invoices) {
                invoiceResponseList.add(invoice.createInvoiceResponse());
            }
        }
        return invoiceResponseList;
    }

    @GetMapping(value = "/invoices/users/{id}")
    public List<InvoiceResponse> getInvoicesByUserId(@PathVariable(value = "id") Long userId) {
        return createInvoiceResponseList(invoiceService.findInvoiceByUserId(userId));
    }

    @GetMapping(value = "/invoices/{id}")
    public InvoiceResponse getInvoiceById(@PathVariable(value = "id") Long id) {
        return invoiceService.findInvoiceById(id).createInvoiceResponse();
    }

    @GetMapping(value = "/invoices/highest-bills")
    public List<InvoiceResponse> getHighestBills(){
        return createInvoiceResponseList(invoiceService.getHighestBills());
    }

    @PostMapping(value = "/invoices/")
    public InvoiceResponse createInvoice(@RequestBody CreateInvoiceRequest createInvoiceRequest) {
        return invoiceService.createInvoice(createInvoiceRequest.getUserId(), createInvoiceRequest.getProductIdList()).createInvoiceResponse();
    }

    @PutMapping(value = "/invoices/{invoiceId}/products/{productId}")
    public InvoiceResponse addProductToInvoice(@PathVariable(value = "productId") Long productId, @PathVariable(value = "invoiceId") Long invoiceId) {
        return invoiceService.addProductToInvoice(productId, invoiceId).createInvoiceResponse();
    }

    @DeleteMapping(value = "/invoice/{id}")
    public void deleteInvoice(@PathVariable(value = "id") Long id) {
        invoiceService.deleteInvoice(id);
    }
}