import { Container, Txt,Header, ContList, IconAddCont, TxtList,ContIcon, Lista} from "./style";
import { FlatList, Image, StatusBar} from "react-native";
import IconMat from 'react-native-vector-icons/MaterialIcons';
import IconF from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from "react-native";

export default function HomeScreen() {
  const IconAdd = require('../../src/icons/IconAdd.png');
  const IconCheck = <IconMat name="check" size={30} color="black" />;
  const IconEdit = <IconF name="feather" size={30} color="black" />;
  const IconDel = <IconMat name="delete" size={30} color="black" />;
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
          <TxtList>
            {texto}
          </TxtList>
          <ContIcon style={{borderLeftWidth:2, borderColor:"#000",}}>
          <TouchableOpacity>
            {IconCheck}
          </TouchableOpacity>
          <TouchableOpacity>
            {IconEdit}
          </TouchableOpacity>
          <TouchableOpacity>
            {IconDel}
          </TouchableOpacity>
          </ContIcon>
        </Lista>
    )}
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
        <FlatList
          data={data}
          renderItem={({ item }) => <Item texto={item.texto} />}
          keyExtractor={item => item.id} />
      </ContList>
      <IconAddCont>
        <Image source={IconAdd} style={{ width: 50, height: 60, tintColor: '#000' }} />
      </IconAddCont>
    </Container></>
  );
}