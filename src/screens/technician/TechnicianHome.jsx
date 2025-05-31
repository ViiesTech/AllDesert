/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import AppImages from '../../assets/images/AppImages';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utils/Responsive_Dimensions';
import AppColors from '../../utils/AppColors';
import AppText from '../../components/AppTextComps/AppText';
import LineBreak from '../../components/LineBreak';
import ActiveTaskCard from '../../components/ActiveTaskCard';
import {useCustomNavigation} from '../../utils/Hooks';

const statusData = [
  {
    id: 1,
    icon: (
      <Ionicons
        name={'radio-button-on'}
        size={responsiveFontSize(2.5)}
        color={'lightgreen'}
      />
    ),
    title: 'My Status',
    subTitle: 'Active',
  },
  {
    id: 2,
    icon: (
      <FontAwesome6
        name={'clock-rotate-left'}
        size={responsiveFontSize(2.5)}
        color={AppColors.WHITE}
      />
    ),
    title: 'Total work hour',
    subTitle: '32hr',
  },
  {
    id: 3,
    icon: (
      <FontAwesome6
        name={'clock-rotate-left'}
        size={responsiveFontSize(2.5)}
        color={AppColors.WHITE}
      />
    ),
    title: 'Completed',
    subTitle: '1 Day',
  },
];

const taskData = [
  {
    id: 1,
    taskId: 'TASK #13424',
    taskTime: '3hr',
    status: 'In Progress',
    desc: 'Service kondensor AC dan tiga kipas angin',
    timeLeft: '16 hour left',
    location: 'Tegal Mulyorejo Baru',
    km: '1.3 km',
  },
  {
    id: 2,
    taskId: 'TASK #13424',
    taskTime: '3hr',
    status: 'Assigned',
    desc: 'Service kondensor AC dan tiga kipas angin',
    timeLeft: '16 hour left',
    location: 'Tegal Mulyorejo Baru',
    km: '1.3 km',
  },
  {
    id: 3,
    taskId: 'TASK #13424',
    taskTime: '3hr',
    status: 'Open',
    desc: 'Service kondensor AC dan tiga kipas angin',
    timeLeft: '16 hour left',
    location: 'Tegal Mulyorejo Baru',
    km: '1.3 km',
  },
];

const TechnicianHome = () => {
  const {navigateToRoute} = useCustomNavigation();
  return (
    <ScrollView style={{flex: 1}}>
      <View
        style={{
          paddingHorizontal: responsiveWidth(4),
          paddingVertical: responsiveHeight(4),
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
          <Image
            source={AppImages.service_img}
            style={{width: 40, height: 40, borderRadius: 100}}
          />
          <View style={{flexDirection: 'row', gap: 3, alignItems: 'center'}}>
            <AppText
              title={'Welcome,'}
              textColor={AppColors.BLACK}
              textSize={2.3}
              textFontWeight
            />
            <AppText
              title={'Cody Fisher'}
              textColor={AppColors.BTNCOLOURS}
              textSize={2.3}
              textFontWeight
            />
          </View>
        </View>

        <TouchableOpacity onPress={() => navigateToRoute('Notifications')}>
          <MaterialCommunityIcons
            name="bell-badge-outline"
            size={responsiveFontSize(3)}
            color={AppColors.BLACK}
          />
        </TouchableOpacity>
      </View>

      <View>
        <FlatList
          data={statusData}
          horizontal
          contentContainerStyle={{gap: 20}}
          ItemSeparatorComponent={() => <LineBreak space={1} />}
          ListHeaderComponent={() => <LineBreak space={2} />}
          ListFooterComponent={() => <LineBreak space={2} />}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  backgroundColor: AppColors.BTNCOLOURS,
                  width: responsiveWidth(37),
                  paddingVertical: responsiveHeight(2.5),
                  paddingLeft: responsiveWidth(4),
                  gap: 12,
                }}>
                <AppText
                  title={item.title}
                  textColor={AppColors.WHITE}
                  textSize={1.7}
                />

                <View
                  style={{flexDirection: 'row', gap: 8, alignItems: 'center'}}>
                  <View>{item.icon}</View>
                  <AppText
                    title={item.subTitle}
                    textColor={AppColors.WHITE}
                    textSize={2.5}
                    textFontWeight
                  />
                </View>
              </View>
            );
          }}
        />
      </View>

      <LineBreak space={4} />

      <View style={{paddingHorizontal: responsiveWidth(5)}}>
        <AppText
          title={'active tasks'}
          textColor={AppColors.BLACK}
          textSize={2.5}
          textFontWeight
          textTransform={'uppercase'}
        />

        <LineBreak space={2} />

        <FlatList
          data={taskData}
          ItemSeparatorComponent={() => <LineBreak space={2} />}
          ListFooterComponent={() => <LineBreak space={2} />}
          showsVerticalScrollIndicator={false}
          scrollEnabled
          renderItem={({item}) => {
            return <ActiveTaskCard item={item} />;
          }}
        />
      </View>
    </ScrollView>
  );
};

export default TechnicianHome;
