import React from 'react';
import { View, Text } from 'react-native';
import { EmailInput, 
  SenhaInput, 
  BtnLogin, 
  BtnTxt, 
  Container, 
  ContInpt, 
  Txt, 
  IconContBtn,
  IconCotEmail,
  IconCotSenha,
  ContEmail,
  ContPassword
} from './style';
import { Image } from 'react-native';
import IconMat from 'react-native-vector-icons/MaterialIcons';
import IconEvil from 'react-native-vector-icons/EvilIcons';

export default function LoginScreen() {
  const IconSend = <IconMat name="send" size={45} color="black" />;
  const IconLogin = <IconEvil name="user" size={45} color="black" />;
  const IconPass = <IconMat name="lock-outline" size={45} color="black" />;
  return (
    <Container>
      <Image
        style={{ width: 250, height: 160, marginBottom: 40, marginTop: 50 }}
        source={require('../../src/img/Logo.png')}
      />
      <ContInpt>
        <ContEmail>
          <EmailInput placeholder="E-mail" />
            <IconCotEmail>
              {IconLogin}
            </IconCotEmail>
      </ContEmail>
        <ContPassword>
        <SenhaInput placeholder="Senha" />
            <IconCotSenha>
              {IconPass}
            </IconCotSenha>
        </ContPassword>
        <BtnLogin>
              <BtnTxt>Enviar</BtnTxt>
              <IconContBtn>
                {IconSend}
              </IconContBtn>
            </BtnLogin>
            <Txt>Cadastra-se</Txt> 
      </ContInpt>
    </Container>
  );
}
