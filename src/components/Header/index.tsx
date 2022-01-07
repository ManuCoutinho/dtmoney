import logoImg from "../../assets/logoMoney.png";
import { Container, Content } from "./styles";

interface HeaderProps {
   onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal } : HeaderProps) {   
   return (
      <Container>
         <Content>
           <h1><img src={logoImg}></img>Your Money</h1>            
            <button type="button" onClick={ onOpenNewTransactionModal }>
               Nova transação
            </button>            
         </Content>
      </Container>
   )
}