/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
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
import CompletedTaskCard from '../../components/CompletedTaskCard';
import {useCustomNavigation} from '../../utils/Hooks';

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
    navTo: 'Calling',
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
    navTo: 'Calling',
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
    navTo: 'Technician',
  },
];

const completeTaskData = [
  {
    id: 1,
    taskId: 'TASK #13424',
    taskTime: '3hr',
    status: 'completed',
    desc: '2 Heater units and ventilation service',
    completedAt: '03/07/2020 8;20 AM',
    username: 'Demi Hickman',
    rating: '4.8',
    profImg: AppImages.service_img,
  },
  {
    id: 2,
    taskId: 'TASK #13424',
    taskTime: '3hr',
    status: 'completed',
    desc: '2 Heater units and ventilation service',
    completedAt: '03/07/2020 8;20 AM',
    username: 'Demi Hickman',
    rating: '4.8',
    profImg: AppImages.service_img,
  },
];

const UserDetails = () => {
  const {navigateToRoute} = useCustomNavigation();

  return (
    <ScrollView style={{flex: 1}}>
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
        }}>
        <View
          style={{
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
                  }}
                  onPress={() => navigateToRoute(item.navTo)}>
                  {item.icon}
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <LineBreak space={3} />
        <Image
          source={AppImages.map}
          style={{width: responsiveWidth(90), height: responsiveHeight(20)}}
        />
        <LineBreak space={2} />

        <TouchableOpacity>
          <AppText
            title={'set directions'}
            textColor={AppColors.BTNCOLOURS}
            textSize={1.6}
            textFontWeight
          />
        </TouchableOpacity>

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
        <LineBreak space={2} />

        <FlatList
          data={completeTaskData}
          ItemSeparatorComponent={() => <LineBreak space={3} />}
          renderItem={({item}) => {
            return <CompletedTaskCard item={item} />;
          }}
        />

        <LineBreak space={2} />
      </View>
    </ScrollView>
  );
};

export default UserDetails;
