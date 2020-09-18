import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
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
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

const Tab = createBottomTabNavigator();
const ListStack = createStackNavigator();
const AuthStack = createStackNavigator();

function listFlow() {
  return (
    <ListStack.Navigator>
      <ListStack.Screen 
        name="List" 
        component={ListScreen}
        options={{ title: 'Daily Tracker' }}
      />
      <ListStack.Screen 
        name="Add" 
        component={AddScreen} 
        options={{ title: "Add Today's Symptoms"}}
      />
      <ListStack.Screen 
        name="Detail" 
        component={DetailScreen} 
        options={{ title: 'Detail'}}
      />
    </ListStack.Navigator>
  );
}

export default function App() {
  const [initializing, setInitializing] = useState(true)
  const [user, setUser] = useState(null)

  // Handle user state changes
  const onAuthStateChanged = (result) => {
    setUser(result)
    if (initializing) setInitializing(false)
  }

  useEffect(() => {
    var firebaseConfig = {
      apiKey: "AIzaSyCg3UxuN4_1f7aze8O6RBAqIpZ_RXtFFMU",
      authDomain: "covid-app-7e101.firebaseapp.com",
      databaseURL: "https://covid-app-7e101.firebaseio.com",
      projectId: "covid-app-7e101",
      storageBucket: "covid-app-7e101.appspot.com",
      messagingSenderId: "477385581189",
      appId: "1:477385581189:web:bba80788c6dfa149f2ffec",
      measurementId: "G-R792M2WF7G"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  },[]);

  useEffect(() => {
    const authSubscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged)

    // unsubscribe on unmount
    return authSubscriber
  }, []);

  if (initializing) {
    return null
  }

  return (
    <NavigationContainer>
      { user ? (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color }) => {

              if (route.name === 'ListFlow') {
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
            name="ListFlow" 
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
      ) : (
        <AuthStack.Navigator>
          <AuthStack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: 'Log In' }}
          />
          <AuthStack.Screen
            name="Signup"
            component={SignupScreen}
            options={{ title: 'Sign Up' }}
          />
        </AuthStack.Navigator>
      )
      }
    </NavigationContainer>
  );
}