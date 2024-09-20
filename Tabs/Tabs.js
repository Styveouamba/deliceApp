
import {React} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Acceuil from '../screens/Acceuil';
import Profil from '../screens/Profil';
import Favoris from '../screens/Favoris';


const Tabs = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
          initialRouteName="Acceuil"
          screenOptions={{
            tabBarActiveTintColor: 'blue',
            headerShown:false,
            tabBarStyle:{backgroundColor:'#000'}
          }}
        >
            <Tab.Screen
            name="maison"
            component={Acceuil}
          />
            
          <Tab.Screen
            name="Favoris"
            component={Favoris}
            options={{
              tabBarActiveTintColor:'black',
              tabBarStyle:{backgroundColor:'white'}
            }}
          />
          
          <Tab.Screen
            name="profil"
            component={Profil}
            options={{
              tabBarActiveTintColor:'white',
              tabBarStyle:{backgroundColor:'orange'}
            }}
          />
          
        </Tab.Navigator>
      );
}

export default Tabs