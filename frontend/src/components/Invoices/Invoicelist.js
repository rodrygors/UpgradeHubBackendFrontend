import React from "react";

const InvoiceList = ({ invoices, setInvoiceId }) => {
  return (
    <div className="order_summary">
      <h2>Invoice List</h2>
      {invoices
        ? invoices.map((invoice, index) => (
            <div
              className="summary_card"
              style={{ cursor: "pointer" }}
              key={invoice.id}
              onClick={() => setInvoiceId(invoice.id)}
            >
              <div className="card_item">
                <div className="product_info">
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
                    <h3>total: {invoice.total}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))
        : "Fetching Invoices"}
    </div>
  );
};
export default InvoiceList;