import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/HomeScreen';
import { ArticleScreen } from './screens/ArticleScreen';
import { ClipScreen } from './screens/ClipScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from "@expo/vector-icons";
import { store } from './store';
import { Provider } from 'react-redux';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const screenOption = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    if (route.name === "HomeTab") {
      return <FontAwesome name='home' size={size} color={color} ></FontAwesome>;
    } else if (route.name === "ClipTab") {
      return <FontAwesome name='bookmark' size={size} color={color} ></FontAwesome>;
    }
  },
})

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Article" component={ArticleScreen} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={screenOption}>
          <Tab.Screen name="HomeTab" component={HomeStack} options={{ headerShown: false, title: "Home" }} />
          <Tab.Screen name="ClipTab" component={ClipScreen} options={{ headerShown: false, title: "Clip" }} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}