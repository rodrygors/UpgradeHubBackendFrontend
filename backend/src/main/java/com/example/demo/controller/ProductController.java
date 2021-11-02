package com.example.demo.controller;


import com.example.demo.controller.response.ProductResponse;
import com.example.demo.model.Product;
import com.example.demo.service.ProductService;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ProductController {
    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    public List<ProductResponse> createProductResponseList(List<Product> products) {
        List<ProductResponse> productResponseList = new ArrayList<>();

        if (!products.isEmpty()) {
            for (Product product : products) {
                productResponseList.add(product.createProductResponse());
            }
        }
        return productResponseList;
    }
}
