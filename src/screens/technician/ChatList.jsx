/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import AppText from '../../components/AppTextComps/AppText';
import AppColors from '../../utils/AppColors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utils/Responsive_Dimensions';
import LineBreak from '../../components/LineBreak';
import AppTextInput from '../../components/AppTextInput';
import Feather from 'react-native-vector-icons/Feather';
import AppImages from '../../assets/images/AppImages';
import {useCustomNavigation} from '../../utils/Hooks';

const chatlist = [
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

const ChatList = () => {
  const {navigateToRoute} = useCustomNavigation();

  return (
    <ScrollView style={{flex: 1}}>
      <LineBreak space={2} />
      <View style={{paddingHorizontal: responsiveWidth(4)}}>
        <AppText
          title={'Chats'}
          textColor={AppColors.BLACK}
          textSize={2}
          textFontWeight
          textTransform={'uppercase'}
        />

        <LineBreak space={0.5} />

        <AppTextInput
          inputPlaceHolder={''}
          borderRadius={-1}
          containerBg={AppColors.WHITE}
          logo={
            <View style={{paddingHorizontal: responsiveWidth(1)}}>
              <Feather
                name="search"
                size={responsiveFontSize(2.5)}
                color={AppColors.BLACK}
              />
            </View>
          }
        />

        <LineBreak space={1} />

        <FlatList
          data={chatlist}
          ItemSeparatorComponent={() => <LineBreak space={2} />}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={{
                  backgroundColor: AppColors.WHITE,
                  paddingHorizontal: responsiveWidth(1.5),
                  paddingVertical: responsiveHeight(2),
                  flexDirection: 'row',
                  gap: 12,
                }}
                onPress={() => navigateToRoute('PrivateChat')}>
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
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </ScrollView>
  );
};

export default ChatList;
