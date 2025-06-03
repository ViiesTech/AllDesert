import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import AppColors from '../utils/AppColors';
import {
  responsiveHeight,
  responsiveWidth,
} from '../utils/Responsive_Dimensions';
import AppText from './AppTextComps/AppText';
import LineBreak from './LineBreak';
import {useCustomNavigation} from '../utils/Hooks';

const CustomerNoteCard = ({customerDetails}: any) => {
  const {navigateToRoute} = useCustomNavigation();
  return (
    <View
      style={{
        backgroundColor: AppColors.WHITE,
        paddingHorizontal: responsiveWidth(4),
        paddingVertical: responsiveHeight(2),
      }}>
      <AppText
        title={'CUSTOMER NOTE'}
        textColor={AppColors.GRAY}
        textSize={1.7}
        textFontWeight
      />

      <LineBreak space={0.5} />

      <AppText
        title={
          'This machine can’t working well every i turn it on the AC always make a noisy sound, and the AC can always hot ever............'
        }
        textColor={AppColors.GRAY}
        textSize={1.6}
        textwidth={70}
        lineHeight={2.5}
      />

      <LineBreak space={customerDetails ? 1 : 4} />

      {customerDetails && (
        <TouchableOpacity onPress={() => {}}>
          <AppText
            title={'View More'}
            textColor={AppColors.BTNCOLOURS}
            textSize={1.7}
            textFontWeight
          />
        </TouchableOpacity>
      )}

      {!customerDetails && (
        <AppText
          title={'TECHNICAL FEEDBACK'}
          textColor={AppColors.GRAY}
          textSize={1.7}
          textFontWeight
        />
      )}

      {!customerDetails && <LineBreak space={1} />}

      {!customerDetails && (
        <TouchableOpacity onPress={() => navigateToRoute('AddNotes')}>
          <AppText
            title={'Add Note'}
            textColor={AppColors.BTNCOLOURS}
            textSize={1.7}
            textFontWeight
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomerNoteCard;
