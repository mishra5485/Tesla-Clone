import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model-S"
        description="Order Online For Touuchless Delivery"
        backgroundImg="model-s.jpg"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
      />
      <Section
        title="Model-Y"
        description="Order Online For Touuchless Delivery"
        backgroundImg="model-y.jpg"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
      />
      <Section
        title="Model-3"
        description="Order Online For Touuchless Delivery"
        backgroundImg="model-3.jpg"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
      />
      <Section
        title="Model-X"
        description="Order Online For Touuchless Delivery"
        backgroundImg="model-x.jpg"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
      />
      <Section
        title="Lowest Cost Solar Panels In India"
        description="Money Back Guarantee"
        backgroundImg="solar-panel.jpg"
        leftButton="Order Now"
        rightButton="Learn More"
      />
      <Section
        title="Solar For New Roofs"
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        backgroundImg="solar-roof.jpg"
        leftButton="Order Now"
        rightButton="Learn More"
      />
      <Section
        title="Accessories"
        backgroundImg="accessories.jpg"
        leftButton="Shop Now"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
