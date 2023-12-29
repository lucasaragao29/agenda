import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './home';
import AlarmScreen from './alarm';
import CalendarioScreen from './calendario';
import CadastroScreen from './cadastro';
import { useState } from 'react';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  const [ login, setLogin] = useState(true)


  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' 
          options={{
            title:`Home`,
            headerTransparent:true,
            headerShown: false
          }}
          component={HomeScreen}/>
        <Tab.Screen name='Alarm' 
          options={{
            title:`Alarme`,
            headerTransparent:true,
            headerShown: false,
          }}
          component={AlarmScreen}/>
        <Tab.Screen name='Calendario' 
          options={{
            title:`Calendario`,
            headerTransparent:true,
            headerShown: false,
          }}
          component={CalendarioScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
