/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import AppText from './AppTextComps/AppText';
import AppColors from '../utils/AppColors';
import BackIcon from './AppTextComps/BackIcon';
import { responsiveHeight, responsiveWidth } from '../utils/Responsive_Dimensions';

type props = {
  heading?: string;
  subheading?: string;
  Rightheading?: string;
  icon?: any;
  goBack?: boolean;
};

const AppHeader = ({
  Rightheading,
  heading,
  subheading,
  icon,
  goBack,
}: props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: responsiveHeight(3),
        paddingHorizontal: responsiveWidth(4),
      }}>
      <View >
        <View style={{flexDirection: 'row', alignItems: 'center'}}>

          {goBack && (
            <View style={{marginRight: 10}}>
              <BackIcon />
            </View>
          )}

          {icon}
          <AppText
            title={heading}
            textSize={2.5}
            textColor={AppColors.BLACK}
          />
        </View>
        <AppText title={subheading} textColor={'#777777'} textSize={2} />
      </View>

      <AppText
        title={Rightheading}
        textFontWeight
        textSize={2}
        textColor={AppColors.BLACK}
      />
    </View>
  );
};

export default AppHeader;
