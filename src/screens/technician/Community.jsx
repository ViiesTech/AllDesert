/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import AppImages from '../../assets/images/AppImages';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utils/Responsive_Dimensions';
import LineBreak from '../../components/LineBreak';
import AppColors from '../../utils/AppColors';
import AppText from '../../components/AppTextComps/AppText';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const data = [
  {
    id: 1,
    profImg: AppImages.service_img,
    username: 'Alicia James',
    timeLeft: '7h',
    desc: 'Lorem ipsum simply dummy amet, consectetur sadipscing elitr, sed',
    likes: '196',
    comments: '20',
    shares: '5',
    productImg: AppImages.fridge,
  },
  {
    id: 2,
    profImg: AppImages.service_img,
    username: 'Alicia James',
    timeLeft: '7h',
    desc: 'Lorem ipsum simply dummy amet, consectetur sadipscing elitr, sed',
    likes: '196',
    comments: '20',
    shares: '5',
    productImg: AppImages.fridge,
  },
];

const Community = () => {
  return (
    <ScrollView style={{flex: 1}}>
      <FlatList
        data={data}
        ItemSeparatorComponent={<LineBreak space={4} />}
        ListFooterComponent={<LineBreak space={2} />}
        ListHeaderComponent={
          <>
            <LineBreak space={2} />
            <View
              style={{
                marginHorizontal: responsiveWidth(4),
                paddingHorizontal: responsiveWidth(3),
                paddingVertical: responsiveHeight(2),
                backgroundColor: AppColors.WHITE,
                elevation: 10,
                borderRadius: 5,
              }}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                <Image
                  source={AppImages.service_img}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 5,
                    borderWidth: 2,
                    borderColor: AppColors.PEACHCOLOUR,
                  }}
                />
                <View>
                  <AppText
                    title={'Alicia Roth'}
                    textColor={AppColors.BLACK}
                    textSize={2.5}
                    textFontWeight
                  />
                  <LineBreak space={0.5} />
                  <AppText
                    title={'What do you want to talk about?'}
                    textColor={AppColors.LIGHTGRAY}
                    textSize={1.3}
                  />
                </View>
              </View>
              <LineBreak space={1} />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: responsiveWidth(14),
                    gap: 15,
                  }}>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 7,
                    }}>
                    <FontAwesome
                      name="photo"
                      size={responsiveFontSize(1.5)}
                      color={AppColors.LIGHTGRAY}
                    />
                    <AppText
                      title={'Photo'}
                      textColor={AppColors.LIGHTGRAY}
                      textSize={1.2}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 7,
                    }}>
                    <Ionicons
                      name="location-outline"
                      size={responsiveFontSize(1.5)}
                      color={AppColors.LIGHTGRAY}
                    />
                    <AppText
                      title={'Location'}
                      textColor={AppColors.LIGHTGRAY}
                      textSize={1.2}
                    />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={{
                    backgroundColor: AppColors.BTNCOLOURS,
                    borderRadius: 15,
                    borderBottomLeftRadius: 0,
                    padding: 2,
                  }}>
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={responsiveFontSize(5)}
                    color={AppColors.WHITE}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <LineBreak space={2} />
          </>
        }
        renderItem={({item}) => {
          return (
            <View
              style={{
                marginHorizontal: responsiveWidth(4),
                paddingHorizontal: responsiveWidth(3),
                paddingVertical: responsiveHeight(2),
                backgroundColor: AppColors.WHITE,
                elevation: 10,
                borderRadius: 5,
              }}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                <Image
                  source={item.profImg}
                  style={{width: 45, height: 45, borderRadius: 100}}
                />
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 10,
                    }}>
                    <AppText
                      title={item.username}
                      textColor={AppColors.BLACK}
                      textSize={2.2}
                      textFontWeight
                    />
                    <AppText
                      title={'added  a new photo'}
                      textColor={AppColors.LIGHTGRAY}
                      textSize={1.3}
                    />
                  </View>
                  <AppText
                    title={item.timeLeft}
                    textColor={AppColors.LIGHTGRAY}
                    textSize={1.3}
                  />
                </View>
              </View>

              <LineBreak space={2} />
              <View
                style={{
                  borderWidth: 1,
                  borderColor: AppColors.BTNCOLOURS,
                  borderRadius: 5,
                }}>
                <View
                  style={{
                    paddingHorizontal: responsiveWidth(3),
                    paddingVertical: responsiveHeight(1.5),
                  }}>
                  <AppText
                    title={item.desc}
                    textColor={AppColors.LIGHTGRAY}
                    textSize={1.8}
                  />
                </View>
                <Image
                  source={item.productImg}
                  style={{
                    width: responsiveWidth(85.5),
                    height: responsiveHeight(25),
                    borderRadius: 5,
                  }}
                />
              </View>

              <LineBreak space={2} />

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 25}}>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 7,
                    }}>
                    <AntDesign
                      name="like2"
                      size={responsiveFontSize(2)}
                      color={AppColors.LIGHTGRAY}
                    />
                    <AppText
                      title={item.likes}
                      textColor={AppColors.LIGHTGRAY}
                      textSize={1.8}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 7,
                    }}>
                    <MaterialCommunityIcons
                      name="comment-text-multiple-outline"
                      size={responsiveFontSize(2)}
                      color={AppColors.LIGHTGRAY}
                    />
                    <AppText
                      title={item.comments}
                      textColor={AppColors.LIGHTGRAY}
                      textSize={1.8}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 7,
                    }}>
                    <Fontisto
                      name="share-a"
                      size={responsiveFontSize(2)}
                      color={AppColors.LIGHTGRAY}
                    />
                    <AppText
                      title={item.shares}
                      textColor={AppColors.LIGHTGRAY}
                      textSize={1.8}
                    />
                  </TouchableOpacity>
                </View>

                <TouchableOpacity>
                  <Entypo
                    name="dots-three-vertical"
                    size={responsiveFontSize(2)}
                    color={AppColors.BLACK}
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </ScrollView>
  );
};

export default Community;
