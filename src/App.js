import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Narbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./Utils/Theme";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Video from "./components/pages/Video";
import SignIn from "./components/pages/SignIn";
const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;
const Wrapper = styled.div`
  padding: 30px;
`;
function App() {
  const [theme, setTheme] = useState(true);
  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Menu setTheme={setTheme} />
          <Main>
            <Narbar theme={theme} />
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="signin" element={<SignIn />} />

                  <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
