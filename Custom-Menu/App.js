import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer} from "@react-navigation/native";

import FriendsMenu from "./screens/FriendsMenu";
import CategoryMenu from "./screens/CategoryMenu";
import SavedItemsMenu from "./screens/SavedItemsMenu";
import TermsUseMenu from "./screens/TermsUseMenu";
import ConfigMenu from "./screens/ConfigMenu";


const Stack = createStackNavigator();

 const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}
      initialRouteName="FriendsMenu">
        <Stack.Screen name="FriendsMenu" component={FriendsMenu} />
        <Stack.Screen name="CategoryMenu" component={CategoryMenu} />
        <Stack.Screen name="SavedItemsMenu" component={SavedItemsMenu} />
        <Stack.Screen name="TermsUseMenu" component={TermsUseMenu} />
        <Stack.Screen name="ConfigMenu" component={ConfigMenu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App