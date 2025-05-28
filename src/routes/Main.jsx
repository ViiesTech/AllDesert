/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import Home from '../screens/main/Home';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../utils/Responsive_Dimensions';
import {Image} from 'react-native';
import AppImages from '../assets/images/AppImages';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppColors from '../utils/AppColors';
import AllCategories from '../screens/main/AllCategories';
import ServiceReqForm from '../screens/main/ServiceReqForm';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={MyTabs} />
      <Stack.Screen name="AllCategories" component={AllCategories} />
      <Stack.Screen name="ServiceReqForm" component={ServiceReqForm} />
    </Stack.Navigator>
  );
};

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarLabelStyle: {fontSize: responsiveFontSize(1.7)},
        tabBarStyle: {
          height: responsiveHeight(8),
          paddingTop: responsiveHeight(1.5),
        },
        tabBarActiveTintColor: AppColors.BTNCOLOURS,
        tabBarLabel: '',
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Booking') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'Favourites') {
            iconName = focused ? 'heart' : 'heart-outline';
          }

          if (route.name === 'Warz') {
            return (
              <Image
                source={AppImages.LOGO}
                style={{
                  width: responsiveWidth(6.5),
                  height: responsiveHeight(3.5),
                }}
              />
            );
          } else {
            return <Ionicons name={iconName} size={size} color={color} />;
          }
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
}

export default Main;
