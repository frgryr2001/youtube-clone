import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;
const AvatarComment = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;
const Name = styled.span`
  font-size: 14px;
  font-weight: 500;
`;
const Time = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;
const Text = styled.span`
  font-size: 14px;
  width: 100%;
`;
const Comment = () => {
  return (
    <Container>
      <AvatarComment src="https://yt3.ggpht.com/yti/AJo0G0mlkDkPWURs_cVY3a_--MpLF5-EffpKDrR4SA=s88-c-k-c0x00ffffff-no-rj-mo" />
      <Info>
        <Name>
          Nhân <Time>2 ngày trước</Time>
        </Name>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          excepturi doloribus mollitia, atque minima tempore fuga in officia
          soluta sit tempora neque, blanditiis eveniet commodi est aperiam
          nesciunt dolore! Maiores!
        </Text>
      </Info>
    </Container>
  );
};

export default Comment;
