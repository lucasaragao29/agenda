import { Container, Txt,ContAlarm, Switch, IconAddCont} from "./style";
import { Image } from "react-native";

export default function AlarmScreen() {
  const IconAdd = require('../../src/icons/Alarm.png');
  return (
    <Container>
      <ContAlarm>
        <Txt>
        Hello World!!
        </Txt>
        <Switch/>
      </ContAlarm>
      <IconAddCont>
      <Image source={IconAdd} style={{ width: 60, height: 60, tintColor: '#000' }} />
      </IconAddCont>
    </Container>
  );
}