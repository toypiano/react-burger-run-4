import React from "react";
import styled from "styled-components";
import Burger from "../burgerBuilder/Burger/Burger";
import Button from "../../common/UI/Button";

const StyledCheckoutSummary = styled.div`
  text-align: center;
  width: 80%;
  @media (min-width: 576px) {
    width: 500px;
  }
  margin: 5em auto 0 auto;
`;
const BurgerWrapper = styled.div`
  width: 100%;
  margin: -30px auto 0 auto;
`;

// TODO: set height only high as the height of the burger (remove empty spaces)
// don't need extra space because user can't modify burger at this point
const CheckoutSummary = props => (
  <StyledCheckoutSummary>
    <h1>Here's your tasty burger!</h1>
    <BurgerWrapper>
      <Burger ingredients={props.ingredients} />
    </BurgerWrapper>
    <Button btnType="Danger" clicked={props.cancelCheckout}>
      Cancel
    </Button>
    <Button btnType="Success" clicked={props.continueCheckout}>
      Continue
    </Button>
  </StyledCheckoutSummary>
);

export default CheckoutSummary;
