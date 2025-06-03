/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import AppHeader from '../../components/AppHeader';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utils/Responsive_Dimensions';
import TabBarTab from '../../components/TabBarTab';
import ActiveTaskCard from '../../components/ActiveTaskCard';
import LineBreak from '../../components/LineBreak';
import TaskCompletenessCard from '../../components/TaskCompletenessCard';
import Feather from 'react-native-vector-icons/Feather';
import AppColors from '../../utils/AppColors';
import CustomerNoteCard from '../../components/CustomerNoteCard';
import AppText from '../../components/AppTextComps/AppText';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppImages from '../../assets/images/AppImages';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useCustomNavigation} from '../../utils/Hooks';

const tabData = [
  {id: 1, title: 'OVERVIEW'},
  {id: 2, title: 'UNIT INFO'},
  {id: 3, title: 'NOTES'},
];

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

const data = [
  {
    id: 1,
    title: 'Task Completeness',
    icon: (
      <Feather
        name="check-circle"
        size={responsiveFontSize(2.5)}
        color={AppColors.BTNCOLOURS}
      />
    ),
  },
  {
    id: 2,
    title: 'Cleanliness',
    icon: (
      <Feather
        name="check-circle"
        size={responsiveFontSize(2.5)}
        color={AppColors.BTNCOLOURS}
      />
    ),
  },
  {
    id: 3,
    title: 'Customer Approval',
    icon: (
      <Feather
        name="check-circle"
        size={responsiveFontSize(2.5)}
        color={AppColors.BTNCOLOURS}
      />
    ),
  },
  {
    id: 4,
    title: 'Work Rating',
  },
];

const Technician = () => {
  const {navigateToRoute} = useCustomNavigation();
  const [selectedTab, setSelectedTab] = useState({id: 1});

  return (
    <ScrollView style={{flex: 1}}>
      <AppHeader
        heading="Customer details"
        isCenteredHead
        goBack
        isCenteredHeadWidth={65}
        textFontWeight={true}
        taskId={'TASK #13424'}
      />

      <View style={{paddingHorizontal: responsiveWidth(5)}}>
        <FlatList
          data={tabData}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{gap: 10}}
          renderItem={({item}) => {
            return (
              <TabBarTab
                item={item}
                selectedTab={selectedTab}
                tabContainerOnPress={() => setSelectedTab({id: item.id})}
              />
            );
          }}
        />

        <LineBreak space={3} />

        <ActiveTaskCard
          item={{
            id: 1,
            taskId: 'TASK #13424',
            taskTime: '3hr',
            status: 'Completed',
            desc: 'Service kondensor AC dan tiga kipas angin',
            timeLeft: '16 hour left',
          }}
          removeSpace={'removeSpace'}
        />
        <LineBreak space={3} />

        <TaskCompletenessCard data={data} />

        <LineBreak space={3} />

        <CustomerNoteCard customerDetails={'customerDetails'} />

        <LineBreak space={3} />

        <View
          style={{
            backgroundColor: AppColors.WHITE,
            paddingHorizontal: responsiveWidth(4),
            paddingVertical: responsiveHeight(2),
          }}>
          <AppText
            title={'UNIT INFORMATION'}
            textColor={AppColors.GRAY}
            textSize={1.7}
            textFontWeight
          />
          <LineBreak space={0.5} />
          <AppText
            title={'Samsung S02EV6'}
            textColor={AppColors.BLACK}
            textSize={1.7}
            textFontWeight
          />
          <LineBreak space={0.5} />
          <AppText
            title={'Spirit Air Condiotioner'}
            textColor={AppColors.GRAY}
            textSize={1.7}
          />
          <LineBreak space={3} />
          <View style={{flexDirection: 'row', gap: 5, overflow: 'hidden'}}>
            {[...Array(5)].map((_, index) => (
              <View
                key={index}
                style={{
                  width: responsiveWidth(20),
                  height: responsiveHeight(10),
                  backgroundColor: '#D9D9D9',
                }}
              />
            ))}
          </View>
          <LineBreak space={1} />
          <TouchableOpacity onPress={() => {}}>
            <AppText
              title={'View Details'}
              textColor={AppColors.BTNCOLOURS}
              textSize={1.7}
              textFontWeight
              textAlignment={'right'}
            />
          </TouchableOpacity>
        </View>

        <LineBreak space={3} />

        <View
          style={{
            backgroundColor: AppColors.WHITE,
            paddingHorizontal: responsiveWidth(4),
            paddingVertical: responsiveHeight(2),
          }}>
          <AppText
            title={'TECHNICIAN'}
            textColor={AppColors.BLACK}
            textSize={1.4}
            textFontWeight
          />
          <LineBreak space={1.5} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 12,
              }}>
              <Image
                source={AppImages.service_img}
                style={{width: 40, height: 40, borderRadius: 100}}
              />
              <View>
                <AppText
                  title={'You'}
                  textColor={AppColors.GRAY}
                  textSize={2}
                  textFontWeight
                  textTransform={'uppercase'}
                />
                <AppText
                  title={'ID#433232'}
                  textColor={AppColors.DARKGRAY}
                  textSize={1.7}
                  textFontWeight
                />
              </View>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
              <Ionicons
                name="star"
                size={responsiveFontSize(1.7)}
                color={AppColors.Yellow}
              />
              <AppText
                title={'4.5'}
                textColor={AppColors.GRAY}
                textSize={1.7}
                textFontWeight
              />
            </View>
          </View>

          <LineBreak space={1.5} />

          <FlatList
            data={socialIcons}
            horizontal
            contentContainerStyle={{gap: 15, flex: 1, justifyContent: 'center'}}
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
      </View>
      <LineBreak space={3} />
    </ScrollView>
  );
};

export default Technician;
