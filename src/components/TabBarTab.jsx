/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AppColors from '../utils/AppColors';
import AppText from './AppTextComps/AppText';
import {
  responsiveHeight,
  responsiveWidth,
} from '../utils/Responsive_Dimensions';

type Props = {
  item?: any,
  tabContainerOnPress?:any;
  selectedTab?:any;
};

const TabBarTab = ({item, tabContainerOnPress, selectedTab}: Props) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: AppColors.WHITE,
        width: responsiveWidth(28),
        height: responsiveHeight(8),
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={tabContainerOnPress}
      >
      <AppText
        title={item.title}
        textColor={selectedTab?.id == item?.id ? AppColors.BTNCOLOURS : AppColors.GRAY}
        textSize={1.7}
        textFontWeight
        textTransform={'uppercase'}
        textAlignment={'center'}
      />
    </TouchableOpacity>
  );
};

export default TabBarTab;
