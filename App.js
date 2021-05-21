import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()//Stack contiene toda nuestra navegacion

import UsersList from './screens/UsersList'
import CreateUserScreen from './screens/CreateUserScreen'
import UserDetailScreen from './screens/UserDetailScreen'

/* Esta funcion lo que hace es que la primera ventana es la que se muestra, 
si le das a TAB te mostrara la que este arriba de ella */
function MyStack() { 
  return (
    <Stack.Navigator> 
       <Stack.Screen name="CreateUserScreen" component={CreateUserScreen} />
      <Stack.Screen name="UserList" component={UsersList} />
      <Stack.Screen name="UserDetailScreen" component={UserDetailScreen} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
   <NavigationContainer>
     <MyStack/>
   </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
