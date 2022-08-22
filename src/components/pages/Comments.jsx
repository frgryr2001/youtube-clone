import React from "react";
import styled from "styled-components";
import Comment from "./Comment";

const Container = styled.div`
  margin-top: 20px;
`;
const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const AvatarComment = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;
const InputComment = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  background-color: transparent;
  padding: 10px;
  height: 15px;
  outline: none;
  padding: 5px;
  color: ${({ theme }) => theme.text};
  :focus {
    border-bottom: 1px solid ${({ theme }) => theme.text};
  }
`;
const Comments = () => {
  return (
    <Container>
      <NewComment>
        <AvatarComment src="https://yt3.ggpht.com/yti/AJo0G0mlkDkPWURs_cVY3a_--MpLF5-EffpKDrR4SA=s88-c-k-c0x00ffffff-no-rj-mo" />
        <InputComment placeholder="Thêm bình luận..." />
      </NewComment>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Container>
  );
};

export default Comments;
