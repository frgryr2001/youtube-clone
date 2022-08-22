import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { images } from "../../Utils/ImageVideo";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Home = () => {
  return (
    <Container>
      {images.map((image, index) => {
        return <Card key={index} imageSrc={image} />;
      })}
    </Container>
  );
};

export default Home;
