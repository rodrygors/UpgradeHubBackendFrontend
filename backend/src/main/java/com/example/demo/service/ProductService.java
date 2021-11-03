package com.example.demo.service;

import com.example.demo.exception.InvoiceNotFound;
import com.example.demo.exception.ProductNotFound;
import com.example.demo.model.Invoice;
import com.example.demo.model.Product;
import com.example.demo.repository.InvoiceRepository;
import com.example.demo.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class ProductService {

    private final ProductRepository productRepository;
    private final InvoiceRepository invoiceRepository;

    public ProductService(ProductRepository productRepository, InvoiceRepository invoiceRepository) {
        this.productRepository = productRepository;
        this.invoiceRepository = invoiceRepository;
    }

    public  Product addProduct(Product product){
        return productRepository.save(product);
    }


    public Product findById(Long id) {
        return productRepository.findById(id).orElseThrow(ProductNotFound::new);

    }
    public Invoice findInvoiceById(Long id) {
        return invoiceRepository.findById(id).orElseThrow(InvoiceNotFound::new);

    }

    public  List<Product> findAll(){
        return productRepository.findAll();
    }

    public void deleteProduct(Long id) {
      Product product=this.findById(id);
      for(Invoice invoice : product.getInvoices()){
          invoice.getInvoice_product().remove(product);
          invoiceRepository.save(invoice);
      }
        productRepository.deleteById(id);
    }
}
