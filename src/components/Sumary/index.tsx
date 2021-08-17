import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { Container } from "./styles";

export function Sumary() {
   return (
      <Container>
         <div>
            <header>
               <p>Entradas</p>
               <img src={ incomeImg } alt="ícone de entradas" />
            </header>
            <strong>R$1.000,00</strong>
         </div>
         <div>
            <header>
               <p>Saídas</p>
               <img src={ outcomeImg } alt="ícone de saídas" />
            </header>
            <strong>-R$500,00</strong>
         </div>
         <div className="hilight-background">
            <header>
               <p>Total</p>
               <img src={ totalImg } alt="ícone de total" />
            </header>
            <strong>R$500,00</strong>
         </div>
      </Container>
   );
}