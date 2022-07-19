import { Container } from "./summary.style";

import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="" />
        </header>
      </div>
      <div>
        <header>
          <p>Entradas</p>
          <img src={outcomeImg} alt="" />
        </header>
      </div>
      <div>
        <header>
          <p>Entradas</p>
          <img src={totalImg} alt="" />
        </header>
      </div>
    </Container>
  );
}
