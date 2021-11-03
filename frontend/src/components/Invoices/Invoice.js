import axios from "axios";
import React, { useEffect, useState } from "react";
import InvoiceList from "./Invoicelist";
import InvoiceDetail from "./InvoiceDetail";
import "./Invoice.css";

const Invoice = ({ user }) => {
  //States
  const productsEndPoint = "http://localhost:8080/products";
  const invoiceEndPoint = "http://localhost:8080/invoices";
  const [invoices, setUserInvoices] = useState(user.invoices);
  const [products, setProducts] = useState([]);
  const [productIds, setProductIds] = useState({
    productIdList: [],
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
      <div classname="container" key={product.id}>
        <h3 className="container-title">{product.name}</h3>
        <p>{product.value}€</p>

        <label>Pick the number of products</label>
        <button
          type="button"
          className="pqt-plus"
          onClick={() => {
            setProductIds((prev) => ({
              ...prev,
              productIdList: [...prev.productIdList, product.id],
            }));
          }}
        >
          +
        </button>
        <button
          type="button"
          className="pqt-minus"
          onClick={() => {
            setProductIds((prev) => ({
              ...prev,
              productIdList: prev.productIdList.filter(
                (productID) => productID !== product.id
              ),
            }));
          }}
        >
          -
        </button>
      </div>
    );
  });

  //Create invoice -> make the request
  const createInvoice = (e) => {
    e.preventDefault();

    axios.post(invoiceEndPoint, productIds).then((response) => {
      setUserInvoices((prev) => [...prev, response.data]);
    });
  };

  return (
    <div className="container-flex">
      <div>
        <form onSubmit={createInvoice}>
          <div>
            <h2>Choose your product</h2>
            {productsList ? productsList : "The list is empty!"}
          </div>
          <div classname="shipping_card">
            <div classname="new_card">
              <p classname="picked">Products ID Picked:</p>
              {productIds.productIdList.map((productId, index) => (
                <li key={index}>{productId}</li>
              ))}
            </div>
          </div>
          <div className="proced_payment">
            <button classname="submit_button" type="submit">Submit Invoice</button>
          </div>
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
