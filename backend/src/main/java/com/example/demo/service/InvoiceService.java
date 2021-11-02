package com.example.demo.service;

import com.example.demo.controller.request.CreateInvoiceRequest;
import com.example.demo.controller.response.InvoiceResponse;
import com.example.demo.exception.InvoiceNotFound;
import com.example.demo.exception.ProductNotFound;
import com.example.demo.exception.UserNotFound;
import com.example.demo.model.Invoice;
import com.example.demo.model.Product;
import com.example.demo.model.User;
import com.example.demo.repository.InvoiceRepository;
import com.example.demo.repository.ProductRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class InvoiceService {
    private final InvoiceRepository invoiceRepository;
    private final UserRepository userRepository;
    private final ProductRepository productRepository;

    public InvoiceService(InvoiceRepository invoiceRepository, UserRepository userRepository, ProductRepository productRepository) {
        this.invoiceRepository = invoiceRepository;
        this.userRepository = userRepository;
        this.productRepository = productRepository;
    }

    private User findUserById(Long id){
        return userRepository.findById(id).orElseThrow(UserNotFound::new);
    }

    public Invoice findInvoiceById(Long id){
        return invoiceRepository.findById(id).orElseThrow(InvoiceNotFound::new);
    }

    public Product findProductById(Long id){
        return productRepository.findById(id).orElseThrow(ProductNotFound::new);
    }

    public List<Invoice> findInvoiceByUserId(Long userId) {
        return this.findUserById(userId).getInvoices();
    }

    public Invoice createInvoice(CreateInvoiceRequest createInvoiceRequest) {
        List<Product> products = new ArrayList<>();
        for(Long productId : createInvoiceRequest.getProductIdList()){
            products.add(this.findProductById(productId));
        }
        User user = this.findUserById(createInvoiceRequest.getUserId());

        return invoiceRepository.save(createInvoiceRequest.createInvoice(user, products));
    }
}
