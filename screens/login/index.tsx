import { View,Text } from "react-native";
import { 
  EmailInput , 
  SenhaInput, 
  BtnLogin,
  BtnTxt,
  Container,
  ContInpt,
  Txt
} from "./style";


export default function LoginScreen() {
  return (
    <Container>
      <ContInpt>
        <EmailInput placeholder="E-mail"/>
        <SenhaInput placeholder="Senha"/>
        <BtnLogin>
          <BtnTxt>Enviar</BtnTxt>
        </BtnLogin>
        <Txt>
          Cadastra-se
        </Txt>
      </ContInpt>
    </Container>
  );
}