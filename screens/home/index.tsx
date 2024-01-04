import { Container, Txt,Header, ContList, IconAddCont} from "./style";
import { Image, StatusBar} from "react-native";
import { useState } from "react";
import List from "./lista";

export default function HomeScreen() {
  const IconAdd = require('../../src/icons/IconAdd.png');
  const [modal, setModal] = useState(false);
  return (
    <><StatusBar barStyle="dark-content" backgroundColor="#fff" />
    <Container>
      <Header style={{
        borderBottomWidth: 5,
        borderLeftWidth: 5,
        borderRightWidth: 5,
        borderBottomColor: '#ccc',
        borderLeftColor: '#ccc',
        borderRightColor: '#ccc'
      }}>
        <Txt>
          Lista de Afazeres
        </Txt>
      </Header>
      <ContList>
        <List/>
      </ContList>
      <IconAddCont onPress={() => setModal(true)}>
        <Image source={IconAdd} style={{ width: 50, height: 60, tintColor: '#000' }} />
      </IconAddCont>
    </Container></>
  );
}