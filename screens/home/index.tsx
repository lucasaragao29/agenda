import { Container, Txt,Header, ContList, TxtList, ContIcon, Lista} from "./style";
import { FlatList } from "react-native";
import IconMat from 'react-native-vector-icons/MaterialIcons';
import IconF from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from "react-native";
import List from "./lista";

export default function HomeScreen() {
  const IconCheck = <IconMat name="check" size={45} color="black" />;
  const IconEdit = <IconF name="feather" size={45} color="black" />;
  const IconDel = <IconMat name="delete" size={45} color="black" />;
  const data = [
    { id:'1',texto:'Lista 1' },
    { id:'2',texto:'Lista 2'},
    { id:'3',texto:'Lista 3' },
    { id:'4',texto:'Lista 4' },
  ];
  return (
    <Container>
      <Header style={{borderBottomWidth:5,
          borderLeftWidth:5,
          borderRightWidth:5,
          borderBottomColor:'#ccc',
          borderLeftColor:'#ccc',
          borderRightColor:'#ccc'}}>
        <Txt>
          Lista de Afazeres
        </Txt>
      </Header>
      <ContList>
        <FlatList
      data={data}
      renderItem={List}
      keyExtractor={item => item.id}
    />
      </ContList>
    </Container>
  );
}