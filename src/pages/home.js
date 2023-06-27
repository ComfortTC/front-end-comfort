import data from "../api/questions.json";
import { useState } from "react";
import { Form, TextField, RadioField } from "../components/element";

import { PageWrapper, Wrapper, MultiRadioWrapper, Label } from "./styles";

export default function Home() {
  const [activeYes, setActiveYes] = useState(false);
  const [activeNo, setActiveNo] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [companyNameError, setCompanyNameError] = useState("");
  const [formData] = useState({
    name: "",
    email: "",
    role: "",
  });

  const onSubmit = (values, { setSubmitting, resetForm, setStatus }) => {
    setSubmitting(false);
  };

  const validateCompanyName = () => {
    if (activeYes && companyName.trim() === "") {
      setCompanyNameError("Company name is required");
    } else {
      setCompanyNameError("");
    }
  };

  const handleOnChange = (e) => {
    if (e.target.value === "YES") {
      setActiveYes(true);
      setActiveNo(false);
      setCompanyName("");
      setCompanyNameError("");
    } else {
      setActiveYes(false);
      setActiveNo(true);
      setCompanyName(e.target.value);
      validateCompanyName();
    }
  };

  return (
    <PageWrapper>
      <Form enableReinitialize initialValues={formData} onSubmit={onSubmit}>
        {data.questions.map((field, index) => {
          if (field.type === "text") {
            const condition = field.conditions[0];
            if (condition && eval(activeYes + condition.operator + condition.value)) {
              return (
                <div key={index}>
                  <TextField
                    name={field.code}
                    label={field.text}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                  {activeYes && companyNameError && (
                    <div style={{ color: "red" }}>{companyNameError}</div>
                  )}
                </div>
              );
            }
          }

          if (field.type === "bool") {
            return (
              <Wrapper key={index} role="group" aria-labelledby="my-radio-group" onChange={handleOnChange}>
                <Label>{field.text}</Label>
                <MultiRadioWrapper>
                  <RadioField
                    name={field.code}
                    label={field.falseLabel}
                    value={field.falseLabel}
                    active={activeNo}
                  />
                  <RadioField
                    name={field.code}
                    label={field.trueLabel}
                    value={field.trueLabel}
                    active={activeYes}
                  />
                </MultiRadioWrapper>
              </Wrapper>
            );
          }
        })}
      </Form>
    </PageWrapper>
  );
}
