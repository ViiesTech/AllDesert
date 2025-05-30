/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import AppColors from '../utils/AppColors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../utils/Responsive_Dimensions';
import AppText from './AppTextComps/AppText';
import LineBreak from './LineBreak';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {
  item?: any;
};

const ActiveTaskCard = ({item}: Props) => {
  return (
    <View style={{gap: 5}}>
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
          <View
            style={{
              paddingHorizontal: responsiveWidth(4),
              width: responsiveWidth(25),
              alignItems: 'center',
              paddingVertical: responsiveHeight(0.6),
              backgroundColor:
                item.status === 'In Progress'
                  ? AppColors.Yellow
                  : item.status === 'Assigned'
                  ? AppColors.lightRed
                  : '#D1F4FF',
            }}>
            <AppText
              title={item.status}
              textColor={
                item.status === 'In Progress'
                  ? AppColors.WHITE
                  : item.status === 'Assigned'
                  ? 'red'
                  : AppColors.PRIMARY
              }
              textSize={1.5}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: AppColors.WHITE,
          paddingHorizontal: responsiveWidth(4),
          paddingVertical: responsiveHeight(2),
          paddingTop: responsiveHeight(3),
        }}>
        <AppText
          title={item.desc}
          textColor={AppColors.BLACK}
          textSize={2}
          textFontWeight
        />
        <LineBreak space={0.5} />
        <AppText
          title={item.timeLeft}
          textColor={'red'}
          textSize={1.7}
          textFontWeight
        />
        <LineBreak space={2} />
        <View
          style={{
            flexDirection: 'row',
            gap: 5,
          }}>
          <Ionicons
            name={'location-sharp'}
            size={responsiveFontSize(3.5)}
            color={AppColors.BTNCOLOURS}
          />
          <View>
            <AppText
              title={item.location}
              textColor={AppColors.LIGHTGRAY}
              textSize={1.8}
            />
            <LineBreak space={0.5} />
            <AppText
              title={item.km}
              textColor={AppColors.DARKGRAY}
              textSize={1.6}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ActiveTaskCard;
