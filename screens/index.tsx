import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './home';
import AlarmScreen from './alarm';
import CalendarioScreen from './calendario';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  const IconHome = require('../src/icons/Home.png')
  const IconHomeActive = require('../src/icons/HomeActive.png')
  const IconAlarm = require('../src/icons/Alarm.png')
  const IconAlarmActive = require('../src/icons/AlarmActive.png')
  const IconCalend = require('../src/icons/calendar.png')
  const IconCalendActive = require('../src/icons/calendarActive.png')
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' 
          options={({route}) => ({
            title: 'Home',
            tabBarLabel:'',
            headerTransparent:true,
            headerShown: false,
            tabBarIcon: ({ color, size, focused}) => (
              <Image source={focused ? IconHomeActive : IconHome} style={{ width: 35, height: 43}} />
            ),
          })
          }
          component={HomeScreen}/>
        <Tab.Screen name='Alarm' 
          options={{
            title:`Alarme`,
            headerTransparent:true,
            tabBarLabel:'',
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => (
              <Image source={focused ? IconAlarmActive : IconAlarm} style={{ width: 35, height: 35,top:5}} />
            ),
          }}
          component={AlarmScreen}/>
        <Tab.Screen name='Calendario' 
          options={{
            title:`Calendario`,
            headerTransparent:true,
            headerShown: false,
            tabBarLabel:'',
            tabBarIcon: ({ color, size, focused }) => (
              <Image source={focused? IconCalendActive : IconCalend} style={{width: 35, height: 35,top:5}} />
            ),
          }}
          component={CalendarioScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
