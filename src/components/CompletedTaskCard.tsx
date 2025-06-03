/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import AppColors from '../utils/AppColors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../utils/Responsive_Dimensions';
import AppText from './AppTextComps/AppText';
import LineBreak from './LineBreak';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useCustomNavigation} from '../utils/Hooks';

type Props = {
  item?: any;
  statusOnPress?: any;
};

const CompletedTaskCard = ({item, statusOnPress}: Props) => {
  const {navigateToRoute} = useCustomNavigation();

  return (
    <TouchableOpacity
      style={{gap: 5}}
      onPress={() => {
        navigateToRoute('TaskDetails');
      }}>
      <View
        style={{
          backgroundColor: AppColors.WHITE,
          paddingHorizontal: responsiveWidth(4),
          paddingVertical: responsiveHeight(2),
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <AppText
          title={item.taskId}
          textColor={AppColors.GRAY}
          textSize={1.7}
        />

        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
          }}>
          <View
            style={{
              paddingHorizontal: responsiveWidth(4),
              paddingVertical: responsiveHeight(0.6),
              backgroundColor: '#D9D9D9',
            }}>
            <AppText
              title={item.taskTime}
              textColor={'#676565'}
              textSize={1.7}
              textFontWeight
            />
          </View>
          <TouchableOpacity
            onPress={statusOnPress}
            style={{
              width: responsiveWidth(23),
              alignItems: 'center',
              paddingVertical: responsiveHeight(0.6),
              backgroundColor: AppColors.BTNCOLOURS,
            }}>
            <AppText
              title={item.status}
              textColor={AppColors.WHITE}
              textSize={1.5}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          backgroundColor: AppColors.WHITE,
          paddingHorizontal: responsiveWidth(4),
          paddingVertical: responsiveHeight(2),
        }}>
        <AppText
          title={item.desc}
          textColor={AppColors.BLACK}
          textSize={2}
          textFontWeight
        />
        <LineBreak space={1} />

        <View
          style={{
            flexDirection: 'row',
            gap: 10,
          }}>
          <AppText
            title={'Completed at'}
            textColor={AppColors.BTNCOLOURS}
            textSize={1.7}
            textFontWeight
          />
          <LineBreak space={0.5} />
          <AppText
            title={item.completedAt}
            textColor={AppColors.LIGHTGRAY}
            textSize={1.7}
            textFontWeight
          />
        </View>

        <LineBreak space={2} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 12,
            }}>
            <Image
              source={item.profImg}
              style={{width: 30, height: 30, borderRadius: 100}}
            />
            <AppText
              title={item.username}
              textColor={AppColors.BLACK}
              textSize={2}
              textFontWeight
            />
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
            <Ionicons
              name="star"
              size={responsiveFontSize(1.7)}
              color={AppColors.Yellow}
            />
            <AppText
              title={item.rating}
              textColor={AppColors.GRAY}
              textSize={1.7}
              textFontWeight
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CompletedTaskCard;
