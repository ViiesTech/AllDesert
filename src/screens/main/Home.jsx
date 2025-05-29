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
import ServicesCard from '../../components/ServicesCard';
import {useNavigation} from '@react-navigation/native';
import CategoriesCard from '../../components/CategoriesCard';

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
  const navigation = useNavigation();
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
            }}
            onPress={() => navigation.navigate('Notifications')}
            >
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

          <TouchableOpacity
            onPress={() => navigation.navigate('AllCategories')}>
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
              <CategoriesCard item={item} />
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
            return <ServicesCard item={item} />;
          }}
        />

        <LineBreak space={2} />
      </View>
      <LineBreak space={2} />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: responsiveWidth(8),
        }}>
        <AppText
          title={'Featured'}
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
          return <ServicesCard item={item} featured={'featured'} />;
        }}
      />

      <LineBreak space={2} />

      <View
        style={{
          backgroundColor: AppColors.BTNCOLOURS,
          paddingHorizontal: responsiveWidth(8),
          paddingVertical: responsiveHeight(2),
          alignItems: 'center',
        }}>
        <LineBreak space={1} />
        <Image
          source={AppImages.stars}
          style={{width: responsiveWidth(90)}}
          resizeMode="contain"
        />
        <LineBreak space={3} />
        <AppText
          title={'Introducing Customer Rating'}
          textColor={AppColors.WHITE}
          textSize={2.2}
          textFontWeight
          textAlignment={'center'}
        />
        <TouchableOpacity
          style={{
            backgroundColor: AppColors.WHITE,
            width: responsiveWidth(32),
            paddingVertical: responsiveHeight(1),
            marginHorizontal: responsiveWidth(4),
            marginVertical: responsiveHeight(2),
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
          }}>
          <AppText
            title={'See Your Rating'}
            textColor={AppColors.BTNCOLOURS}
            textSize={1.6}
            textFontWeight
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Home;
