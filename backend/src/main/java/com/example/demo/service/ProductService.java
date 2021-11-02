package com.example.demo.service;

import com.example.demo.exception.ProductNotFound;
import com.example.demo.model.Product;
import com.example.demo.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public  Product addProduct(Product product){
        return productRepository.save(product);
    }


    public Product findById(Long id) {
        return productRepository.findById(id).orElseThrow(ProductNotFound::new);

    }

    public  List<Product> findAll(){
        return productRepository.findAll();
    }
}
