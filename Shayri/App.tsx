import React from "react";
import { Home } from "./home";
import { Prime } from "./prime";
import { SayriList } from "./shayriList";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OpenShayri } from "./openshayri";
const Stack=createNativeStackNavigator();


export default function App()
{
  return(
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="home" component={Home} options={{headerStyle:{backgroundColor:"black"},headerTitleStyle:{fontSize:30,fontWeight:"900",color:"white"}}}></Stack.Screen>
          <Stack.Screen name="shayrilist" component={SayriList} options={({ route }) => ({ title:route.params.name})}></Stack.Screen>
          <Stack.Screen name="shayri" component={OpenShayri}></Stack.Screen>
          <Stack.Screen name="prime" component={Prime}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
    // <Home></Home>
    // <Prime></Prime>
    // <SayriList></SayriList>
  )
}
