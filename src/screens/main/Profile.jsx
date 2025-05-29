/* eslint-disable eqeqeq */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import AppColors from '../../utils/AppColors';
import {useNavigation} from '@react-navigation/native';
import AppHeader from '../../components/AppHeader';
import {
  responsiveFontSize,
  responsiveWidth,
} from '../../utils/Responsive_Dimensions';
import AppText from '../../components/AppTextComps/AppText';
import AppImages from '../../assets/images/AppImages';
import LineBreak from '../../components/LineBreak';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const profileData = [
  {id: 1, heading: 'My Account'},
  {
    id: 2,
    title: 'Personal information',
    leftIcon: (
      <FontAwesome5
        name="user"
        size={responsiveFontSize(2.5)}
        color={AppColors.BLACK}
      />
    ),
  },
  {
    id: 3,
    title: 'Language',
    leftIcon: (
      <Foundation
        name="web"
        size={responsiveFontSize(3)}
        color={AppColors.BLACK}
      />
    ),
    rightTitle: 'English (US)',
  },
  {
    id: 4,
    title: 'Privacy Policy',
    leftIcon: (
      <Octicons
        name="shield-lock"
        size={responsiveFontSize(2.5)}
        color={AppColors.BLACK}
      />
    ),
  },
  {
    id: 5,
    title: 'Setting',
    leftIcon: (
      <AntDesign
        name="setting"
        size={responsiveFontSize(2.5)}
        color={AppColors.BLACK}
      />
    ),
  },
  {
    id: 6,
    title: 'Appointment History',
    leftIcon: (
      <AntDesign
        name="calendar"
        size={responsiveFontSize(2.5)}
        color={AppColors.BLACK}
      />
    ),
    navTo: 'OrderHistory',
  },
  {id: 7, heading: 'Notifications'},
  {
    id: 8,
    title: 'Push Notifications',
    leftIcon: (
      <AntDesign
        name="bells"
        size={responsiveFontSize(2.5)}
        color={AppColors.BLACK}
      />
    ),
  },
  {
    id: 9,
    title: 'Promotional Notifications',
    leftIcon: (
      <AntDesign
        name="bells"
        size={responsiveFontSize(2.5)}
        color={AppColors.BLACK}
      />
    ),
  },
  {id: 10, heading: 'More'},
  {
    id: 11,
    title: 'Frequently Asked Questions',
    leftIcon: (
      <Feather
        name="alert-circle"
        size={responsiveFontSize(2.5)}
        color={AppColors.BLACK}
      />
    ),
    navTo: 'AskedQuestion',
  },
  {
    id: 12,
    title: 'Log Out',
    leftIcon: (
      <MaterialIcons
        name="logout"
        size={responsiveFontSize(2.5)}
        color={'red'}
      />
    ),
    navTo: 'Auth',
  },
];

const Profile = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={{flex: 1, backgroundColor: AppColors.WHITE}}>
      <AppHeader goBack={() => navigation.goBack()} heading={'Profile'} />

      <View style={{paddingHorizontal: responsiveWidth(5)}}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={AppImages.service_img}
            style={{width: 90, height: 90, borderRadius: 200}}
          />
          <LineBreak space={1} />
          <AppText
            title={'Jenny Wilson'}
            textColor={AppColors.BLACK}
            textSize={2.2}
            textFontWeight
          />
          <AppText
            title={'jennywilson@gmail.com'}
            textColor={AppColors.DARKGRAY}
            textSize={2}
          />
        </View>

        <FlatList
          data={profileData}
          ItemSeparatorComponent={() => <LineBreak space={1.5} />}
          ListFooterComponent={() => <LineBreak space={2} />}
          ListHeaderComponent={() => <LineBreak space={2} />}
          renderItem={({item}) => {
            return (
              <View>
                {item.heading && (
                  <View>
                    <LineBreak space={2} />
                    <AppText
                      title={item.heading}
                      textColor={AppColors.BLACK}
                      textSize={2}
                      textFontWeight
                    />
                  </View>
                )}
                {item.title && (
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                    onPress={() => {
                      if (item.navTo) {
                        navigation.navigate(item.navTo);
                      } else {
                        Alert.alert('Screen soon');
                      }
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        gap: 10,
                        alignItems: 'center',
                      }}>
                      <View>{item.leftIcon}</View>
                      <AppText
                        title={item.title}
                        textColor={item.id == 12 ? 'red' : AppColors.BLACK}
                        textSize={1.8}
                        textFontWeight
                      />
                    </View>
                    <AppText
                      title={item.rightTitle}
                      textColor={AppColors.BLACK}
                      textSize={1.8}
                    />
                    {item.id == 8 || item.id == 9 ? (
                      <FontAwesome6
                        name="toggle-on"
                        size={responsiveFontSize(3)}
                        color={AppColors.BTNCOLOURS}
                      />
                    ) : null}
                  </TouchableOpacity>
                )}
              </View>
            );
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Profile;
