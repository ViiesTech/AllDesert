/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text} from 'react-native';
import AppColors from '../../utils/AppColors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utils/Responsive_Dimensions';

type textProps = {
  title?: any;
  textSize?: any;
  textColor?: any;
  textFontWeight?: boolean;
  textAlignment?: any;
  textwidth?: any;
  textTransform?: any;
  lineHeight?:any;
};

const AppText = ({
  title,
  textSize,
  textColor,
  textFontWeight,
  textAlignment,
  textwidth,
  textTransform,
  lineHeight,
}: textProps) => {
  return (
    <Text
      style={{
        width: textwidth ? responsiveWidth(textwidth) : null,
        fontSize: textSize
          ? responsiveFontSize(textSize)
          : responsiveFontSize(1.4),
        fontWeight: textFontWeight ? 'bold' : 'regular',
        color: textColor ? textColor : AppColors.BLACK,
        textAlign: textAlignment ? textAlignment : null,
        alignSelf: textAlignment ? textAlignment : null,
        textTransform: textTransform,
        lineHeight: responsiveHeight(lineHeight),
      }}>
      {title}
    </Text>
  );
};

export default AppText;
