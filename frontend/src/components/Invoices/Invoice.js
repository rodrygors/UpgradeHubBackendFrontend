import axios from "axios";
import React, { useEffect, useState } from "react";
import InvoiceList from "./Invoicelist";

const Invoice = ({ user }) => {
  //States
  const [invoices, setUserInvoices] = useState(user.invoices);
  const [products, setProducts] = useState([]);
  const productsEndPoint = "http://localhost:8080/products";
  const [productIds, setProductIds] = useState({
    productIdsList: [],
    userId: user.id,
  });

  //Get products from API
  useEffect(() => {
    axios.get(productsEndPoint).then((response) => setProducts(response.data));
  }, []);

  //Map produtct array & Add the add button to add products and remove button
  const productsList = products.map((product) => {
    return (
      <div key={product.id}>
        <h3>{product.name}</h3>
        <p>{product.value}€</p>
        <label>Pick the number of products</label>
        <button
          type="button"
          onClick={() => {
            setProductIds((prev) => ({
              ...prev,
              productIdsList: [...prev.productIdsList, product.id],
            }));
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            setProductIds((prev) => ({
              ...prev,
              productIdsList: prev.productIdsList.filter(
                (productID) => productID !== product.id
              ),
            }));
          }}
        >
          Remove
        </button>
      </div>
    );
  });

  //Create invoice -> make the request
  const createInvoice = (e) => {
    e.preventDefault();
    console.log(productIds);
  };

  return (
    <div>
      <div>
        <form onSubmit={createInvoice}>
          <div>{productsList ? productsList : "The list is empty!"}</div>
          <p>Products Picked:</p>
          {productIds.productIdsList.map((productId, index) => (
            <li key={index}>{productId}</li>
          ))}
          <button type="submit">Submit Invoice</button>
        </form>
      </div>
      <div>
        <InvoiceList invoices={invoices} />
      </div>
    </div>
  );
};

export default Invoice;
