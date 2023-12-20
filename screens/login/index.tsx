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
import { Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function LoginScreen() {
  return (
    <Container>
      <Image
        style={{width:350,height:250,}}
        source={require('../../src/img/Logo.png')}/>
      <ContInpt>
        <EmailInput placeholder="E-mail"/>
        <SenhaInput placeholder="Senha"/>
        <BtnLogin>
          <BtnTxt>Enviar</BtnTxt>
          <Icon 
            name="send"
            size={10}  
          />
        </BtnLogin>
        <Txt>
          Cadastra-se
        </Txt>
      </ContInpt>
    </Container>
  );
}
