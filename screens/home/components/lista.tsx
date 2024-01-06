import {TxtList,ContIcon, Lista, ModalCont, ModalContIcon, ModalView, Button} from '../style'
import { Input } from '../../cadastro/style';
import IconMat from 'react-native-vector-icons/MaterialIcons';
import IconF from 'react-native-vector-icons/Feather';
import { TouchableOpacity, FlatList, Modal, Alert, Image, Text} from "react-native";
import { useState } from 'react';

export default function List(){
const IconCheck = <IconMat name="check" size={30} color="black" />;
  const IconEdit = <IconF name="feather" size={30} color="black" />;
  const IconDel = <IconMat name="delete" size={30} color="black" />;
  const IconX = require('../../../src/icons/close.png');
  const IconOk = require('../../../src/icons/pena.png');
  const [modalVisibleCheck, setModalVisibleCheck] = useState(false);
  const [modalVisibleEdit, setModalVisibleEdit] = useState(false);
  const [modalVisibleDel, setModalVisibleDel] = useState(false);
  const data = [
    { id:'1',texto:'Lista 1' },
    { id:'2',texto:'Lista 2'},
    { id:'3',texto:'Lista 3' },
    { id:'4',texto:'Lista 4' },
  ];
  type ItemProps = {texto: string}
  const Item = ({texto}: ItemProps) => {
    return (
      <Lista  style={{borderLeftWidth:5, borderColor:"#000",}}>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleEdit}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisibleEdit(!modalVisibleEdit);
        }}>
        <ModalCont>
          <ModalView style={{borderBottomWidth:4,borderRightWidth:4}}>
            <Button
              onPress={() => setModalVisibleEdit(!modalVisibleEdit)}>
              <Image source={IconX} style={{ width: 50, height: 50 }} />
            </Button>
            <Input placeholder="Edit" style={{bottom:20,height:60, fontSize:25, borderRadius:50,borderLeftWidth:2,borderBottomWidth:5,left:10}}/>
            <TouchableOpacity style={{backgroundColor:'#294380',height:80,width:80,borderRadius:50,left:140}}>
            <Image source={IconOk} style={{ width: 90, height: 90,left:10 }} />
            </TouchableOpacity>
          </ModalView>
        </ModalCont>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleDel}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisibleEdit(!modalVisibleDel);
        }}>
        <ModalCont>
          <ModalView style={{borderBottomWidth:4,borderRightWidth:4,height:100}}>
            <Text style={{fontSize:30,top:20, left:30}}>
              Deseja Excluir a Task?
            </Text>
            <ModalContIcon>
            <TouchableOpacity onPress={() => setModalVisibleDel(!modalVisibleDel)}>
              <Image source={IconX} style={{ width: 70, height: 70}} />
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'#294380',height:70,width:70,borderRadius:50,marginLeft:50,justifyContent:'center'}}>
            <Image source={IconOk} style={{ width: 90, height: 90}} />
            </TouchableOpacity>
            </ModalContIcon>
          </ModalView>
        </ModalCont>
      </Modal>
          <TxtList>
            {texto}
          </TxtList>
          <ContIcon style={{borderLeftWidth:2, borderColor:"#000",}}>
          <TouchableOpacity onPress={() =>alert('Tarefa Concluida com Sucesso!!!')}>
            {IconCheck}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisibleEdit(!modalVisibleEdit)}>
            {IconEdit}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisibleDel(!modalVisibleDel)}>
            {IconDel}
          </TouchableOpacity>
          </ContIcon>
        </Lista>
    )}
return(
  <FlatList
          data={data}
          renderItem={({ item }) => <Item texto={item.texto} />}
          keyExtractor={item => item.id} />
)
}