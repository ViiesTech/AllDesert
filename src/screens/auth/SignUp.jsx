/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Image, TouchableOpacity, ScrollView} from 'react-native';
import AppColors from '../../utils/AppColors';
import AppImages from '../../assets/images/AppImages';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utils/Responsive_Dimensions';
import LineBreak from '../../components/LineBreak';
import AppText from '../../components/AppTextComps/AppText';
import AppTextInput from '../../components/AppTextInput';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AppButton from '../../components/AppButton';
import {useNavigation} from '@react-navigation/native';
import TermsAndConditionModal from '../../components/TermsAndConditionModal';
import EmailVerificationModal from '../../components/EmailVerificationModal';
import WelcomeModal from '../../components/WelcomeModal';

const SignUp = () => {
  const [isHidePass, setIsHidePass] = useState(false);
  const [isHideConfirmPass, setIsHideConfirmPass] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showEmailVerificationModal, setShowEmailVerificationModal] =
    useState(false);
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const navigation = useNavigation();

  return (
    <ScrollView style={{flex: 1, backgroundColor: AppColors.WHITE}}>
      <Image
        source={AppImages.app_logo}
        style={{
          height: responsiveHeight(20),
          width: responsiveWidth(60),
          alignSelf: 'center',
          resizeMode: 'cover',
        }}
      />
      <LineBreak space={2} />

      <TermsAndConditionModal
        isVisible={showPrivacyModal}
        onBackdropPress={() => setShowPrivacyModal(false)}
        declineOnPress={() => setShowPrivacyModal(false)}
        agreeOnPress={() => {
          setShowPrivacyModal(false);
          setShowEmailVerificationModal(true);
        }}
      />

      <EmailVerificationModal
        isVisible={showEmailVerificationModal}
        onBackdropPress={() => setShowEmailVerificationModal(false)}
        submitOnPress={() => {
          setShowEmailVerificationModal(false);
          setShowWelcomeModal(true);
        }}
      />

      <WelcomeModal
        isVisible={showWelcomeModal}
        submitOnPress={() => setShowWelcomeModal(false)}
        onBackdropPress={() => setShowWelcomeModal(false)}
        exploreOnPress={() => setShowWelcomeModal(false)}
      />

      <View style={{paddingHorizontal: responsiveWidth(8), gap: 15}}>
        <View>
          <AppText
            title={'Email'}
            textColor={AppColors.DARKGRAY}
            textSize={1.6}
            textFontWeight
          />
          <LineBreak space={0.5} />
          <AppTextInput
            inputPlaceHolder={'Email'}
            borderRadius={7}
            placeholderTextColor={AppColors.DARKGRAY}
            logo={
              <View style={{paddingLeft: responsiveWidth(1)}}>
                <Fontisto
                  name="email"
                  size={responsiveFontSize(2.2)}
                  color={AppColors.BTNCOLOURS}
                />
              </View>
            }
          />
        </View>

        <View>
          <AppText
            title={'Phone Number'}
            textColor={AppColors.DARKGRAY}
            textSize={1.6}
            textFontWeight
          />
          <LineBreak space={0.5} />
          <AppTextInput
            inputPlaceHolder={'Phone Number'}
            borderRadius={7}
            placeholderTextColor={AppColors.DARKGRAY}
            logo={
              <View style={{paddingLeft: responsiveWidth(1)}}>
                <Fontisto
                  name="email"
                  size={responsiveFontSize(2.2)}
                  color={AppColors.BTNCOLOURS}
                />
              </View>
            }
          />
        </View>

        <View>
          <AppText
            title={'Password'}
            textColor={AppColors.DARKGRAY}
            textSize={1.6}
            textFontWeight
          />
          <LineBreak space={0.5} />
          <AppTextInput
            inputPlaceHolder={'Password'}
            borderRadius={7}
            placeholderTextColor={AppColors.DARKGRAY}
            logo={
              <View style={{paddingLeft: responsiveWidth(1)}}>
                <Entypo
                  name="fingerprint"
                  size={responsiveFontSize(2.2)}
                  color={AppColors.BTNCOLOURS}
                />
              </View>
            }
            rightIcon={
              <TouchableOpacity
                style={{paddingLeft: responsiveWidth(3)}}
                onPress={() => setIsHidePass(prev => !prev)}>
                <Feather
                  name={!isHidePass ? 'eye-off' : 'eye'}
                  size={responsiveFontSize(2.2)}
                  color={AppColors.BTNCOLOURS}
                />
              </TouchableOpacity>
            }
            secureTextEntry={!isHidePass}
          />
        </View>

        <View>
          <AppText
            title={'Confirm Password'}
            textColor={AppColors.DARKGRAY}
            textSize={1.6}
            textFontWeight
          />
          <LineBreak space={0.5} />
          <AppTextInput
            inputPlaceHolder={'Confirm Password'}
            borderRadius={7}
            placeholderTextColor={AppColors.DARKGRAY}
            logo={
              <View style={{paddingLeft: responsiveWidth(1)}}>
                <Entypo
                  name="fingerprint"
                  size={responsiveFontSize(2.2)}
                  color={AppColors.BTNCOLOURS}
                />
              </View>
            }
            rightIcon={
              <TouchableOpacity
                style={{paddingLeft: responsiveWidth(3)}}
                onPress={() => setIsHideConfirmPass(prev => !prev)}>
                <Feather
                  name={!isHideConfirmPass ? 'eye-off' : 'eye'}
                  size={responsiveFontSize(2.2)}
                  color={AppColors.BTNCOLOURS}
                />
              </TouchableOpacity>
            }
            secureTextEntry={!isHideConfirmPass}
          />
        </View>

        <LineBreak space={4} />

        <View style={{flexDirection: 'row', gap: 10}}>
          <TouchableOpacity onPress={() => setIsChecked(prev => !prev)}>
            <MaterialCommunityIcons
              name={isChecked ? 'checkbox-marked' : 'checkbox-blank-outline'}
              size={responsiveFontSize(2.5)}
              color={AppColors.BTNCOLOURS}
            />
          </TouchableOpacity>
          <AppText
            title={'I agree with terms & conditions and privacy policy'}
            textColor={AppColors.BLACK}
            textSize={1.7}
          />
        </View>

        <LineBreak space={1} />

        <AppButton
          title="Sign Up"
          textColor={AppColors.WHITE}
          bgColor={AppColors.BTNCOLOURS}
          borderRadius={24}
          buttoWidth={85}
          handlePress={() => setShowPrivacyModal(true)}
        />

        <LineBreak space={4} />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 5,
          }}>
          <AppText
            title={'Already have an account?'}
            textColor={AppColors.BLACK}
            textSize={1.8}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <AppText
              title={'Sign in here'}
              textColor={AppColors.BTNCOLOURS}
              textSize={1.8}
              textFontWeight
            />
          </TouchableOpacity>
        </View>

        <LineBreak space={1} />
      </View>
    </ScrollView>
  );
};

export default SignUp;
