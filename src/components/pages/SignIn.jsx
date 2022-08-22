import React from "react";
import styled from "styled-components";
import GoogleIcon from "@mui/icons-material/Google";
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 56px);
  color: ${({ theme }) => theme.text};
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.bgLighter};
  padding: 20px 50px;
  border: 1px solid ${({ theme }) => theme.soft};
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
`;
const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
`;
const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  width: 100%;
`;
const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
  display: flex;
  align-items: center;
  gap: 5px;
`;
const More = styled.div`
  font-size: 12px;
  width: 100%;
`;
const Links = styled.div`
  display: flex;

  justify-content: space-between;
`;
const Link = styled.span`
  color: ${({ theme }) => theme.text};
  font-weight: 500;
`;

const SignIn = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <SubTitle>Sign in to your account</SubTitle>
        <Input placeholder="Email" type="text" />
        <Input placeholder="Password" type="password" />
        <Button>Sign in</Button>

        <Title>or</Title>
        <Button>
          <GoogleIcon style={{ fill: "#ec407a" }} /> Sign in with Google
        </Button>
        <More>
          <Links>
            <Link>Forgot password?</Link>
            <Link>Sign up</Link>
          </Links>
        </More>
      </Wrapper>
    </Container>
  );
};

export default SignIn;
