import styled from "styled-components";
import { Dashboard } from "./components/Dashboard/dashboard";
import { Header } from "./components/Header/header";
import { GlobalStyle } from "./styles/global";

const Title = styled.h1`
  color: #8257e6;
`;

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header></Header>
      <Dashboard />
    </>
  );
}
