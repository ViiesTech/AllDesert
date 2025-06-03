/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import TechnicianHome from '../screens/technician/TechnicianHome';
import AppColors from '../utils/AppColors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../utils/Responsive_Dimensions';
import Calendar from '../screens/technician/Calendar';
import Camera from '../screens/technician/Camera';
import Chat from '../screens/technician/Chat';
import Community from '../screens/technician/Community';
import {TouchableOpacity, View} from 'react-native';
import Notifications from '../screens/technician/Notifications';
import TaskDetails from '../screens/technician/TaskDetails';
import CustomerDetails from '../screens/technician/CustomerDetails';
import TaskInfo from '../screens/technician/TaskInfo';
import AddNotes from '../screens/technician/AddNotes';
import UserDetails from '../screens/technician/UserDetails';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TechnicianMain = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TechnicianMain" component={MyTabs} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="TaskDetails" component={TaskDetails} />
      <Stack.Screen name="CustomerDetails" component={CustomerDetails} />
      <Stack.Screen name="TaskInfo" component={TaskInfo} />
      <Stack.Screen name="AddNotes" component={AddNotes} />
      <Stack.Screen name="UserDetails" component={UserDetails} />
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
          paddingTop: responsiveHeight(0.7),
          position: 'relative',
        },
        tabBarLabelStyle: {fontSize: responsiveFontSize(1.6)},
        tabBarActiveTintColor: AppColors.BTNCOLOURS,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Community') {
            iconName = focused ? 'web' : 'web';
          } else if (route.name === 'Calendar') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'Chats') {
            iconName = focused
              ? 'chatbubble-ellipses-sharp'
              : 'chatbubble-ellipses-outline';
          }

          if (route.name === 'Camera') {
            return (
              <View
                style={{
                  backgroundColor: AppColors.BTNCOLOURS,
                  width: responsiveWidth(18),
                  height: 62,
                  position: 'absolute',
                  bottom: responsiveHeight(-3),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Feather
                  name={iconName}
                  size={responsiveFontSize(3.5)}
                  color={AppColors.WHITE}
                />
              </View>
            );
          } else if (route.name === 'Community') {
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          } else {
            return <Ionicons name={iconName} size={size} color={color} />;
          }
        },
      })}>
      <Tab.Screen name="Home" component={TechnicianHome} />
      <Tab.Screen name="Calendar" component={Calendar} />
      <Tab.Screen
        name="Camera"
        component={Camera}
        options={{
          tabBarLabelStyle: {display: 'none'},
          tabBarButton: props => (
            <TouchableOpacity
              {...props}
              style={{
                backgroundColor: AppColors.BTNCOLOURS,
                width: responsiveWidth(18),
                height: 65,
                position: 'absolute',
                top: responsiveHeight(-1),
                right: 0,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Feather
                name={'camera'}
                size={responsiveFontSize(3.5)}
                color={AppColors.WHITE}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen name="Chats" component={Chat} />
      <Tab.Screen name="Community" component={Community} />
    </Tab.Navigator>
  );
}

export default TechnicianMain;
