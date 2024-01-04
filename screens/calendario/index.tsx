import { Cont, ContAgen, Txt } from "./style";
import { useState }from "react";
import Lista from "./components/list";
import Calendario from "./components/calendar";

export default function CalendarioScreen(){
  const [selected, setSelected] = useState('')
  return (
    <Cont>
      <Calendario/>
      <ContAgen>
        <Lista/>
      </ContAgen>
    </Cont>
  );
}