/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import AppHeader from '../../components/AppHeader';
import AppColors from '../../utils/AppColors';
import LineBreak from '../../components/LineBreak';
import {responsiveWidth} from '../../utils/Responsive_Dimensions';
import AppText from '../../components/AppTextComps/AppText';

const About = () => {
  return (
    <View style={{flex: 1}}>
      <AppHeader
        heading="About"
        isCenteredHead
        headerBg={AppColors.WHITE}
        goBack
        textFontWeight={true}
        paddingBottom={2}
        isCenteredHeadWidth={55}
      />

      <LineBreak space={5} />
      <View style={{paddingHorizontal: responsiveWidth(6)}}>
        <View>
          <AppText
            title={'Our Story'}
            textColor={AppColors.BLACK}
            textSize={2.2}
          />
          <LineBreak space={2} />
          <AppText
            title={
              'once upon a time , an entrepreneur Getting done is the most versatile task management software you will find on the market You can use the platform to manage all of your tasks , and also use it as a CRM , to manage cash flow Getting done is the most versatile task management software you will find on the market '
            }
            textColor={AppColors.LIGHTGRAY}
            textSize={1.9}
            lineHeight={3.3}
          />
        </View>
        <LineBreak space={3} />
        <View>
          <AppText
            title={'How cool is gethings done?'}
            textColor={AppColors.BLACK}
            textSize={2.2}
          />
          <LineBreak space={2} />
          <AppText
            title={
              'once upon a time , an entrepreneur Getting done is the most versatile task management software you will find on the market You can use the platform to manage all of your tasks , and also use it as a CRM , to manage cash flow Getting done is the most versatile task management software you will find on the market'
            }
            textColor={AppColors.LIGHTGRAY}
            textSize={1.9}
            lineHeight={3.3}
          />
        </View>
      </View>
    </View>
  );
};

export default About;
