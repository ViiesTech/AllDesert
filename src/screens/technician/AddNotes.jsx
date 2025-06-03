/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AppColors from '../../utils/AppColors';
import {useCustomNavigation} from '../../utils/Hooks';
import AppHeader from '../../components/AppHeader';
import {
  responsiveFontSize,
  responsiveWidth,
} from '../../utils/Responsive_Dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LineBreak from '../../components/LineBreak';
import AppTextInput from '../../components/AppTextInput';

const AddNotes = () => {
  const {goBack} = useCustomNavigation();

  return (
    <View style={{flex: 1, backgroundColor: AppColors.WHITE}}>
      <AppHeader
        heading="Add Notes"
        borderBottomWidth={4}
        borderBottomColor={AppColors.appBgColor}
        textFontWeight
        icon={
          <TouchableOpacity onPress={() => goBack()}>
            <Ionicons
              name="close"
              size={responsiveFontSize(3.5)}
              color={AppColors.BLACK}
            />
          </TouchableOpacity>
        }
      />

      <LineBreak space={1} />

      <View style={{paddingHorizontal: responsiveWidth(1)}}>
        <AppTextInput
          inputPlaceHolder={'Type your note here.........'}
          borderColor={'transparent'}
          placeholderTextColor={AppColors.GRAY}
        />
      </View>
    </View>
  );
};

export default AddNotes;
