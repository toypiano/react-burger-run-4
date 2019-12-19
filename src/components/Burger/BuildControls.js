import React from "react";
import styled from "styled-components";
import BuildControl from "./BuildControl";

const Wrapper = styled.div`
  width: 100%;
  background-color: #cf8f2e;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 1px #ccc;
  margin: auto;
  padding: 10px 0;
`;

const BuildControls = props => {
  const controlItems = ["salad", "bacon", "cheese", "meat"];
  const controls = controlItems.map(item => (
    <BuildControl key={item} label={item} />
  ));

  return <Wrapper>{controls}</Wrapper>;
};

export default BuildControls;
