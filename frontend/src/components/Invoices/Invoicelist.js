import React from "react";

import { useState } from "react";
import UserForm from "./UserForm";



const InvoiceList = ({ invoiceList, user }) => {

  const [edit, setEdit] = useState(false);

  const [invoice, setInvoice] = useState({
    id: "",
    number: "",
    products: [],
    total: "",
    username: user.name
    });


  return (
    <div>
      {invoiceList.map( (invoice) => <div>
          <h1>{invoice.name}</h1>
          <h3>Number: #{invoice.number}</h3>
          <h3>products: {/*invoice.products*/}</h3>
          <h3>total: {invoice.total}</h3>
          <h4>user: {invoice.username}</h4>
         

         </div> )}
</div>
  )
}
export default InvoiceList;