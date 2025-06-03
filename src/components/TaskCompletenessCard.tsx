/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, FlatList} from 'react-native';
import AppColors from '../utils/AppColors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../utils/Responsive_Dimensions';
import AppText from './AppTextComps/AppText';
import AntDesign from 'react-native-vector-icons/AntDesign';

const TaskCompletenessCard = ({data}: any) => {
  return (
    <View
      style={{
        backgroundColor: AppColors.WHITE,
        paddingVertical: responsiveHeight(1),
      }}>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <View
              style={{
                paddingVertical: responsiveHeight(1.5),
                borderTopWidth: item.id === 4 ? 4 : 0,
                borderTopColor: AppColors.appBgColor,
                paddingHorizontal: responsiveWidth(4),
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <AppText
                title={item.title}
                textColor={AppColors.BLACK}
                textSize={1.7}
                textFontWeight
              />
              {item.icon}
              {item.id === 4 && (
                <View style={{flexDirection: 'row', gap: 4}}>
                  {[...Array(5)].map((_, index) => (
                    <AntDesign
                      key={index}
                      name="star"
                      size={responsiveFontSize(2.5)}
                      color={'#FFCC00'}
                    />
                  ))}
                </View>
              )}
            </View>
          );
        }}
      />
    </View>
  );
};

export default TaskCompletenessCard;
