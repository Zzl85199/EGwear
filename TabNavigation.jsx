// Navigation.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, VirtualTryOnScreen, MyEgwearScreen, CommunityScreen, MarketScreen } from './StackNavigation';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="首頁" component={HomeScreen} />
        <Tab.Screen name="虛擬試穿" component={VirtualTryOnScreen} />
        <Tab.Screen name="我的衣櫃" component={MyEgwearScreen} />
        <Tab.Screen name="時尚社群" component={CommunityScreen} />
        <Tab.Screen name="賣場" component={MarketScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
