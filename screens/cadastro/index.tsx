import React from "react";
import { Container, Txt , Input, BtnCadastro, TxtBtn, IconContBtn} from "./style";
import IconMat from 'react-native-vector-icons/MaterialIcons';


export default function CadastroScreen(){
  const IconSend = <IconMat name="send" size={45} color="black" />;
  return(
    <Container>
      <Txt>
        CADASTRO
      </Txt>
      <Input placeholder="E-mail" />
      <Input placeholder="Senha" />
      <Input placeholder="Confirme a Senha" />
      <BtnCadastro>
      <TxtBtn>
        Cadastrar
      </TxtBtn>
        <IconContBtn>
          {IconSend}
        </IconContBtn>
      </BtnCadastro>
    </Container>
  )
}