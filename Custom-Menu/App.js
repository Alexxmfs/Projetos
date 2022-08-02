import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer} from "@react-navigation/native";

import teste from "./screens/teste";
import outraTela from "./screens/outraTela";

const Stack = createStackNavigator();

 const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}
      initialRouteName="teste">
        <Stack.Screen name="teste" component={teste} />
        <Stack.Screen name="outraTela" component={outraTela} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App