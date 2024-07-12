import React from "react";
import { Document, Page } from "react-pdf";

const PDF = ({ pdfUrl }) => {
  return (
    // <Document file={pdfUrl}>
    //   <Page pageNumber={1} width="100%" height="600px" />
    // </Document>
    <embed
      src={pdfUrl}
      type="application/pdf"
      width="100%"
      height="650px"
      allow="autoplay"
    />
  );
};

export default PDF;
