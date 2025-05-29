/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TouchableOpacity, FlatList} from 'react-native';
import AppColors from '../../utils/AppColors';
import AppHeader from '../../components/AppHeader';
import {useNavigation} from '@react-navigation/native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utils/Responsive_Dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LineBreak from '../../components/LineBreak';
import AppImages from '../../assets/images/AppImages';
import NotificationCard from '../../components/NotificationCard';

const notificationData = [
  {
    id: 1,
    profileImg: AppImages.service_img,
    username: 'Wade Warren',
    time: '3 Hours Ago',
    role: 'Technician',
    service: 'Ac Repair',
    usd: '$100.00',
    date: '20, Feb',
  },
  {
    id: 2,
    profileImg: AppImages.service_img,
    username: 'Wade Warren',
    time: '3 Hours Ago',
    role: 'Technician',
    service: 'Ac Repair',
    usd: '$100.00',
    date: '20, Feb',
  },
  {
    id: 3,
    profileImg: AppImages.service_img,
    username: 'Wade Warren',
    time: '3 Hours Ago',
    role: 'Technician',
    service: 'Ac Repair',
    usd: '$100.00',
    date: '20, Feb',
  },
];

const Notifications = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, backgroundColor: AppColors.WHITE}}>
      <AppHeader
        goBack={() => navigation.goBack()}
        borderBottomWidth={1}
        borderBottomColor={AppColors.DARKGRAY}
        heading="Notifications"
        icon={
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: AppColors.BTNCOLOURS,
              width: 40,
              height: 40,
              elevation: 10,
              backgroundColor: AppColors.WHITE,
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              right: responsiveWidth(5),
              top: responsiveHeight(2.1),
            }}>
            <AntDesign
              name="user"
              size={responsiveFontSize(2.5)}
              color={AppColors.BTNCOLOURS}
            />
          </TouchableOpacity>
        }
      />

      <LineBreak space={2} />

      <View style={{paddingHorizontal: responsiveWidth(5)}}>
        <FlatList
          data={notificationData}
          ItemSeparatorComponent={() => <LineBreak space={2} />}
          ListFooterComponent={() => <LineBreak space={4} />}
          renderItem={({item}) => {
            return <NotificationCard item={item} />;
          }}
        />
      </View>
    </View>
  );
};

export default Notifications;
