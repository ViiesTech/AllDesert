/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, ScrollView, TouchableOpacity, Image} from 'react-native';
import AppHeader from '../../components/AppHeader';
import Feather from 'react-native-vector-icons/Feather';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utils/Responsive_Dimensions';
import AppColors from '../../utils/AppColors';
import AppText from '../../components/AppTextComps/AppText';
import AppImages from '../../assets/images/AppImages';
import LineBreak from '../../components/LineBreak';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SVGXml from '../../components/SVGXML';
import AppIcons from '../../assets/icons/AppIcons';
import MyBalanceScreen from '../../components/ProfileComponent';

const Profile = () => {
  return (
    <ScrollView style={{flex: 1}}>
      <AppHeader
        heading="Profile"
        isCenteredHead
        headerBg={AppColors.WHITE}
        goBack
        isCenteredHeadWidth={54}
        icon={
          <TouchableOpacity onPress={() => {}}>
            <Feather
              name="edit"
              size={responsiveFontSize(3)}
              color={AppColors.BLACK}
            />
          </TouchableOpacity>
        }
      />

      <View style={{backgroundColor: AppColors.WHITE}}>
        <LineBreak space={1} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            alignSelf: 'center',
            gap: 15,
          }}>
          <View
            style={{
              flexDirection: 'row',
              gap: 5,
              alignItems: 'center',
              paddingBottom: responsiveHeight(2),
            }}>
            <AppText
              title={'12th'}
              textColor={AppColors.DARKGRAY}
              textSize={2}
            />
            <SVGXml icon={AppIcons.badge} width={18} height={18} />
          </View>

          <Image
            source={AppImages.service_img}
            style={{width: 100, height: 100, borderRadius: 100}}
          />

          <View
            style={{
              flexDirection: 'row',
              gap: 5,
              alignItems: 'center',
              paddingBottom: responsiveHeight(2),
            }}>
            <Ionicons
              name="star"
              size={responsiveFontSize(2)}
              color={'#FFCC00'}
            />
            <AppText
              title={'4.5'}
              textColor={AppColors.DARKGRAY}
              textSize={2}
            />
          </View>
        </View>

        <LineBreak space={1} />

        <View style={{paddingHorizontal: responsiveWidth(5)}}>
          <AppText
            title={'Steven Less'}
            textColor={AppColors.BLACK}
            textSize={2.5}
            textFontWeight
          />

          <LineBreak space={0.3} />

          <View style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>
            <AppText
              title={'ID#3567728'}
              textColor={AppColors.DARKGRAY}
              textSize={1.5}
            />
            <AppText
              title={'. HVAC Technician'}
              textColor={AppColors.DARKGRAY}
              textSize={1.5}
            />
          </View>
        </View>

        <LineBreak space={3} />

        <Image
          source={AppImages.chart}
          style={{
            alignSelf: 'center',
            borderWidth: 2,
            width: responsiveWidth(82),
          }}
        />
        <LineBreak space={3} />
      </View>

      <View>
        <MyBalanceScreen />
      </View>
    </ScrollView>
  );
};

export default Profile;
