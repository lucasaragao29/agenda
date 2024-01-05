import { Container, ContList, IconAddCont, ModalCont, ModalTxt, ModalView, Button} from "./style";
import { Input } from "../cadastro/style";
import { Image, StatusBar, Modal, View, TouchableOpacity, Alert, Text, StyleSheet} from "react-native";
import React, { useState } from "react";
import List from "./components/lista";
import Head from "./components/header";

export default function HomeScreen() {
  const IconAdd = require('../../src/icons/Home.png');
  const IconX = require('../../src/icons/close.png');
  const IconF = require('../../src/icons/close.png');
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <><StatusBar barStyle="dark-content" backgroundColor="#fff" />
    <Container>
      <Head/>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <ModalCont>
          <ModalView>
            <Button
              onPress={() => setModalVisible(!modalVisible)}>
              <Image source={IconX} style={{ width: 50, height: 50 }} />
            </Button>
            <Input style={{bottom:20,height:60, fontSize:25, borderRadius:50,borderLeftWidth:2,borderBottomWidth:5,left:10}}/>
            <TouchableOpacity style={{backgroundColor:'#294380',height:80,width:80,borderRadius:50,left:140}}>
            <Image source={IconF} style={{ width: 90, height: 0,left:30 }} />
            </TouchableOpacity>
          </ModalView>
        </ModalCont>
      </Modal>
      <ContList>
        <List/>
      </ContList>
      <IconAddCont onPress={() => setModalVisible(true)}>
        <Image source={IconAdd} style={{ width: 50, height: 60, tintColor: '#000' }} />
      </IconAddCont>
    </Container></>
  );
}
