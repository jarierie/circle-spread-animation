import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  background-color: white;
  overflow: hidden;

  div {
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 20px;
    height: 20px;
    background-color: black;
    border-radius: 50%;
  }
`;

const Transition = () => {
  const ref = useRef(null);

  //animation :

  const animation = () => {
    const tl = gsap.timeline();
    tl.fromTo(
      ref.current,
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 150, duration: 1.5, delay: 2 }
    ).to(ref.current, { backgroundColor: "#f5f5f5", duration: 1 });
  };

  useEffect(() => {
    animation();
  }, []);
  return (
    <>
      <Container>
        <div ref={ref}></div>
      </Container>
    </>
  );
};

export default Transition;
