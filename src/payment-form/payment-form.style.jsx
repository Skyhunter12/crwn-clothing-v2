import styled from "styled-components";
import Button from "../utils/button/button.component";

export const PaymentFormContainer = styled.div`
  width: 70vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const PaymentHeader = styled.h2`
  margin: 10px 0;
`;

export const PaymentFormGroup = styled.div`
  width: 100%;
  margin-bottom: 20px;
  & > label {
    margin-bottom: 5px;
  }
    & > input {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
    & > button {
        width: 50px;
        padding: 10px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        &:hover {
            background-color: #0056b3;
        }
    }
`;

export const PaymentButton = styled(Button)`
  margin-top: 20px;
  margin-left: 78%;
  width: calc(100% - 78%);
`;