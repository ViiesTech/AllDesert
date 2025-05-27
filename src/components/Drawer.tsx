/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TouchableOpacity, FlatList} from 'react-native';
import Modal from 'react-native-modal';
import {
  responsiveFontSize,
  responsiveWidth,
} from '../utils/Responsive_Dimensions';
import AppColors from '../utils/AppColors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LineBreak from './LineBreak';
import AppText from './AppTextComps/AppText';
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    id: 1,
    icon: (
      <FontAwesome6
        name="user-large"
        size={responsiveFontSize(2.2)}
        color={AppColors.BLACK}
      />
    ),
    title: 'profile',
    navTo: 'Profile',
  },
  {
    id: 2,
    icon: (
      <AntDesign
        name="clockcircleo"
        size={responsiveFontSize(2.2)}
        color={AppColors.BLACK}
      />
    ),
    title: 'history',
    navTo: 'History',
  },
  {
    id: 3,
    icon: (
      <FontAwesome
        name="calendar"
        size={responsiveFontSize(2.2)}
        color={AppColors.BLACK}
      />
    ),
    title: 'appointments',
    navTo: 'Appointments',
  },
  {
    id: 4,
    icon: (
      <Feather
        name="settings"
        size={responsiveFontSize(2.2)}
        color={AppColors.BLACK}
      />
    ),
    title: 'settings',
    navTo: 'Settings',
  },
  {
    id: 5,
    icon: (
      <AntDesign
        name="wechat"
        size={responsiveFontSize(2.2)}
        color={AppColors.BLACK}
      />
    ),
    title: 'cHAT hISTORY',
    navTo: 'CallAndChatHistory',
  },
  {
    id: 6,
    icon: (
      <Ionicons
        name="call-outline"
        size={responsiveFontSize(2.2)}
        color={AppColors.BLACK}
      />
    ),
    title: 'cALL hISTORY',
    navTo: 'CallAndChatHistory',
  },
];

type props = {
  isVisible?: any;
  onBackdropPress?: any;
  closeIconOnPress?: any;
};

const Drawer = ({
  isVisible = true,
  onBackdropPress,
  closeIconOnPress,
}: props) => {
  const navigation = useNavigation();
  return (
    <Modal
      isVisible={isVisible}
      animationIn="slideInRight"
      animationOut="slideOutRight"
      onBackdropPress={onBackdropPress}
      style={{
        margin: 0,
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
      }}>
      <View
        style={{
          height: '100%',
          width: responsiveWidth(55),
          backgroundColor: AppColors.WHITE,
        }}>
        <LineBreak space={1} />
        <View style={{marginHorizontal: responsiveWidth(2)}}>
          <TouchableOpacity onPress={closeIconOnPress}>
            <Ionicons
              name="close"
              size={responsiveFontSize(2.2)}
              color={AppColors.BLACK}
            />
          </TouchableOpacity>
        </View>

        <LineBreak space={12} />

        <View style={{marginHorizontal: responsiveWidth(4)}}>
          <FlatList
            data={data}
            ItemSeparatorComponent={() => <LineBreak space={2.5} />}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}
                  onPress={() => {
                    if(item.navTo){
                      navigation.navigate(item.navTo, {screen: item.title});
                      onBackdropPress();
                    }
                  }}
                  >
                  {item.icon}
                  <AppText
                    title={item.title}
                    textColor={AppColors.BLACK}
                    textSize={1.8}
                    textTransform={'uppercase'}
                    textFontWeight
                  />
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            marginHorizontal: responsiveWidth(4),
          }}>
          <TouchableOpacity
            style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}
            onPress={() => {
              navigation.navigate('Auth');
              onBackdropPress();
            }}
            >
            <MaterialIcons
              name="logout"
              size={responsiveFontSize(2.2)}
              color={AppColors.BLACK}
            />
            <AppText
              title={'Logout'}
              textColor={AppColors.BLACK}
              textSize={1.8}
              textTransform={'uppercase'}
              textFontWeight
            />
          </TouchableOpacity>
        </View>

        <LineBreak space={3} />
      </View>
    </Modal>
  );
};

export default Drawer;
