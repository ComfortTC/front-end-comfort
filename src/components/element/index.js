import React from 'react';
import {
    Formik,
    Form as FormikForm,
    ErrorMessage,
} from 'formik';
import { RadioWrapper, Input, Label, Radio, Icon, Container } from '../../pages/styles';
import Info from '../../assets/icon-info.svg';

export function Form(props) {
    return (
        <Formik
            {...props}
        >
            <FormikForm className="needs-validation" noValidate="">
                {props.children}
            </FormikForm>
        </Formik>)
}

export function TextField(props) {
    const { name, label, placeholder, text, ...rest } = props
    return (
        <>
            {label && <Label htmlFor={name}>{label}</Label>}
            <Container>
                <Input
                    className="form-control"
                    type={text}
                    name={name}
                    id={name}
                    placeholder={placeholder || ""}
                    {...rest}
                />
                <Icon>
                    <img src={Info} alt="info" />
                </Icon>
            </Container>
            <ErrorMessage name={name} render={msg => <div style={{ color: 'red' }} >{msg}</div>} />
        </>
    )
}

export function RadioField(props) {
    const { name, label, value, active, ...rest } = props
    return (
        <>
            {
                label && <RadioWrapper active={active}>
                    <Radio
                        className="form-control"
                        type="radio"
                        name={name}
                        id={name}
                        value={value}
                        {...rest} />
                    <label htmlFor={name}>{label}</label>
                </RadioWrapper>
            }

        </>
    )
}
