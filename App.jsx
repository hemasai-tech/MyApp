import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import Splash from "./src/components/splash/Splash";
import Register from "./src/components/register/Register";
import CompetitionList from "./src/components/competition/CompetitionList";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="CompetitionList" component={CompetitionList} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

let AppEntryPoint = App;

if (process.env.STORYBOOK_ENABLED) {
  AppEntryPoint = require("./.ondevice").default;
}

export default AppEntryPoint;
