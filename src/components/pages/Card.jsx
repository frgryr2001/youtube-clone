import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div`
  width: 300px;
  height: 180px;
  margin-bottom: 100px;
  cursor: pointer;
`;
const Image = styled.img`
  width: 100%;
  background-color: #999;
`;
const Detail = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 12px;
`;
const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`;
const Texts = styled.div``;
const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
  margin: 8px 0px;
`;
const Description = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;
const Card = ({ imageSrc }) => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container>
        <Image src={imageSrc} />
        <Detail>
          <ChannelImage src={imageSrc} />
          <Texts>
            <Title>Lorem ipsum.</Title>
            <ChannelName>Lorem ipsum</ChannelName>
            <Description>1tr views - 1 day ago</Description>
          </Texts>
        </Detail>
      </Container>
    </Link>
  );
};

export default Card;
