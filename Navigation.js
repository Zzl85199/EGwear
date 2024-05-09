// Navigation.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import VirtualTryOn from './screens/VirtualTryOn';
import MyEgwear from './screens/MyEgwear';
import Community from './screens/Community';
import Market from './screens/Market';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="首頁" component={Home} />
        <Tab.Screen name="虛擬試穿" component={VirtualTryOn} />
        <Tab.Screen name="我的衣櫃" component={MyEgwear} />
        <Tab.Screen name="時尚社群" component={Community} />
        <Tab.Screen name="賣場" component={Market} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
