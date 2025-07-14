import styled from "styled-components";
import {
  googleSignInButton,
  invertedButton,
  BaseButton,
} from "../../utils/button/button.style"; // Importing Button component for type usage
export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  ${BaseButton}, ${googleSignInButton}, ${invertedButton} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
   {
    font-size: 18px;
    margin: 50px auto;
  }
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const CartItemButton = styled.button`
  min-width: 165px;
  margin-top: auto;
`;
