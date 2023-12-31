import { Container, Txt,Header, ContList, IconAddCont} from "./style";
import { FlatList, Image, StatusBar} from "react-native";
import IconMat from 'react-native-vector-icons/MaterialIcons';
import IconF from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from "react-native";
import List from "./lista";

export default function HomeScreen() {
  const IconAdd = require('../../src/icons/IconAdd.png');
  const data = [
    { id:'1',texto:'Lista 1' },
    { id:'2',texto:'Lista 2'},
    { id:'3',texto:'Lista 3' },
    { id:'4',texto:'Lista 4' },
  ];
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
          renderItem={List}
          keyExtractor={item => item.id} />
      </ContList>
      <IconAddCont>
        <Image source={IconAdd} style={{ width: 50, height: 60, tintColor: '#000' }} />
      </IconAddCont>
    </Container></>
  );
}