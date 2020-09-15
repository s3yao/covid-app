import * as React from 'react';
import colors from './src/style/colors';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

//import Screens
import ListScreen from './src/screens/ListScreen';
import StatisticScreen from './src/screens/StatisticScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import AddScreen from './src/screens/AddScreen';
import DetailScreen from './src/screens/DetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function listFlow() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="List" 
        component={ListScreen}
        options={{ title: 'Daily Tracker' }}
      />
      <Stack.Screen 
        name="Add" 
        component={AddScreen} 
        options={{ title: "Add Today's Symptoms"}}
      />
      <Stack.Screen 
        name="Detail" 
        component={DetailScreen} 
        options={{ title: 'Detail'}}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {

            if (route.name === 'List') {
              return <Feather name='list' size={30} color={color} />
            } else if (route.name === 'Stats') {
              return <Entypo name='line-graph' size={30} color={color} />
            } else {
              return <Feather name='user' size={30} color={color} />;
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: '#fd5870',
          inactiveTintColor: '#a9a9a9',
        }}
      >
        <Tab.Screen 
          name="List" 
          component={listFlow} 
          options={{ title: 'Tracker' }}/>
        <Tab.Screen 
          name="Stats" 
          component={StatisticScreen} 
          options={{ title: 'Covid Stats' }}
        />
        <Tab.Screen 
          name="Profile"
          component={ProfileScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}