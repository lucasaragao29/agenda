import { TxtList,ContIcon, Lista} from "./style"
import { TouchableOpacity } from "react-native"
import IconMat from 'react-native-vector-icons/MaterialIcons';
import IconF from 'react-native-vector-icons/Feather';

export default function List(){
  const IconCheck = <IconMat name="check" size={30} color="black" />;
  const IconEdit = <IconF name="feather" size={30} color="black" />;
  const IconDel = <IconMat name="delete" size={30} color="black" />;
  return(
    <Lista  style={{borderLeftWidth:5, borderColor:"#000",}}>
          <TxtList>
            Lista
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
  )
}