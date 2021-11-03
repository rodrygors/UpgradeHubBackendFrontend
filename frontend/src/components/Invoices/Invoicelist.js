import React from "react";

const InvoiceList = ({ invoices, setInvoiceId }) => {
  return (
    <div>
      {invoices
        ? invoices.map((invoice, index) => (
            <div key={invoice.id}>
              <div onClick={() => setInvoiceId(invoice.id)}>
                <h1>{invoice.name}</h1>
                <h3>Number: #{invoice.number}</h3>
                <div>
                  {invoice.products.map((product, index) => {
                    return (
                      <div key={index}>
                        <h4>{product.name}</h4>
                      </div>
                    );
                  })}
                </div>
              </div>
              <h3>total: {invoice.total}</h3>
            </div>
          ))
        : "Fetching Invoices"}
    </div>
  );
};
export default InvoiceList;