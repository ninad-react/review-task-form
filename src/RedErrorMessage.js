import { ErrorMessage } from "formik";
import React from "react";

function RedErrorMessage({ name }) {
  return (
    <div style={{ color: "red", fontSize:"12px" }}>
      <ErrorMessage name={name} />
    </div>
  );
}

export default RedErrorMessage;