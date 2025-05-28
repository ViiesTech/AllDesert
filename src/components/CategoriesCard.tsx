/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from '../utils/Responsive_Dimensions';
import AppColors from '../utils/AppColors';
import SVGXml from './SVGXML';
import AppText from './AppTextComps/AppText';
import {useNavigation} from '@react-navigation/native';

const CategoriesCard = ({item}: any) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        borderWidth: 0.5,
        width: responsiveWidth(26),
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: AppColors.DARKGRAY,
        borderRadius: 10,
      }}
      onPress={() => navigation.navigate('ServiceReqForm')}>
      <View
        style={{
          backgroundColor: '#f0f0fa',
          width: responsiveWidth(25),
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}>
        <SVGXml icon={item.icon} width={70} height={70} />
      </View>
      <View
        style={{
          paddingVertical: responsiveHeight(0.8),
        }}>
        <AppText
          title={item.title}
          textColor={AppColors.BLACK}
          textSize={1.5}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CategoriesCard;
