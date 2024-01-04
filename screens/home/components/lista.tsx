import {TxtList,ContIcon, Lista} from '../style'
import IconMat from 'react-native-vector-icons/MaterialIcons';
import IconF from 'react-native-vector-icons/Feather';
import { TouchableOpacity, FlatList } from "react-native";

export default function List(){
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
return(
  <FlatList
          data={data}
          renderItem={({ item }) => <Item texto={item.texto} />}
          keyExtractor={item => item.id} />
)
}