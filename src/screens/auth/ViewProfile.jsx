/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import AppColors from '../../utils/AppColors';
import {useNavigation} from '@react-navigation/native';
import AppHeader from '../../components/AppHeader';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utils/Responsive_Dimensions';
import AppImages from '../../assets/images/AppImages';
import AppText from '../../components/AppTextComps/AppText';
import LineBreak from '../../components/LineBreak';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AppButton from '../../components/AppButton';

const ViewProfile = ({route}) => {
  const navigation = useNavigation();
  const heading = route?.params?.heading;

  return (
    <View style={{flex: 1, backgroundColor: AppColors.WHITE}}>
      <AppHeader
        goBack={() => navigation.goBack()}
        heading={heading || 'View Profile'}
      />

      <View style={{paddingHorizontal: responsiveWidth(6)}}>
        <View
          style={{
            backgroundColor: AppColors.BTNCOLOURS,
            paddingHorizontal: responsiveWidth(3),
            paddingVertical: responsiveHeight(2),
            borderRadius: 10,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <Image
              source={AppImages.service_img}
              style={{
                width: 100,
                height: 100,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: AppColors.WHITE,
              }}
            />
            <View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <AppText
                  title={heading}
                  textColor={AppColors.WHITE}
                  textSize={2}
                />
                <TouchableOpacity
                  style={{
                    width: 27,
                    height: 27,
                    borderWidth: 1,
                    borderColor: AppColors.WHITE,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 100,
                  }}>
                  <AntDesign
                    name="hearto"
                    size={responsiveFontSize(1.7)}
                    color={AppColors.WHITE}
                  />
                </TouchableOpacity>
              </View>

              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>
                <AppText
                  title={'Ac Technician'}
                  textColor={AppColors.WHITE}
                  textSize={1.5}
                  textFontWeight={false}
                />

                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
                  <AppText
                    title={'3.4'}
                    textColor={AppColors.WHITE}
                    textSize={1.5}
                    textFontWeight={false}
                  />
                  <Ionicons
                    name="star"
                    size={responsiveFontSize(1.5)}
                    color={AppColors.Yellow}
                  />
                </View>
              </View>

              <LineBreak space={2} />
              <View
                style={{
                  flexDirection: 'row',
                  width: responsiveWidth(54),
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View>
                  <AppText
                    title={'Typically reply in'}
                    textColor={AppColors.WHITE}
                    textSize={1.5}
                    textFontWeight={false}
                  />
                  <AppText
                    title={'30 seconds'}
                    textColor={AppColors.WHITE}
                    textSize={1.5}
                    textFontWeight={false}
                  />
                </View>

                <View>
                  <AppButton
                    title="Contact Now"
                    textColor={AppColors.BTNCOLOURS}
                    bgColor={AppColors.WHITE}
                    textFontWeight
                    borderRadius={100}
                    padding={5}
                    buttoWidth={25}
                    textSize={1.5}
                    handlePress={() => navigation.navigate('Chat', {heading})}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>

        <LineBreak space={2} />

        <View>
          <View>
            <AppText
              title={'About Wade,'}
              textColor={AppColors.BLACK}
              textSize={2.3}
              textFontWeight
            />
            <LineBreak space={0.7} />
            <AppText
              title={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod aliquip ex ea commodo consequat.'
              }
              textColor={AppColors.GRAY}
              textSize={1.7}
              lineHeight={2.2}
            />
          </View>
          <LineBreak space={2} />
          <View>
            <AppText
              title={'Experience in AC Repairing'}
              textColor={AppColors.BLACK}
              textSize={2.3}
              textFontWeight
            />
            <LineBreak space={0.7} />
            <AppText
              title={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod aliquip ex ea commodo consequat.'
              }
              textColor={AppColors.GRAY}
              textSize={1.7}
              lineHeight={2.2}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ViewProfile;
