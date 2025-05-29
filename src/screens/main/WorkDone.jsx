/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AppTextInput from '../../components/AppTextInput';
import AppButton from '../../components/AppButton';

const WorkDone = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, backgroundColor: AppColors.WHITE}}>
      <AppHeader
        goBack={() => navigation.goBack()}
        heading={'Work Done!'}
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
            <SVGXml icon={AppIcons.success} width={100} height={100} />
            <AppText
              title={'Your Work Have Been Done!'}
              textColor={AppColors.BLACK}
              textSize={2.5}
              textFontWeight
              textAlignment={'center'}
            />
            <LineBreak space={2} />
            <AppTextInput
              inputPlaceHolder={'Leave feedback'}
              borderRadius={100}
              inputWidth={65}
              placeholderTextColor={AppColors.DARKGRAY}
              logo={
                <View style={{paddingLeft: responsiveWidth(2)}}>
                  <FontAwesome5
                    name="edit"
                    size={responsiveFontSize(2.2)}
                    color={AppColors.BTNCOLOURS}
                  />
                </View>
              }
            />
            <LineBreak space={1.5} />
            <AppButton
              title="Submit & Back To Home"
              textColor={AppColors.WHITE}
              bgColor={AppColors.BTNCOLOURS}
              borderRadius={24}
              buttoWidth={80}
              padding={15}
              handlePress={() => navigation.navigate('Main')}
            />
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default WorkDone;
