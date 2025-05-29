/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, View} from 'react-native';
import AppColors from '../utils/AppColors';
import {
  responsiveHeight,
  responsiveWidth,
} from '../utils/Responsive_Dimensions';
import AppText from './AppTextComps/AppText';
import LineBreak from './LineBreak';
import AppButton from './AppButton';
import {useNavigation} from '@react-navigation/native';

type Props = {
  item?: any;
  orderHistory?: any;
};

const NotificationCard = ({item, orderHistory}: Props) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: AppColors.PEACHCOLOUR,
        paddingHorizontal: responsiveWidth(4),
        paddingVertical: responsiveHeight(2),
        borderRadius: 7,
        elevation: 5,
        backgroundColor: AppColors.WHITE,
      }}>
      <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
        <Image
          source={item.profileImg}
          style={{width: 60, height: 60, borderRadius: 100}}
        />
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <AppText
              title={item.username}
              textColor={AppColors.BLACK}
              textSize={2}
              textFontWeight
            />
            <AppText
              title={item.time}
              textColor={AppColors.LIGHTGRAY}
              textSize={1.5}
            />
          </View>
          <LineBreak space={0.3} />
          <View
            style={{
              flexDirection: 'row',
              width: responsiveWidth(65),
              justifyContent: 'space-between',
              alignItems: 'flex-end',
            }}>
            <View>
              <AppText
                title={item.role}
                textColor={AppColors.LIGHTGRAY}
                textSize={1.8}
              />
              <AppText
                title={`Service: ${item.service}`}
                textColor={AppColors.LIGHTGRAY}
                textSize={1.8}
              />
            </View>
            {!orderHistory && (
              <AppText
                title={item.usd}
                textColor={AppColors.BTNCOLOURS}
                textSize={3}
                textFontWeight
              />
            )}
          </View>
        </View>
      </View>

      <LineBreak space={orderHistory ? 1.5 : 3} />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        {!orderHistory && (
          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              alignItems: 'center',
            }}>
            <AppButton
              title="Decline"
              textColor={AppColors.BLACK}
              bgColor={AppColors.WHITE}
              borderWidth={1}
              textFontWeight={false}
              borderColor={AppColors.BLACK}
              borderRadius={5}
              padding={2}
              buttoWidth={15}
              textSize={1.5}
              handlePress={() => {}}
            />
            <AppButton
              title="Accept"
              textColor={AppColors.WHITE}
              bgColor={AppColors.BTNCOLOURS}
              textFontWeight={false}
              borderRadius={5}
              padding={3}
              buttoWidth={15}
              textSize={1.5}
              handlePress={() => navigation.navigate('TechnicianOnWay')}
            />
          </View>
        )}

        {orderHistory && (
          <View>
            <AppButton
              title="Order Completed"
              textColor={AppColors.WHITE}
              bgColor={AppColors.BTNCOLOURS}
              textFontWeight={false}
              borderRadius={5}
              padding={4}
              buttoWidth={37}
              textSize={1.5}
              handlePress={() => {}}
            />
          </View>
        )}

        {orderHistory && (
          <View>
            <AppText
              title={item.usd}
              textColor={AppColors.BTNCOLOURS}
              textSize={3}
              textFontWeight
            />
          </View>
        )}

        {!orderHistory && (
          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              alignItems: 'center',
            }}>
            <AppText
              title={item.date}
              textColor={AppColors.DARKGRAY}
              textSize={1.8}
            />
            <AppButton
              title="It’s Available"
              textColor={AppColors.WHITE}
              bgColor={AppColors.PRIMARY}
              textFontWeight={false}
              borderRadius={5}
              padding={4}
              buttoWidth={22}
              textSize={1.5}
              handlePress={() => {}}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default NotificationCard;
