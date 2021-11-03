import axios from "axios";
import React, { useEffect, useState } from "react";
import InvoiceList from "./Invoicelist";

const Invoice = ({ user }) => {
  //Array de invoices
  const [invoices, setUserInvoices] = useState(user.invoices);
  const [products, setProducts] = useState([]);
  const productsEndPoint = "http://localhost:8080/products";

  //Map produtct array
  const productsList = products.map((product) => {
    return (
      <div key={product.id}>
        <h3>{product.name}</h3>
        <p>{product.value}€</p>
        <label>Pick the number of products</label>
        <input type="text" onChange={(e) => console.log(e.target.value)} />
      </div>
    );
  });

  //Get products from API
  useEffect(() => {
    axios.get(productsEndPoint).then((response) => setProducts(response.data));
  }, []);

  return (
    <div>
      <div>
        <form>
          <div>{productsList ? productsList : "The list is empty!"}</div>
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
