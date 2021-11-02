import React, { useState } from "react";
import InvoiceList from "./Invoicelist";

const Invoice = ({ user }) => {
  //Array de invoices
  const [invoices, setUserInvoices] = useState(user.invoices);

  //Get products from API

  return (
    <div>
      <div>
        <form>
          <label>
            Invoice Number
            <input type="number" />
          </label>
          <p>Total: </p>
        </form>
      </div>
      <div>
        <InvoiceList invoices={invoices} />
      </div>
    </div>
  );
};

export default Invoice;
