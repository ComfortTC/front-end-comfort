import React from "react";
import { Field } from "formik";

function RadioButtonField({ className, valid, error, ...props }) {
    return <Field className={className} {...props} />;
}

export default RadioButtonField;