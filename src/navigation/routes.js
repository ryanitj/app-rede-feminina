import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home} from '../screens/HomeScreen'
import {Settings} from '../screens/SettingsScreen'
import { Login } from '../screens/LoginScreen';
import { Register } from '../screens/RegisterScreen';

const Tab = createBottomTabNavigator();
const StackNavigator = createStackNavigator();

export function Stack() {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator>
        <StackNavigator.Screen options={{
          headerShown:false
        }} name="Login" component={Login} />
        <StackNavigator.Screen options={{
          headerShown:false
        }} name="Register" component={Register} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}

export function Tabs() {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen 
                options={{
                    headerShown:false
                }} 
                name="Home" 
                component={Home} 
            />
            <Tab.Screen  
                options={{
                    headerShown:false
                }}  
                name="Settings" 
                component={Settings} 
            />
        </Tab.Navigator>
    </NavigationContainer>
  );
}