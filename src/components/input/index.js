import React from "react";
import { Field } from "formik";

function InputField({ className, valid, error, ...props }) {
    return <Field className={className} {...props} />;
}

export default InputField;