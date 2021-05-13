import React from "react";
import styled from "styled-components";
import Transition from "./Transition";

const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: auto;
  overflow: hidden;
`;

const Main = () => {
  return (
    <>
      <Transition />
      <Container></Container>
    </>
  );
};

export default Main;
