import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./header.style";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button>Nova transação</button>
      </Content>
    </Container>
  );
}
