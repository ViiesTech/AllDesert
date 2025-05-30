/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import AppText from './AppTextComps/AppText';
import AppColors from '../utils/AppColors';
import BackIcon from './AppTextComps/BackIcon';
import {
  responsiveHeight,
  responsiveWidth,
} from '../utils/Responsive_Dimensions';
import LineBreak from './LineBreak';

type props = {
  heading?: string;
  subheading?: string;
  Rightheading?: string;
  icon?: any;
  goBack?: boolean;
  borderBottomWidth?: any;
  borderBottomColor?: any;
  textFontWeight?: any;
  isCenteredHead?: any;
  taskId?: any;
};

const AppHeader = ({
  Rightheading,
  heading,
  subheading,
  icon,
  goBack,
  borderBottomWidth,
  borderBottomColor,
  textFontWeight,
  isCenteredHead,
  taskId,
}: props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',
        paddingTop: responsiveHeight(3),
        paddingHorizontal: responsiveWidth(4),
        borderBottomWidth: borderBottomWidth,
        borderBottomColor: borderBottomColor,
        position: 'relative',
      }}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            width: responsiveWidth(60),
            justifyContent: isCenteredHead ? 'space-between' : 'flex-start',
            alignItems: 'center',
          }}>
          {goBack && (
            <View style={{marginRight: responsiveWidth(3)}}>
              <BackIcon />
            </View>
          )}
          <View>
            <AppText
              title={heading}
              textSize={2.5}
              textColor={AppColors.BLACK}
              textFontWeight={textFontWeight}
            />
            <LineBreak space={0.3} />
            {taskId && (
              <AppText
                title={taskId}
                textSize={1.3}
                textColor={AppColors.DARKGRAY}
                textFontWeight={textFontWeight}
                textAlignment={'center'}
              />
            )}
          </View>
        </View>
        <AppText title={subheading} textColor={'#777777'} textSize={2} />
      </View>
      {icon}

      {/* <AppText
        title={Rightheading}
        textFontWeight
        textSize={2}
        textColor={AppColors.BLACK}
      /> */}
    </View>
  );
};

export default AppHeader;
