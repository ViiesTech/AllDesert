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
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AppColors from '../utils/AppColors';
import AllCategories from '../screens/main/AllCategories';
import ServiceReqForm from '../screens/main/ServiceReqForm';
import Notifications from '../screens/main/Notifications';
import ViewProfile from '../screens/auth/ViewProfile';
import Chat from '../screens/main/Chat';
import TechnicianArrived from '../screens/main/TechnicianArrived';
import TechnicianOnWay from '../screens/main/TechnicianOnWay';
import WorkDone from '../screens/main/WorkDone';
import OrderHistory from '../screens/main/OrderHistory';
import Profile from '../screens/main/Profile';
import AskedQuestion from '../screens/main/AskedQuestion';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={MyTabs} />
      <Stack.Screen name="AllCategories" component={AllCategories} />
      <Stack.Screen name="ServiceReqForm" component={ServiceReqForm} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="ViewProfile" component={ViewProfile} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="TechnicianOnWay" component={TechnicianOnWay} />
      <Stack.Screen name="TechnicianArrived" component={TechnicianArrived} />
      <Stack.Screen name="WorkDone" component={WorkDone} />
      <Stack.Screen name="AskedQuestion" component={AskedQuestion} />
    </Stack.Navigator>
  );
};

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
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
          } else if (route.name === 'OrderHistory') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'Chat') {
            iconName = focused
              ? 'chatbubble-ellipses-sharp'
              : 'chatbubble-ellipses-outline';
          } else if (route.name === 'ServiceReqForm') {
            iconName = focused ? 'pluscircle' : 'pluscircle';
          }

          if (route.name === 'ServiceReqForm') {
            return (
              <AntDesign
                name={iconName}
                size={size}
                color={AppColors.BTNCOLOURS}
              />
            );
          } else {
            return <Ionicons name={iconName} size={size} color={color} />;
          }
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="OrderHistory" component={OrderHistory} />
      <Tab.Screen name="ServiceReqForm" component={ServiceReqForm} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default Main;
