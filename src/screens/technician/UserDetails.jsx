/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, FlatList, TouchableOpacity} from 'react-native';
import AppHeader from '../../components/AppHeader';
import AppColors from '../../utils/AppColors';
import LineBreak from '../../components/LineBreak';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utils/Responsive_Dimensions';
import AppImages from '../../assets/images/AppImages';
import AppText from '../../components/AppTextComps/AppText';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ActiveTaskCard from '../../components/ActiveTaskCard';

const socialIcons = [
  {
    id: 1,
    icon: (
      <Ionicons
        name="call-outline"
        size={responsiveFontSize(3.5)}
        color={AppColors.BTNCOLOURS}
      />
    ),
    color: AppColors.BTNCOLOURS,
  },
  {
    id: 2,
    icon: (
      <Ionicons
        name="chatbubble-outline"
        size={responsiveFontSize(3.5)}
        color={AppColors.royalBlue}
      />
    ),
    color: AppColors.royalBlue,
  },
  {
    id: 3,
    icon: (
      <MaterialCommunityIcons
        name="email-outline"
        size={responsiveFontSize(3.5)}
        color={AppColors.hotPink}
      />
    ),
    color: AppColors.hotPink,
  },
];

const UserDetails = () => {
  return (
    <View style={{flex: 1}}>
      <AppHeader
        heading="Task Details"
        goBack
        isCenteredHead
        headerBg={AppColors.WHITE}
      />

      <View
        style={{
          backgroundColor: AppColors.WHITE,
          paddingHorizontal: responsiveWidth(5),
          alignItems: 'center',
        }}>
        <LineBreak space={1} />
        <Image
          source={AppImages.service_img}
          style={{width: 70, height: 70, borderRadius: 100}}
        />
        <LineBreak space={1} />
        <AppText
          title={'Savannah Nguyen'}
          textColor={AppColors.BLACK}
          textSize={2}
          textFontWeight
        />
        <LineBreak space={1} />
        <AppText
          title={'3891 Ranchiview Dr Richardson, California 62369'}
          textColor={AppColors.DARKGRAY}
          textSize={1.7}
          textwidth={60}
          lineHeight={2.5}
          textAlignment={'center'}
        />
        <LineBreak space={2} />

        <FlatList
          data={socialIcons}
          horizontal
          contentContainerStyle={{gap: 15}}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: item.color,
                  padding: responsiveHeight(1),
                  borderRadius: 100,
                }}>
                {item.icon}
              </TouchableOpacity>
            );
          }}
        />

        <LineBreak space={3} />
      </View>

      <LineBreak space={2} />

      <View style={{paddingHorizontal: responsiveWidth(5)}}>
        <ActiveTaskCard
          item={{
            id: 1,
            taskId: 'TASK #13424',
            taskTime: '3hr',
            status: 'In Progress',
            desc: 'Service kondensor AC dan tiga kipas angin',
            timeLeft: '16 hour left',
          }}
          statusOnPress={() => {}}
        />
        <LineBreak space={2} />
        <AppText
          title={'Completed Task'}
          textColor={AppColors.BLACK}
          textSize={2.2}
          textFontWeight
        />
      </View>
    </View>
  );
};

export default UserDetails;
