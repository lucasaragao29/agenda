import { Container, ContList, IconAddCont, ModalCont} from "./style";
import { Input } from "../cadastro/style";
import { Image, StatusBar, Modal, View, TouchableOpacity, Alert, Text, StyleSheet} from "react-native";
import React, { useState } from "react";
import List from "./components/lista";
import Head from "./components/header";

export default function HomeScreen() {
  const IconAdd = require('../../src/icons/Home.png');
  const IconX = require('../../src/icons/close.png');
  const IconF = require('../../src/icons/feather.png');
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
        <View style={styles.ModalCont}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setModalVisible(!modalVisible)}>
              <Image source={IconX} style={{ width: 50, height: 50 }} />
            </TouchableOpacity>
            <Input style={{bottom:20,height:60, fontSize:25, borderRadius:50,borderLeftWidth:2,borderBottomWidth:5}}/>
            <TouchableOpacity style={{backgroundColor:'#294380',height:80,width:80,borderRadius:50}}>
            <Image source={IconF} style={{ width: 90, height: 0, }} />
            </TouchableOpacity>
          </View>
        </View>
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

const styles = StyleSheet.create({
  ModalCont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    marginTop:80,
    backgroundColor: 'red',
    borderRadius: 20,
    position:'relative',
    height:200,
    width:370,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    bottom:120,
  },
  button: {
    bottom:10,
    left:160,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});