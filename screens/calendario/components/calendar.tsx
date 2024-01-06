import { useState } from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";

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
    'Dezembro',
  ],
  monthNamesShort: ['Jan.', 'Fev.', 'Mar.', 'Abr.', 'Maio', 'Jun.', 'Jul.', 'Aug', 'Set.', 'Out.', 'Nov.', 'Dez.'],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'],
  dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sab.'],
  today: "Hoje"
};
LocaleConfig.defaultLocale = 'fr';

export default function Calendario(){
const [selected, setSelected] = useState('');
  return(
    <Calendar
    onDayPress={day => {
      setSelected(day.dateString);
    }}
    markedDates={{
      [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
    }}

      style={{
        borderWidth: 1,
        height: 400,
        width: 400,
        bottom:40,
        borderRadius:15,
      }}
      theme={{
        textSectionTitleColor: '#fff',
        selectedDayBackgroundColor: '#00adf5',
        selectedDayTextColor: '#ffffff',
        todayTextColor: '#fff',
        dayTextColor: '#000',
        textDisabledColor: '#d9e'
      }}
      />
  )
}