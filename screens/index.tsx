import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './home';
import AlarmScreen from './alarm';
import CalendarioScreen from './calendario';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  const IconHome = require('../src/icons/IconAdd.png')
  const IconAlarm = require('../src/icons/Alarm.png')
  const IconCalend = require('../src/icons/calendar.png')
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' 
          options={{
            title: 'Home',
            tabBarLabel:'',
            headerTransparent:true,
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Image source={IconHome} style={{ width: 35, height: 35, tintColor: '#000' }} />
            ),
          }
          }
          component={HomeScreen}/>
        <Tab.Screen name='Alarm' 
          options={{
            title:`Alarme`,
            headerTransparent:true,
            tabBarLabel:'',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Image source={IconAlarm} style={{ width: 30, height: 30, tintColor: '#000'}} />
            ),
          }}
          component={AlarmScreen}/>
        <Tab.Screen name='Calendario' 
          options={{
            title:`Calendario`,
            headerTransparent:true,
            headerShown: false,
            tabBarLabel:'',
            tabBarIcon: ({ color, size }) => (
              <Image source={IconCalend} style={{ width: 30, height: 30, tintColor: '#000' }} />
            ),
          }}
          component={CalendarioScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
