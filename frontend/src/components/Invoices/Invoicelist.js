import React from "react";

const InvoiceList = ({ invoices }) => {
  return (
    <div>
      {invoices
        ? invoices.map((invoice) => (
            <div>
              <h1>{invoice.name}</h1>
              <h3>Number: #{invoice.number}</h3>
              <h3>products: {/*invoice.products*/}</h3>
              <h3>total: {invoice.total}</h3>
            </div>
          ))
        : "Fetching Invoices"}
    </div>
  );
};
export default InvoiceList;