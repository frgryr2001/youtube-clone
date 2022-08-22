import React from "react";
import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchIcon from "@mui/icons-material/Search";
const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`;
const Search = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  width: 40%;
  margin: 0 auto;
  padding: 5px;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 3px;
`;
const SearchInput = styled.input`
  border: none;
  outline: none;
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  width: 100%;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #ccc;
    font-family: "Roboto", sans-serif;
  }
`;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  // margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;
const Navbar = ({ theme }) => {
  const styleIconChange = theme ? `white` : `black`;

  return (
    <Container>
      <Wrapper>
        <Search>
          <SearchInput type="text" placeholder="Search" />
          <SearchIcon
            style={{
              cursor: "pointer",
              fill: `${styleIconChange}`,
            }}
          />
        </Search>
        <Button>
          <AccountCircleOutlinedIcon />
          Sign in
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
