import {Container,Txt,ContAlarm,Switch,IconAddCont,TimeSwitch,ContTaf} from "./style";
import {Image, FlatList} from "react-native";
export default function AlarmScreen() {
  const IconAdd=require('../../src/icons/Alarm.png');
  const data = [
    { id:'1',texto:'Tarefa 1',time:'XX:X1'},
    { id:'2',texto:'Tarefa 2',time:'XX:X2'},
    { id:'3',texto:'Tarefa 3',time:'XX:X3' },
    { id:'4',texto:'Tarefa 4',time:'XX:X4' },
  ];
  type ItemProps = {texto:String,time:string}
  const Item = ({texto,time}: ItemProps) => (
      <ContTaf style={{borderLeftWidth:3,borderBottomWidth:3,borderRadius:15}}>
            <Txt>
              {texto}
            </Txt>
            <TimeSwitch>
              <Txt>
              {time}
              </Txt>
              <Switch/>
            </TimeSwitch>
          </ContTaf>
    )
  return (
    <Container>
      <ContAlarm>
      <FlatList
          data={data}
          renderItem={({ item }) => <Item texto={item.texto} time={item.time} />}
          keyExtractor={item => item.id}/>
      </ContAlarm>
      <IconAddCont>
        <Image source={IconAdd} style={{width:60,height:60,tintColor:'#000'}}/>
      </IconAddCont>
    </Container>
  );
}