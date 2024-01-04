import { Container, ContList, IconAddCont} from "./style";
import { Image, StatusBar} from "react-native";
import { useState } from "react";
import List from "./components/lista";
import Head from "./components/header";

export default function HomeScreen() {
  const IconAdd = require('../../src/icons/IconAdd.png');
  const [modal, setModal] = useState(false);
  return (
    <><StatusBar barStyle="dark-content" backgroundColor="#fff" />
    <Container>
      <Head/>
      <ContList>
        <List/>
      </ContList>
      <IconAddCont onPress={() => setModal(true)}>
        <Image source={IconAdd} style={{ width: 50, height: 60, tintColor: '#000' }} />
      </IconAddCont>
    </Container></>
  );
}