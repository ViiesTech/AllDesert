/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import AppHeader from '../../components/AppHeader';
import AppColors from '../../utils/AppColors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utils/Responsive_Dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppImages from '../../assets/images/AppImages';
import AppText from '../../components/AppTextComps/AppText';
import LineBreak from '../../components/LineBreak';
import {useCustomNavigation} from '../../utils/Hooks';

const notificationData = [
  {
    id: 1,
    profImg: AppImages.service_img,
    username: 'Demi Hickman',
    type: 'customer',
    time: '5m ago',
    desc: 'Replied your message : What time do you plan to arrive for the maintenance',
  },
  {
    id: 2,
    profImg: AppImages.service_img,
    username: 'Demi Hickman',
    type: 'customer',
    time: '5m ago',
    desc: 'Replied your message : What time do you plan to arrive for the maintenance',
  },
  {
    id: 3,
    profImg: AppImages.service_img,
    username: 'Demi Hickman',
    type: 'customer',
    time: '5m ago',
    desc: 'Replied your message : What time do you plan to arrive for the maintenance',
  },
  {
    id: 4,
    profImg: AppImages.service_img,
    username: 'Demi Hickman',
    type: 'customer',
    time: '5m ago',
    desc: 'Replied your message : What time do you plan to arrive for the maintenance',
  },
];

const Notifications = () => {
  const {goBack} = useCustomNavigation();

  return (
    <ScrollView style={{flex: 1}}>
      <AppHeader
        heading="Notifications"
        textFontWeight
        icon={
          <TouchableOpacity onPress={() => goBack()}>
            <Ionicons
              name="close"
              size={responsiveFontSize(3.5)}
              color={AppColors.BLACK}
            />
          </TouchableOpacity>
        }
      />

      <View style={{paddingHorizontal: responsiveWidth(4)}}>
        <FlatList
          data={notificationData}
          ItemSeparatorComponent={() => <LineBreak space={2} />}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  backgroundColor: AppColors.WHITE,
                  paddingHorizontal: responsiveWidth(1.5),
                  paddingVertical: responsiveHeight(2),
                  flexDirection: 'row',
                  gap: 12,
                }}>
                <Image
                  source={item.profImg}
                  style={{width: 50, height: 50, borderRadius: 100}}
                />
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <AppText
                      title={item.username}
                      textColor={AppColors.BLACK}
                      textSize={2.3}
                      textFontWeight
                    />
                    <AppText
                      title={item.time}
                      textColor={AppColors.GRAY}
                      textSize={1.5}
                    />
                  </View>
                  <LineBreak space={0.2} />
                  <AppText
                    title={item.type}
                    textColor={AppColors.GRAY}
                    textSize={1.3}
                    textFontWeight
                  />
                  <LineBreak space={0.2} />
                  <AppText
                    title={item.desc}
                    textColor={AppColors.GRAY}
                    textSize={1.7}
                    textwidth={70}
                  />
                </View>
              </View>
            );
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Notifications;
