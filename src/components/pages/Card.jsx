import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div`
  width: 300px;
  height: ${({ type }) => (type === "sm" ? "100px" : "180px")};
  margin-bottom: ${({ type }) => (type === "sm" ? "10px" : "100px")};
  cursor: pointer;
  display: ${({ type }) => type === "sm" && "flex"};
  gap: ${({ type }) => type === "sm" && "10px"};
`;
const Image = styled.img`
  width: ${({ type }) => (type === "sm" ? "170px" : "100%")};
  height: ${({ type }) => (type === "sm" ? "95px" : "100%")};
  flex: 1;
`;
const Detail = styled.div`
  display: flex;
  margin-top: ${({ type }) => (type !== "sm" ? "10px" : "0px")};
  gap: 12px;
  flex: 1;
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
const Card = ({ imageSrc, type }) => {
  return (
    <Link to="/video/1" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image src={imageSrc} type={type} />
        <Detail type={type}>
          {!type && <ChannelImage src={imageSrc} />}
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
