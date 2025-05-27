/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {View, Image, ImageBackground} from 'react-native';
import AppImages from '../../assets/images/AppImages';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../utils/Responsive_Dimensions';
import AppColors from '../../utils/AppColors';
import AppText from '../../components/AppTextComps/AppText';
import AppButton from '../../components/AppButton';
import AppIntroSlider from 'react-native-app-intro-slider';
import {useNavigation} from '@react-navigation/native';
import LineBreak from '../../components/LineBreak';

const OnBoarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const navigation = useNavigation();

  const slides = [
    {
      key: 1,
      text: 'Welcome to Workmate!',
      detail:
        'Make Smart Decisions! Set clear timelines for projects and celebrate your achievements!',
      image: AppImages.app_logo,
    },
    {
      key: 2,
      text: 'Welcome to Workmate!',
      detail:
        'Make Smart Decisions! Set clear timelines for projects and celebrate your achievements!',
      image: AppImages.app_logo,
    },
    {
      key: 3,
      text: 'Welcome to Workmate!',
      detail:
        'Make Smart Decisions! Set clear timelines for projects and celebrate your achievements!',
      image: AppImages.app_logo,
    },
  ];

  const renderDots = () => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: responsiveHeight(3),
      }}>
      {slides.map((_, index) => (
        <View
          key={index}
          style={{
            width: responsiveWidth(6),
            height: 5,
            borderRadius: 4,
            backgroundColor:
              index === currentIndex ? AppColors.BTNCOLOURS : '#ccc',
            marginHorizontal: responsiveWidth(0.5),
          }}
        />
      ))}
    </View>
  );

  const renderItem = ({item}) => (
    <View>
      <Image
        source={item.image}
        style={{
          height: responsiveHeight(50),
          width: responsiveWidth(100),
          resizeMode: 'cover',
        }}
      />
      <LineBreak space={15} />
      <View style={{paddingHorizontal: responsiveWidth(10)}}>
        <AppText
          title={item.text}
          textColor={AppColors.BLACK}
          textSize={3}
          textFontWeight
          textAlignment={'center'}
        />
        <AppText
          title={item.detail}
          textColor={AppColors.LIGHTGRAY}
          textSize={1.8}
          textAlignment={'center'}
        />
      </View>
      {renderDots()}
    </View>
  );

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      sliderRef.current?.goToSlide(currentIndex + 1, true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      sliderRef.current?.goToSlide(currentIndex - 1, true);
    }
  };

  const handleSkip = () => {
    sliderRef.current?.goToSlide(slides.length - 1, true);
  };

  const handleDone = () => {
    navigation.replace('Login');
  };

  const renderCustomButtons = () => {
    if (currentIndex === 0) {
      return (
        <View
          style={{
            margin: responsiveWidth(5),
          }}>
          <AppButton
            title="Next"
            textColor={AppColors.WHITE}
            bgColor={AppColors.BTNCOLOURS}
            borderRadius={24}
            handlePress={handleNext}
          />
          <LineBreak space={2} />
          <AppButton
            title="Skip"
            textColor={AppColors.BLACK}
            bgColor={AppColors.WHITE}
            borderWidth={1}
            borderColor={AppColors.BTNCOLOURS}
            borderRadius={24}
            handlePress={handleSkip}
          />
        </View>
      );
    }

    if (currentIndex === 1) {
      return (
        <View
          style={{
            margin: responsiveWidth(5),
          }}>
          <AppButton
            title="Next"
            textColor={AppColors.WHITE}
            bgColor={AppColors.BTNCOLOURS}
            borderRadius={24}
            handlePress={handleNext}
          />
          <LineBreak space={2} />
          <AppButton
            title="Previous"
            textColor={AppColors.BLACK}
            bgColor={AppColors.WHITE}
            borderWidth={1}
            borderColor={AppColors.BTNCOLOURS}
            borderRadius={24}
            handlePress={handlePrev}
          />
        </View>
      );
    }

    if (currentIndex === 2) {
      return (
        <View
          style={{
            margin: responsiveWidth(5),
          }}>
          <AppButton
            title="Done"
            textColor={AppColors.WHITE}
            bgColor={AppColors.BTNCOLOURS}
            borderRadius={24}
            handlePress={handleDone}
          />
          <LineBreak space={2} />
          <AppButton
            title="Previous"
            textColor={AppColors.BLACK}
            bgColor={AppColors.WHITE}
            borderWidth={1}
            borderColor={AppColors.BTNCOLOURS}
            borderRadius={24}
            handlePress={handlePrev}
          />
        </View>
      );
    }

    return null;
  };
  return (
    <ImageBackground
      style={{width: '100%', height: '100%'}}
      source={AppImages.onboarding_bg}>
      <AppIntroSlider
        ref={sliderRef}
        data={slides}
        renderItem={renderItem}
        onSlideChange={index => setCurrentIndex(index)}
        showNextButton={false}
        showSkipButton={false}
        showDoneButton={false}
        dotStyle={{display: 'none'}}
      />
      {renderCustomButtons()}
    </ImageBackground>
  );
};

export default OnBoarding;
