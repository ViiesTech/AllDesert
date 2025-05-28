/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import AppColors from '../../utils/AppColors';
import AppImages from '../../assets/images/AppImages';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utils/Responsive_Dimensions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppText from '../../components/AppTextComps/AppText';
import AppTextInput from '../../components/AppTextInput';
import LineBreak from '../../components/LineBreak';
import AppIcons from '../../assets/icons/AppIcons';
import SVGXml from '../../components/SVGXML';

const categoryData = [
  {id: 1, title: 'Fridge Repair', icon: AppIcons.fridge},
  {id: 2, title: 'All Parts', icon: AppIcons.all_parts},
  {id: 3, title: 'Washer', icon: AppIcons.washer},
  {id: 4, title: 'Dryer', icon: AppIcons.dryer},
  {id: 5, title: 'Smart home', icon: AppIcons.smart_home},
  {id: 6, title: 'AC Repair', icon: AppIcons.air_conditioner},
];

const serviceData = [
  {
    id: 1,
    img: AppImages.service_img,
    tagName: 'AC REPAIR',
    priceTag: '150',
    rating: '4.3',
    title: 'Lorem ipsum dummy text...',
    userImg: AppImages.service_img,
    userName: 'Wade Warren',
  },
  {
    id: 2,
    img: AppImages.service_img,
    tagName: 'AC REPAIR',
    priceTag: '150',
    rating: '4.3',
    title: 'Lorem ipsum dummy text...',
    userImg: AppImages.service_img,
    userName: 'Wade Warren',
  },
];

