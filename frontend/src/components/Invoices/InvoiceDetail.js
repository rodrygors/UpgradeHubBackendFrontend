import axios from "axios";
import React, { useEffect, useState } from "react";

const InvoiceDetail = ({ invoiceId }) => {
  const invoiceIdEndPoint = `http://localhost:8080/invoices/${invoiceId}`;
  const [invoice, setInvoice] = useState([]);

  //Get invoice ID
  useEffect(() => {
    if (invoiceId) {
      axios.get(invoiceIdEndPoint).then((response) => {
        setInvoice([response.data]);
      });
    }
  }, [invoiceId, invoiceIdEndPoint]);

  return (
    <div>
      <h2>Invoice Detail</h2>
      {invoice.map((invoice) => {
        return (
          <div className="summary_card" key={invoice.id}>
            <h1>Id: {invoice.id}</h1>
            <div>
              {invoice.products.map((product) => {
                return (
                  <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>Valor: {product.value}€</p>
                  </div>
                );
              })}
            </div>
            <p>Total: {invoice.total}€</p>
          </div>
        );
      })}
    </div>
  );
};

export default InvoiceDetail;
