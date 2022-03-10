import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/HomeScreen"
import ProfileScreen from "./components/ProfileScreen"

const Stack = createNativeStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: "black",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
              >
          <Stack.Screen
            name="People of Star Wars"
            component={HomeScreen}
          />
          <Stack.Screen 
            name="Profile"
            component={ProfileScreen} 
            options={({ route }) => ({ title: route.params.element.name })}
            />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default App;
