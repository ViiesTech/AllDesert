/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import {View, TouchableOpacity, ImageBackground} from 'react-native';
import AppColors from '../../utils/AppColors';
import {useNavigation} from '@react-navigation/native';
import AppHeader from '../../components/AppHeader';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utils/Responsive_Dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppImages from '../../assets/images/AppImages';
import SVGXml from '../../components/SVGXML';
import AppIcons from '../../assets/icons/AppIcons';
import AppText from '../../components/AppTextComps/AppText';
import LineBreak from '../../components/LineBreak';

const TechnicianOnWay = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
        navigation.navigate('TechnicianArrived');
    }, 1500);
  }, [navigation]);

  return (
    <View style={{flex: 1, backgroundColor: AppColors.WHITE}}>
      <AppHeader
        goBack={() => navigation.goBack()}
        heading={'Technician on the way'}
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
            }}
            onPress={() =>
              navigation.navigate('Chat', {heading: 'Wade Warren'})
            }>
            <Ionicons
              name="chatbox-ellipses"
              size={responsiveFontSize(2.5)}
              color={AppColors.BTNCOLOURS}
            />
          </TouchableOpacity>
        }
      />

      <View>
        <ImageBackground
          source={AppImages.map}
          style={{width: '100%', height: '100%', justifyContent: 'center'}}>
          <View
            style={{
              backgroundColor: AppColors.WHITE,
              paddingVertical: responsiveHeight(2.5),
              paddingHorizontal: responsiveWidth(2),
              marginHorizontal: responsiveWidth(6),
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <SVGXml icon={AppIcons.worker} width={70} height={70} />
            <LineBreak space={1.5} />
            <AppText
              title={'Technician On The Way...'}
              textColor={AppColors.BLACK}
              textSize={2.5}
              textFontWeight
              textAlignment={'center'}
            />
            <LineBreak space={1} />
            <AppText
              title={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              }
              textColor={AppColors.BLACK}
              textSize={1.7}
              lineHeight={2.2}
              textAlignment={'center'}
            />
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default TechnicianOnWay;
