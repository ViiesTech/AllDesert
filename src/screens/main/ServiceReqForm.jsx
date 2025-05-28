/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import AppColors from '../../utils/AppColors';
import {useNavigation} from '@react-navigation/native';
import AppHeader from '../../components/AppHeader';
import {
  responsiveFontSize,
  responsiveWidth,
} from '../../utils/Responsive_Dimensions';
import AppText from '../../components/AppTextComps/AppText';
import LineBreak from '../../components/LineBreak';
import AppTextInput from '../../components/AppTextInput';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AppButton from '../../components/AppButton';

const ServiceReqForm = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={{flex: 1, backgroundColor: AppColors.WHITE}}>
      <AppHeader
        goBack={() => navigation.goBack()}
        heading="Service Reqest Form"
      />

      <View style={{paddingHorizontal: responsiveWidth(6), gap: 15}}>
        <View>
          <AppText
            title={'Appliance'}
            textColor={AppColors.LIGHTGRAY}
            textSize={1.6}
            textFontWeight
          />
          <LineBreak space={0.5} />
          <AppTextInput
            inputPlaceHolder={'Appliance'}
            borderRadius={7}
            inputWidth={73}
            placeholderTextColor={AppColors.LIGHTGRAY}
            rightIcon={
              <View style={{paddingLeft: responsiveWidth(1)}}>
                <Feather
                  name="chevron-down"
                  size={responsiveFontSize(3)}
                  color={AppColors.BTNCOLOURS}
                />
              </View>
            }
          />
        </View>
        <View>
          <AppText
            title={'Appliance Type'}
            textColor={AppColors.LIGHTGRAY}
            textSize={1.6}
            textFontWeight
          />
          <LineBreak space={0.5} />
          <AppTextInput
            inputPlaceHolder={'Appliance Type'}
            borderRadius={7}
            inputWidth={73}
            placeholderTextColor={AppColors.LIGHTGRAY}
            rightIcon={
              <View style={{paddingLeft: responsiveWidth(1)}}>
                <Feather
                  name="chevron-down"
                  size={responsiveFontSize(3)}
                  color={AppColors.BTNCOLOURS}
                />
              </View>
            }
          />
        </View>
        <View>
          <AppText
            title={'Appliance Model'}
            textColor={AppColors.LIGHTGRAY}
            textSize={1.6}
            textFontWeight
          />
          <LineBreak space={0.5} />
          <AppTextInput
            inputPlaceHolder={'Model Name Here'}
            borderRadius={7}
            placeholderTextColor={AppColors.LIGHTGRAY}
          />
        </View>
        <View>
          <AppText
            title={'Select Date'}
            textColor={AppColors.LIGHTGRAY}
            textSize={1.6}
            textFontWeight
          />
          <LineBreak space={0.5} />
          <AppTextInput
            inputPlaceHolder={'02/13/2025'}
            borderRadius={7}
            placeholderTextColor={AppColors.LIGHTGRAY}
          />
        </View>
        <View>
          <AppText
            title={'Select Time'}
            textColor={AppColors.LIGHTGRAY}
            textSize={1.6}
            textFontWeight
          />
          <LineBreak space={0.5} />
          <AppTextInput
            inputPlaceHolder={'10:00 AM'}
            borderRadius={7}
            placeholderTextColor={AppColors.LIGHTGRAY}
          />
        </View>
        <View>
          <AppText
            title={'Your Location'}
            textColor={AppColors.LIGHTGRAY}
            textSize={1.6}
            textFontWeight
          />
          <LineBreak space={0.5} />
          <AppTextInput
            inputPlaceHolder={'Los Angeles...'}
            borderRadius={7}
            inputWidth={67}
            placeholderTextColor={AppColors.LIGHTGRAY}
            logo={
              <View style={{paddingLeft: responsiveWidth(1)}}>
                <Ionicons
                  name="location-outline"
                  size={responsiveFontSize(2.2)}
                  color={AppColors.BTNCOLOURS}
                />
              </View>
            }
            rightIcon={
              <TouchableOpacity>
                <Ionicons
                  name="locate"
                  size={responsiveFontSize(2.2)}
                  color={AppColors.BTNCOLOURS}
                />
              </TouchableOpacity>
            }
          />
        </View>

        <View>
          <AppText
            title={'Describe Your Issue'}
            textColor={AppColors.LIGHTGRAY}
            textSize={1.6}
            textFontWeight
          />
          <LineBreak space={0.5} />
          <AppTextInput
            inputPlaceHolder={'Write your problem or service'}
            borderRadius={7}
            placeholderTextColor={AppColors.LIGHTGRAY}
            inputHeight={15}
            inputWidth={80}
            multiline={true}
            textAlignVertical={'top'}
          />
        </View>

        <View style={{gap: 15}}>
          <AppText
            title={'Upload Pictures / Video'}
            textColor={AppColors.BLACK}
            textSize={1.7}
            textFontWeight
          />
          <View style={{flexDirection: 'row', gap: 10}}>
            {[...Array(5)].map((_, index) => (
              <TouchableOpacity
                style={{
                  backgroundColor: AppColors.DARKGRAY,
                  padding: responsiveWidth(4.1),
                  borderRadius: 8,
                }}>
                <AntDesign
                  key={index}
                  name="plus"
                  size={responsiveFontSize(3.5)}
                  color={AppColors.GRAY}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <LineBreak space={0.5} />

        <AppButton
          title="Submit"
          textColor={AppColors.WHITE}
          bgColor={AppColors.BTNCOLOURS}
          borderRadius={24}
          buttoWidth={88}
          handlePress={() => {}}
        />

        <LineBreak space={2} />
      </View>
    </ScrollView>
  );
};

export default ServiceReqForm;
