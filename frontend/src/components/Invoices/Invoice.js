import axios from "axios";
import React, { useEffect, useState } from "react";
import InvoiceList from "./Invoicelist";
import InvoiceDetail from "./InvoiceDetail";

const Invoice = ({ user }) => {
  //States
  const productsEndPoint = "http://localhost:8080/products";
  const invoiceEndPoint = "http://localhost:8080/invoices";
  const [invoices, setUserInvoices] = useState(user.invoices);
  const [products, setProducts] = useState([]);
  const [productIds, setProductIds] = useState({
    productIdsList: [],
    userId: user.id,
  });
  const [invoiceId, setInvoiceId] = useState(null);

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
          type="button"
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

    // axios
    //   .post(invoiceEndPoint, productIds)
    //   .then((response) => console.log(response));

    fetch(invoiceEndPoint, {
      method: "POST",
      body: JSON.stringify(productIds),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
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
        <InvoiceList setInvoiceId={setInvoiceId} invoices={invoices} />
      </div>
      <div>
        <InvoiceDetail invoiceId={invoiceId} />
      </div>
    </div>
  );
};

export default Invoice;
