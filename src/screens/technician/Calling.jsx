/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TouchableOpacity, Image, FlatList} from 'react-native';
import AppColors from '../../utils/AppColors';
import AppHeader from '../../components/AppHeader';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  responsiveFontSize,
  responsiveWidth,
} from '../../utils/Responsive_Dimensions';
import LineBreak from '../../components/LineBreak';
import AppText from '../../components/AppTextComps/AppText';
import AppImages from '../../assets/images/AppImages';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useCustomNavigation} from '../../utils/Hooks';

const socialIcons = [
  {
    id: 1,
    icon: (
      <Ionicons
        name="mic-off-outline"
        size={responsiveFontSize(3.5)}
        color={AppColors.GRAY}
      />
    ),
    title: 'Mute',
  },
  {
    id: 2,
    icon: (
      <Ionicons
        name="bluetooth-sharp"
        size={responsiveFontSize(3.5)}
        color={AppColors.GRAY}
      />
    ),
    title: 'Bluetooth',
  },
  {
    id: 3,
    icon: (
      <Feather
        name="pause"
        size={responsiveFontSize(3.5)}
        color={AppColors.GRAY}
      />
    ),
    title: 'Hold',
  },
  {
    id: 4,
    icon: (
      <Feather
        name="video"
        size={responsiveFontSize(3.5)}
        color={AppColors.GRAY}
      />
    ),
    title: 'Video',
  },
];

const callIcons = [
  {
    id: 1,
    icon: (
      <MaterialCommunityIcons
        name="dots-grid"
        size={responsiveFontSize(4)}
        color={AppColors.BLACK}
      />
    ),
  },
  {
    id: 2,
    icon: (
      <View
        style={{
          backgroundColor: '#EF4E4E',
          width: 60,
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 100,
        }}>
        <MaterialIcons
          name="call-end"
          size={responsiveFontSize(5)}
          color={AppColors.WHITE}
        />
      </View>
    ),
  },
  {
    id: 3,
    icon: (
      <Feather
        name="volume-2"
        size={responsiveFontSize(4)}
        color={AppColors.BLACK}
      />
    ),
  },
];

const Calling = () => {
  return (
    <View style={{flex: 1}}>
      <AppHeader
        goBack
        icon={
          <TouchableOpacity>
            <MaterialIcons
              name="person-add-alt"
              size={responsiveFontSize(3.5)}
              color={AppColors.BLACK}
            />
          </TouchableOpacity>
        }
        headerBg={AppColors.WHITE}
      />
      <View
        style={{
          backgroundColor: AppColors.WHITE,
          paddingHorizontal: responsiveWidth(5),
        }}>
        <View
          style={{
            alignItems: 'center',
          }}>
          <LineBreak space={1} />
          <Image
            source={AppImages.service_img}
            style={{width: 100, height: 100, borderRadius: 100}}
          />
          <LineBreak space={2} />
          <AppText
            title={'Savannah Nguyen'}
            textColor={AppColors.BLACK}
            textSize={2}
            textFontWeight
          />
          <LineBreak space={1} />
          <AppText
            title={'3891 Ranchiview Dr Richardson, California 62369'}
            textColor={AppColors.DARKGRAY}
            textSize={1.4}
            textwidth={50}
            lineHeight={2.5}
            textAlignment={'center'}
          />
          <LineBreak space={4} />

          <AppText
            title={'Ringing......'}
            textColor={AppColors.BTNCOLOURS}
            textSize={2.5}
            textFontWeight
            textAlignment={'center'}
          />

          <LineBreak space={3} />
        </View>
      </View>

      <View style={{flex: 1, justifyContent: 'flex-end', gap: 50}}>
        <View>
          <FlatList
            data={socialIcons}
            horizontal
            contentContainerStyle={{
              flex: 1,
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
            renderItem={({item}) => {
              return (
                <TouchableOpacity style={{alignItems: 'center'}}>
                  {item.icon}
                  <LineBreak space={0.5} />
                  <AppText
                    title={item.title}
                    textColor={AppColors.GRAY}
                    textSize={1.4}
                  />
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View>
          <FlatList
            data={callIcons}
            horizontal
            contentContainerStyle={{
              flex: 1,
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
            renderItem={({item}) => {
              return (
                <TouchableOpacity style={{alignItems: 'center'}}>
                  {item.icon}
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>

      <LineBreak space={5} />
    </View>
  );
};

export default Calling;
