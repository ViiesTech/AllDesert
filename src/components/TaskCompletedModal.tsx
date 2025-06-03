/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import LineBreak from './LineBreak';
import {
  responsiveHeight,
  responsiveWidth,
} from '../utils/Responsive_Dimensions';
import AppText from './AppTextComps/AppText';
import AppColors from '../utils/AppColors';
import AppButton from './AppButton';
import APPICONS from './../assets/icons/AppIcons';
import SVGXml from './SVGXML';

type Props = {
  isVisible?: any;
  onBackdropPress?: any;
  submitOnPress?: any;
};

const TaskCompletedModal = ({
  isVisible,
  onBackdropPress,
  submitOnPress,
}: Props) => {
  return (
    <Modal
      isVisible={isVisible}
      backdropOpacity={0.9}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      onBackdropPress={onBackdropPress}
      style={{
        flex: 1,
        margin: 0,
        justifyContent: 'center',
      }}>
      <View
        style={{
          backgroundColor: 'white',
          paddingHorizontal: responsiveWidth(4),
          marginHorizontal: responsiveHeight(2),
          height: responsiveHeight(40),
          position: 'relative',
        }}>
        <View style={{alignSelf: 'center'}}>
          <SVGXml icon={APPICONS.success} width={130} height={130} />
        </View>

        <AppText
          title={'Task completed!!!'}
          textColor={AppColors.BLACK}
          textSize={2.5}
          textwidth={60}
          textAlignment={'center'}
          textFontWeight
        />
        <LineBreak space={2} />
        <AppText
          title={'Lorem ipsum simply dummy text using printing or pricing!'}
          textColor={AppColors.GRAY}
          textSize={2}
          textAlignment={'center'}
          lineHeight={2.5}
          textwidth={65}
        />
        <LineBreak space={3.5} />
        <View style={{alignSelf: 'center'}}>
          <AppButton
            title="YES, TAKE THIS TASK"
            textColor={AppColors.WHITE}
            bgColor={AppColors.BTNCOLOURS}
            buttoWidth={85}
            padding={15}
            handlePress={submitOnPress}
          />
        </View>
      </View>
    </Modal>
  );
};

export default TaskCompletedModal;
