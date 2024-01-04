import { Calendar, LocaleConfig } from "react-native-calendars";

export default function Calendario(){
  return(
    <Calendar
      style={{
        borderWidth: 1,
        height: 400,
        width: 400,
        bottom:40,
        borderRadius:15,
      }}
      theme={{
        backgroundColor:'#294380',
        calendarBackground: '#294380',
        textSectionTitleColor: '#b6c1cd',
        selectedDayBackgroundColor: '#00adf5',
        selectedDayTextColor: '#ffffff',
        todayTextColor: '#00adf5',
        dayTextColor: '#fff',
        textDisabledColor: '#d9e'
      }}
      />
  )
}