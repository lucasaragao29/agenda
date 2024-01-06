import { Cont, ContAgen, Txt } from "./style";
import { useState }from "react";
import Lista from "./components/list";
import Calendario from "./components/calendar";

export default function CalendarioScreen(){
  const [selected, setSelected] = useState('')
  return (
    <Cont>
      <Calendario/>
      <ContAgen style={{borderLeftWidth:5,borderBottomWidth:5}}>
        <Lista/>
      </ContAgen>
    </Cont>
  );
}