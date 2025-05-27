/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import {
  responsiveHeight,
  responsiveWidth,
} from '../utils/Responsive_Dimensions';
import LineBreak from './LineBreak';
import AppText from './AppTextComps/AppText';
import AppColors from '../utils/AppColors';
import AppButton from './AppButton';

type Props = {
  isVisible?: any;
  onBackdropPress?: any;
  declineOnPress?: any;
  agreeOnPress?: any;
};

const TermsAndConditionModal = ({
  isVisible,
  onBackdropPress,
  declineOnPress,
  agreeOnPress,
}: Props) => {
  return (
    <Modal
      isVisible={isVisible}
      backdropOpacity={0.8}
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
          height: responsiveHeight(80),
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
        }}>
        <LineBreak space={3} />
        <AppText
          title={'Terms & Conditions and Privacy Policy'}
          textColor={AppColors.BLACK}
          textSize={2.5}
          textwidth={60}
          textAlignment={'center'}
          textFontWeight
        />
        <LineBreak space={4} />
        <AppText
          title={
            'Terms and Conditions: Acceptance: By using the Re-Dus app, you agree to comply with all applicable terms and conditions. Usage: This app is for personal use only and may not be used for commercial purposes without permission. Account: You are responsible for the security of your account and all activities that occur within it. Content: You must not upload content that violates copyright, privacy, or applicable laws. Changes: We reserve the right to change the terms and conditions at any time and will notify you of these changes through the app or via email. Privacy Policy: Data Collection: We collect personal data such as name, email, and location to process transactions and improve our services. Data Usage: Your data is used for internal purposes such as account management, usage analysis, and service offerings. Security: We protect your data with appropriate security measures to prevent unauthorized access. Data Sharing: We do not share your personal data with third parties without your consent, except as required by law. Your Rights: You can access, update, or delete your personal data at any time through the app settings or by contacting us.'
          }
          textColor={AppColors.BLACK}
          textSize={1.5}
          lineHeight={2.5}
        />
        <LineBreak space={2} />
        <AppButton
          title="I Agree"
          textColor={AppColors.WHITE}
          bgColor={AppColors.BTNCOLOURS}
          borderRadius={24}
          handlePress={agreeOnPress}
        />
        <LineBreak space={2} />
        <AppButton
          title="Decline"
          textColor={AppColors.BLACK}
          bgColor={AppColors.WHITE}
          borderWidth={1}
          borderColor={AppColors.BTNCOLOURS}
          borderRadius={24}
          handlePress={declineOnPress}
        />
      </View>
    </Modal>
  );
};

export default TermsAndConditionModal;
