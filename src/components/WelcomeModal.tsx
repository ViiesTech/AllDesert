/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image} from 'react-native';
import Modal from 'react-native-modal';
import LineBreak from './LineBreak';
import {
  responsiveHeight,
  responsiveWidth,
} from '../utils/Responsive_Dimensions';
import AppText from './AppTextComps/AppText';
import AppColors from '../utils/AppColors';
import AppButton from './AppButton';
import AppImages from '../assets/images/AppImages';

type Props = {
  isVisible?: any;
  onBackdropPress?: any;
  submitOnPress?: any;
  exploreOnPress?: any;
};

const WelcomeModal = ({
  isVisible,
  onBackdropPress,
  submitOnPress,
  exploreOnPress,
}: Props) => {
  return (
    <Modal
      isVisible={isVisible}
      backdropOpacity={0.9}
      onBackdropPress={onBackdropPress}
      style={{
        flex: 1,
        margin: 0,
        justifyContent: 'flex-end',
      }}>
      <View
        style={{
          backgroundColor: 'white',
          paddingHorizontal: responsiveWidth(4),
          height: responsiveHeight(45),
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
          position: 'relative',
        }}>
        <Image
          source={AppImages.user}
          style={{
            position: 'absolute',
            top: responsiveHeight(-6),
            right: responsiveWidth(35),
          }}
        />
        <LineBreak space={12} />
        <AppText
          title={'Welcome To Work Mate!'}
          textColor={AppColors.BLACK}
          textSize={2.5}
          textwidth={60}
          textAlignment={'center'}
          textFontWeight
        />
        <LineBreak space={2} />
        <AppText
          title={
            'To enhance your user experience, please set up your profile first. This will help us tailor the app to your needs and ensure you get the most out of our features!'
          }
          textColor={AppColors.GRAY}
          textSize={1.5}
          textFontWeight
          textAlignment={'center'}
          lineHeight={2.2}
          textwidth={85}
        />
        <LineBreak space={4.5} />
        <View style={{alignSelf: 'center'}}>
          <AppButton
            title="Set up my profile"
            textColor={AppColors.WHITE}
            bgColor={AppColors.BTNCOLOURS}
            buttoWidth={85}
            borderRadius={24}
            handlePress={submitOnPress}
          />

          <LineBreak space={2} />

          <AppButton
            title="Explore The App First"
            textColor={AppColors.BLACK}
            bgColor={AppColors.WHITE}
            borderWidth={1}
            buttoWidth={85}
            borderColor={AppColors.BTNCOLOURS}
            borderRadius={24}
            handlePress={exploreOnPress}
          />
        </View>
      </View>
    </Modal>
  );
};

export default WelcomeModal;
