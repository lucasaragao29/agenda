import { ContTaf, Txt, TimeSwitch, Switch} from "./style"
import data from './index';
export default function Alarm(){
  return(
    <ContTaf>
          <Txt>
           testeee
          </Txt>
          <TimeSwitch>
            <Txt>
            XX : XX
            </Txt>
            <Switch/>
          </TimeSwitch>
        </ContTaf>
  )
}