const Home = () => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: AppColors.WHITE}}>
      <ImageBackground
        source={AppImages.home_bg}
        style={{width: responsiveWidth(100), height: responsiveHeight(72)}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <View />
          <View />
          <Image
            source={AppImages.app_logo}
            style={{
              height: responsiveHeight(20),
              width: responsiveWidth(60),
              resizeMode: 'cover',
            }}
          />
          <TouchableOpacity
            style={{
              marginVertical: responsiveHeight(2),
              width: 30,
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
              backgroundColor: AppColors.WHITE,
            }}>
            <MaterialCommunityIcons
              name="bell-badge-outline"
              size={responsiveFontSize(2.5)}
              color={AppColors.BLACK}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            backgroundColor: AppColors.BTNCOLOURS,
            marginHorizontal: responsiveWidth(5),
            paddingHorizontal: responsiveWidth(4),
            paddingTop: responsiveHeight(1),
            borderRadius: 15,
          }}>
          <AppText
            title={'Location'}
            textColor={AppColors.WHITE}
            textSize={2.2}
            textFontWeight
          />

          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <AppTextInput
              inputPlaceHolder={'1901 Thornridge Cir. Shiloh...'}
              borderColor={AppColors.WHITE}
              containerBg={AppColors.WHITE}
              placeholderTextColor={AppColors.GRAY}
              borderRadius={10}
              inputWidth={48}
              logo={
                <Ionicons
                  name="location-outline"
                  size={responsiveFontSize(2.2)}
                  color={AppColors.BTNCOLOURS}
                />
              }
              rightIcon={
                <Ionicons
                  name="locate"
                  size={responsiveFontSize(2.2)}
                  color={AppColors.BTNCOLOURS}
                />
              }
            />
            <TouchableOpacity
              style={{
                marginVertical: responsiveHeight(2),
                width: 50,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                backgroundColor: AppColors.WHITE,
              }}>
              <AntDesign
                name="search1"
                size={responsiveFontSize(2.5)}
                color={AppColors.BTNCOLOURS}
              />
            </TouchableOpacity>
          </View>
        </View>

        <LineBreak space={2} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: responsiveWidth(6),
          }}>
          <AppText
            title={'Category'}
            textColor={AppColors.BLACK}
            textSize={2.2}
            textFontWeight
          />

          <TouchableOpacity>
            <AppText
              title={'View All'}
              textColor={AppColors.BTNCOLOURS}
              textSize={1.8}
              textFontWeight
            />
          </TouchableOpacity>
        </View>

        <LineBreak space={2} />

        <FlatList
          data={categoryData}
          numColumns={3}
          ItemSeparatorComponent={() => <LineBreak space={2} />}
          columnWrapperStyle={{
            flexWrap: 'nowrap',
            gap: 20,
            paddingHorizontal: responsiveWidth(6),
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={{
                  borderWidth: 0.5,
                  width: responsiveWidth(26),
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderColor: AppColors.DARKGRAY,
                  borderRadius: 10,
                }}>
                <View
                  style={{
                    backgroundColor: '#f0f0fa',
                    width: responsiveWidth(25),
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                  }}>
                  <SVGXml icon={item.icon} width={70} height={70} />
                </View>
                <View
                  style={{
                    paddingVertical: responsiveHeight(0.8),
                  }}>
                  <AppText
                    title={item.title}
                    textColor={AppColors.BLACK}
                    textSize={1.5}
                  />
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </ImageBackground>

      <View style={{backgroundColor: '#f0f0fa'}}>
        <LineBreak space={2} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: responsiveWidth(6),
          }}>
          <AppText
            title={'Services'}
            textColor={AppColors.BLACK}
            textSize={2.2}
            textFontWeight
          />

          <TouchableOpacity>
            <AppText
              title={'View All'}
              textColor={AppColors.DARKGRAY}
              textSize={1.8}
              textFontWeight
            />
          </TouchableOpacity>
        </View>

        <LineBreak space={2} />

        <FlatList
          data={serviceData}
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={() => <LineBreak space={2} />}
          contentContainerStyle={{paddingLeft: responsiveWidth(6), gap: 20}}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  backgroundColor: AppColors.WHITE,
                  position: 'relative',
                  borderRadius: 15,
                }}>
                <ImageBackground
                  source={item.img}
                  style={{
                    width: responsiveWidth(70),
                    height: responsiveHeight(20),
                  }}
                  imageStyle={{
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                  }}>
                  <View
                    style={{
                      backgroundColor: AppColors.WHITE,
                      padding: 7,
                      width: responsiveWidth(25),
                      marginHorizontal: responsiveWidth(4),
                      marginVertical: responsiveHeight(2),
                      alignItems: 'center',
                      borderRadius: 100,
                    }}>
                    <AppText
                      title={item.tagName}
                      textColor={AppColors.BTNCOLOURS}
                      textSize={1.6}
                      textFontWeight
                    />
                  </View>

                  <View
                    style={{
                      backgroundColor: AppColors.BTNCOLOURS,
                      padding: 7,
                      width: responsiveWidth(18),
                      alignItems: 'center',
                      borderRadius: 100,
                      position: 'absolute',
                      bottom: responsiveHeight(-2),
                      right: responsiveWidth(5),
                      borderWidth: 4,
                      borderColor: AppColors.WHITE,
                    }}>
                    <AppText
                      title={`₹${item.priceTag}`}
                      textColor={AppColors.WHITE}
                      textSize={1.6}
                      textFontWeight
                    />
                  </View>
                </ImageBackground>

                <LineBreak space={2} />

                <View
                  style={{
                    flexDirection: 'row',
                    gap: 8,
                    alignItems: 'center',
                    paddingHorizontal: responsiveWidth(4),
                  }}>
                  <View style={{flexDirection: 'row', gap: 2}}>
                    {[...Array(5)].map((_, index) => (
                      <Ionicons
                        key={index}
                        name="star"
                        size={responsiveFontSize(1.6)}
                        color={AppColors.Yellow}
                      />
                    ))}
                  </View>
                  <AppText
                    title={item.rating}
                    textColor={'#A2845E'}
                    textSize={1.5}
                    textFontWeight
                  />
                </View>

                <LineBreak space={0.5} />

                <View
                  style={{
                    paddingHorizontal: responsiveWidth(4),
                  }}>
                  <AppText
                    title={item.title}
                    textColor={AppColors.BTNCOLOURS}
                    textSize={2}
                    textFontWeight
                    numberOfLines={1}
                  />
                </View>

                <LineBreak space={4} />
              </View>
            );
          }}
        />

        <LineBreak space={2} />
      </View>
      <LineBreak space={2} />
    </ScrollView>
  );
};

export default Home;
