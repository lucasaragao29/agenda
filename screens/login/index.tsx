import { View,Text } from "react-native";
import { 
  EmailInput , 
  SenhaInput, 
  BtnLogin,
  Container,
  ContInpt
} from "./style";

export default function LoginScreen() {
  return (
    <Container>
      <ContInpt>
        <EmailInput placeholder="E-mail"/>
        <SenhaInput placeholder="Senha"/>
        <BtnLogin/>
      </ContInpt>
    </Container>
  );
}