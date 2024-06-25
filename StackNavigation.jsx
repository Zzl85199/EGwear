import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import VirtualTryOn from './screens/VirtualTryOn';
import MyEgwear from './screens/MyEgwear';
import Community from './screens/Community';
import Market from './screens/Market';
import Post from './components/Post';

const HomeStack = createNativeStackNavigator();
const VirtualTryOnStack = createNativeStackNavigator();
const MyEgwearStack = createNativeStackNavigator();
const CommunityStack = createNativeStackNavigator();
const MarketStack = createNativeStackNavigator();

const HomeScreen = () => {
  return (
  <HomeStack.Navigator screenOptions={{ headerShown: false }}>
    <HomeStack.Screen name="home" component={Home}/>
  </HomeStack.Navigator>
  )
}

const VirtualTryOnScreen = () => {
  return (
  <VirtualTryOnStack.Navigator screenOptions={{ headerShown: false }}>
    <VirtualTryOnStack.Screen name="virtualTryOn" component={VirtualTryOn}/>
  </VirtualTryOnStack.Navigator>
  )
}

const MyEgwearScreen = () => {
  return (
  <MyEgwearStack.Navigator screenOptions={{ headerShown: false }}>
    <MyEgwearStack.Screen name="myegwear" component={MyEgwear}/>
  </MyEgwearStack.Navigator>
  )
}

const CommunityScreen = () => {
  return (
  <CommunityStack.Navigator screenOptions={{ headerShown: false }}>
    <CommunityStack.Screen name="community" component={Community}/>
    <CommunityStack.Screen name="post" component={Post}/>
  </CommunityStack.Navigator>
  )
}

const MarketScreen = () => {
  return (
  <MarketStack.Navigator screenOptions={{ headerShown: false }}>
    <MarketStack.Screen name="market" component={Market}/>
  </MarketStack.Navigator>
  )
}

export { HomeScreen, VirtualTryOnScreen, MyEgwearScreen, CommunityScreen, MarketScreen }