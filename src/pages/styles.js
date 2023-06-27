import styled, { css } from "styled-components";
import InputField from '../components/input/index';
import RadioButtonField from '../components/radio-button/index';

export const PageWrapper = styled.section`
  &,
  & * {
    box-sizing: border-box;
    display: block;
  }

  hr {
    display: block;
    border: none;
    border-top: 1px solid lightgrey;

    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  font-family: system-ui;
  font-size: 14px;
  line-height: 1.1rem;
  max-width: 35em;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1.5rem;
  padding: 1rem 0.75rem;
  border: 1px solid lightgrey;
  border-radius: 4px;
`;



export const Input = styled(InputField)`
  background-color: white;
  border: none;
  border-bottom: 1px solid lightgrey;
  font-size: 16px;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 400;
  width: 100%;
  margin: 10px;
  margin-right: 0px;

  &:focus,
  &:active {
    border: none;
    border-bottom: 1px solid blue;
    outline: none;
  }

  /* Autocomplete styles in Chrome*/
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    background-color: white;
    border: 1px solid lightgrey;
    box-shadow: 0 0 0px 1000px #fff inset;
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: black;
  }

  ${({ valid }) =>
    valid &&
    css`
      border: none;
      border-bottom: 1px solid red;


      /* Autocomplete styles in Chrome*/
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 1px solid rgb(0, 156, 38);
      }
    `}
`;

export const Label = styled.label`
  margin-left: 10px;
  width: 100%;
`;

export const InputLabel = styled.label`
  margin-left: 10px;
  width: 100%;
  input:focus ~ & {
    color: blue;
  }
`;

export const StyledInlineErrorMessage = styled.div`
  color: rgb(120, 27, 0);
  display: block;
  margin-top: 0.5rem;
  white-space: pre-line;
`;

export const Wrapper = styled.div`
   display: inline-block;
`;

export const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 35px;
  width: 90px;
  border: 1px solid ${(props) => (props.active ? '#0E86D4' : '#ccc')};
  box-sizing: border-box;
  border-radius: 5px;
  margin: 10px;
  background: ${(props) => (props.active ? '#D4F1F4' : 'white')};
  &::before {
    border-radius: 100%;
    background:#000;
  }
`;

export const MultiRadioWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 2px;
  margin-bottom: 10px;
`;

export const Icon = styled.div`
  flex: 0 0;
`;

export const Container = styled.div`
  font-family: 'Arial';
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Radio = styled(RadioButtonField)`
  height: 20px;
  width: 20px;
  cursor: pointer;
  appearance: none;
  border-radius: 50%;
  border: 1px solid #ccc;
  transition: 0.1s all linear;
  &:checked {
    border: 6px solid blue;
  }
`;