import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Tabs from '../Tabs/Tabs';
import Repas from '../Categories/Repas/Repas';
import PlatsDetails from '../screens/PlatsDetails';
import Details from '../Categories/Repas/detailsRepas/Details';


const Stack = createNativeStackNavigator();

const Home = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Acceuil' screenOptions={{headerShown:false}}>
      <Stack.Screen name="menu" component={Tabs} />
      <Stack.Screen name="Repas" component={Repas} />
      <Stack.Screen name="PlatsDetails" component={PlatsDetails} />
      <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Home