import React, { useEffect } from "react";

const InvoiceDetail = ({ invoiceId }) => {
  const invoiceIdEndPoint = "";

  useEffect(() => {
    console.log(invoiceId);
  }, [invoiceId]);

  return <div>hi</div>;
};

export default InvoiceDetail;
