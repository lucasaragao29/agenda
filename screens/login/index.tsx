import React from 'react';
import { View, Text } from 'react-native';
import { EmailInput, 
  SenhaInput, 
  BtnLogin, 
  BtnTxt, 
  Container, 
  ContInpt, 
  TxtLink,
  Txt, 
  IconContBtn,
  IconCotEmail,
  IconCotSenha,
  ContEmail,
  ContPassword
} from './style';
import { Image, StatusBar} from 'react-native';
import IconMat from 'react-native-vector-icons/MaterialIcons';
import IconEvil from 'react-native-vector-icons/EvilIcons';
import { useRoute } from '@react-navigation/native';
import CadastroScreen from '../cadastro';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function LoginScreen() {
  const IconSend = <IconMat name="send" size={45} color="black" />;
  const IconLogin = <IconEvil name="user" size={45} color="black" />;
  const IconPass = <IconMat name="lock-outline" size={45} color="black" />;
  return (
    <><StatusBar barStyle="dark-content" backgroundColor="#fff" />
    <Container>
      <Image
        style={{ width: 250, height: 160, marginBottom: 40, marginTop: 50 }}
        source={require('../../src/img/Logo.png')}
      />
      <ContInpt>
        <ContEmail>
          <EmailInput placeholder="E-mail"/>
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
            <TxtLink>
              <Txt>
              Cadastra-se
              </Txt>
            </TxtLink> 
      </ContInpt>
    </Container>
    </>
  );
}
