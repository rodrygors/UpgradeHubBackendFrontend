import React from "react";

const InvoiceList = ({ invoices }) => {
  return (
    <div>
      {invoices
        ? invoices.map((invoice, index) => (
            <div key={index}>
              <h1>{invoice.name}</h1>
              <h3>Number: #{invoice.number}</h3>
              <div>
                {invoice.products.map((product) => {
                  return (
                    <div>
                      <h4>{product.name}</h4>
                    </div>
                  );
                })}
              </div>
              <h3>total: {invoice.total}</h3>
            </div>
          ))
        : "Fetching Invoices"}
    </div>
  );
};
export default InvoiceList;