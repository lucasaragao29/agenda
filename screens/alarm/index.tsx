import {Container,Txt,ContAlarm,Switch,IconAddCont,TimeSwitch,ContTaf} from "./style";
import {Image, FlatList} from "react-native";
import Alarm from "./alarm";

export default function AlarmScreen() {
const IconAdd=require('../../src/icons/Alarm.png'); 
  return (
    <Container>
      <ContAlarm>
        <Alarm/>
      </ContAlarm>
      <IconAddCont>
        <Image source={IconAdd} style={{width:60,height:60,tintColor:'#000'}}/>
      </IconAddCont>
    </Container>
  );
}