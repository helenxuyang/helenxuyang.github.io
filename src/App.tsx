import "./App.css";
import { NavigationTabs } from "./NavigationTabs";
import styled from "styled-components";

const StyledNameHeader = styled.h1`
  background: darkslateblue;
  color: white;
  margin: 0;
  padding: 8px;
`;

const StyledMain = styled.main`
  padding: 24px;

  @media (max-width: 600px) {
    padding: 16px;
  }
`;

function App() {
  return (
    <>
      <StyledNameHeader>Helen Xu Yang</StyledNameHeader>
      <StyledMain>
        <NavigationTabs />
      </StyledMain>
    </>
  );
}

export default App;
