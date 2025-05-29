/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, TouchableOpacity, FlatList} from 'react-native';
import AppHeader from '../../components/AppHeader';
import AppColors from '../../utils/AppColors';
import {responsiveWidth} from '../../utils/Responsive_Dimensions';
import AppText from '../../components/AppTextComps/AppText';
import LineBreak from '../../components/LineBreak';
import AppImages from '../../assets/images/AppImages';
import NotificationCard from '../../components/NotificationCard';

const notificationData = [
  {
    id: 1,
    profileImg: AppImages.service_img,
    username: 'Wade Warren',
    time: '2/18/2025',
    role: 'Technician',
    service: 'Ac Repair',
    usd: '$100.00',
    date: '20, Feb',
  },
  {
    id: 2,
    profileImg: AppImages.service_img,
    username: 'Wade Warren',
    time: '2/18/2025',
    role: 'Technician',
    service: 'Ac Repair',
    usd: '$100.00',
    date: '20, Feb',
  },
  {
    id: 3,
    profileImg: AppImages.service_img,
    username: 'Wade Warren',
    time: '2/18/2025',
    role: 'Technician',
    service: 'Ac Repair',
    usd: '$100.00',
    date: '20, Feb',
  },
];

const OrderHistory = () => {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState('Complete Orders');

  return (
    <View style={{flex: 1, backgroundColor: AppColors.WHITE}}>
      <AppHeader
        goBack={() => navigation.goBack()}
        borderBottomWidth={1}
        borderBottomColor={AppColors.DARKGRAY}
        heading={'Order History'}
      />

      <LineBreak space={4} />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: responsiveWidth(6),
        }}>
        <TouchableOpacity
          style={{
            borderBottomWidth: selectedTab === 'Complete Orders' ? 1 : 0,
            borderBottomColor: AppColors.BTNCOLOURS,
          }}
          onPress={() => setSelectedTab('Complete Orders')}>
          <AppText
            title={'Complete Orders'}
            textColor={
              selectedTab === 'Complete Orders'
                ? AppColors.BTNCOLOURS
                : AppColors.LIGHTGRAY
            }
            textSize={2}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedTab('Upcoming Orders')}
          style={{
            borderBottomWidth: selectedTab === 'Upcoming Orders' ? 1 : 0,
            borderBottomColor: AppColors.BTNCOLOURS,
          }}>
          <AppText
            title={'Upcoming Orders'}
            textColor={
              selectedTab === 'Upcoming Orders'
                ? AppColors.BTNCOLOURS
                : AppColors.LIGHTGRAY
            }
            textSize={2}
          />
        </TouchableOpacity>
      </View>
      <LineBreak space={2} />

      <View style={{paddingHorizontal: responsiveWidth(5)}}>
        <FlatList
          data={notificationData}
          ItemSeparatorComponent={() => <LineBreak space={2} />}
          ListFooterComponent={() => <LineBreak space={4} />}
          renderItem={({item}) => {
            return (
              <NotificationCard item={item} orderHistory={'orderHistory'} />
            );
          }}
        />
      </View>
    </View>
  );
};

export default OrderHistory;
