import { Calendar, LocaleConfig } from "react-native-calendars";
import { Cont, ContAgen, Txt } from "./style";
import { useState }from "react";
import { StyleSheet, Text, FlatList} from "react-native";
LocaleConfig.locales['fr'] = {
  monthNames: [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre'
  ],
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ]}

export default function CalendarioScreen(){
  const [selected, setSelected] = useState('')
  const data = [
    { id:'1',texto:'Tarefa dia 1' },
    { id:'2',texto:'Tarefa dia 2'},
    { id:'3',texto:'Tarefa dia 3' },
    { id:'4',texto:'Tarefa dia 3' },
  ];
  type ItemProps = {texto: string}
  const Item = ({texto}: ItemProps) => {
    return (
      <Text style={{fontSize:20}}>
        {texto}
        </Text>
    )}
  return (
    <Cont>
      <Calendar
      style={{
        borderWidth: 1,
        height: 400,
        width: 400,
        bottom:40,
        borderRadius:15,
        position: 'fixed',
      }}
      theme={{
        backgroundColor:'#294380',
        calendarBackground: '#294380',
        textSectionTitleColor: '#b6c1cd',
        selectedDayBackgroundColor: '#00adf5',
        selectedDayTextColor: '#ffffff',
        todayTextColor: '#00adf5',
        dayTextColor: '#2d4150',
        textDisabledColor: '#d9e'
      }}
      />
      <ContAgen>
      <FlatList
          data={data}
          renderItem={({ item }) => <Item texto={item.texto} />}
          keyExtractor={item => item.id} />
      </ContAgen>
    </Cont>
  );
}