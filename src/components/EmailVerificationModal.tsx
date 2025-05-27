/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
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
import {OtpInput} from 'react-native-otp-entry';

type Props = {
  isVisible?: any;
  onBackdropPress?: any;
  submitOnPress?: any;
};

const EmailVerificationModal = ({
  isVisible,
  onBackdropPress,
  submitOnPress,
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
          height: responsiveHeight(50),
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
          position: 'relative',
        }}>
        <Image
          source={AppImages.email}
          style={{
            position: 'absolute',
            top: responsiveHeight(-6),
            right: responsiveWidth(35),
          }}
        />
        <LineBreak space={12} />
        <AppText
          title={'Email Verification Sent!'}
          textColor={AppColors.BLACK}
          textSize={2.5}
          textwidth={60}
          textAlignment={'center'}
          textFontWeight
        />
        <LineBreak space={2} />
        <AppText
          title={
            'A verification code will be sent to the email Hello@work.com for your account verification process.'
          }
          textColor={AppColors.GRAY}
          textSize={1.9}
          textFontWeight
          textAlignment={'center'}
          lineHeight={2.5}
        />
        <LineBreak space={2} />
        <View style={{paddingHorizontal: responsiveWidth(4)}}>
          <OtpInput
            numberOfDigits={6}
            type="numeric"
            onFilled={text => console.log(`OTP is ${text}`)}
            onTextChange={text => console.log(text)}
            theme={{
              pinCodeContainerStyle: {
                backgroundColor: AppColors.WHITE,
                borderRadius: 8,
                width: responsiveWidth(12),
                height: responsiveWidth(12),
              },
              pinCodeTextStyle: {color: AppColors.BLACK},
            }}
          />
        </View>
        <LineBreak space={2} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
          }}>
          <AppText
            title={'Haven"t received the verification code?'}
            textColor={AppColors.BLACK}
            textSize={1.7}
          />
          <TouchableOpacity>
            <AppText
              title={'Resend it.'}
              textColor={'#592202'}
              textSize={1.7}
            />
          </TouchableOpacity>
        </View>
        <LineBreak space={4.5} />
        <View style={{alignSelf: 'center'}}>
          <AppButton
            title="Submit"
            textColor={AppColors.WHITE}
            bgColor={AppColors.BTNCOLOURS}
            buttoWidth={85}
            borderRadius={24}
            handlePress={submitOnPress}
          />
        </View>
      </View>
    </Modal>
  );
};

export default EmailVerificationModal;
