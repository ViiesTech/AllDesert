/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import {useCustomNavigation} from '../../utils/Hooks';
import AppHeader from '../../components/AppHeader';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utils/Responsive_Dimensions';
import ActiveTaskCard from '../../components/ActiveTaskCard';
import LineBreak from '../../components/LineBreak';
import AppColors from '../../utils/AppColors';
import AppText from '../../components/AppTextComps/AppText';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppImages from '../../assets/images/AppImages';
import AppButton from '../../components/AppButton';
import WelcomeModal from '../../components/WelcomeModal';

const TaskDetails = () => {
  const {navigateToRoute} = useCustomNavigation();
  const [showModal, setShowModal] = useState(false);

  return (
    <ScrollView style={{flex: 1}}>
      <AppHeader
        heading="Task Details"
        goBack
        isCenteredHead
        taskId={'TASK #13424'}
      />
      <WelcomeModal
        isVisible={showModal}
        onBackdropPress={() => setShowModal(false)}
        submitOnPress={() => {
          setShowModal(false);
          navigateToRoute('CustomerDetails');
        }}
        exploreOnPress={() => setShowModal(false)}
      />
      <View style={{paddingHorizontal: responsiveWidth(5)}}>
        <ActiveTaskCard
          item={{
            id: 1,
            taskId: '10/05/2020',
            taskTime: '3hr',
            status: 'Open',
            desc: 'AC condenser with 3 outdoor units maintenance',
            timeLeft: '16 hour left',
            unitInfo: 'UNIT INFORMATION',
            samsung: 'Samsung S02EV6',
            viewDetails: 'View Details',
          }}
          taskDetails={'taskDetails'}
        />

        <LineBreak space={2} />

        <View
          style={{
            backgroundColor: AppColors.WHITE,
            paddingHorizontal: responsiveWidth(4),
            paddingVertical: responsiveHeight(2),
          }}>
          <AppText
            title={'CUSTOMER INFORMATION'}
            textColor={AppColors.GRAY}
            textSize={1.7}
            textFontWeight
          />
          <LineBreak space={2} />

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
            }}>
            <Image
              source={AppImages.service_img}
              style={{width: 30, height: 30, borderRadius: 100}}
            />
            <View>
              <AppText
                title={'Demi Hickman'}
                textColor={AppColors.BLACK}
                textSize={2.2}
                textFontWeight
              />
            </View>
          </View>

          <LineBreak space={1} />

          <View
            style={{
              flexDirection: 'row',
              gap: 5,
            }}>
            <Ionicons
              name={'location-sharp'}
              size={responsiveFontSize(3)}
              color={AppColors.BTNCOLOURS}
            />
            <View>
              <AppText
                title={'Tegal Mulyorejo Baru, Mulyorejo Surbaya, 60121'}
                textColor={AppColors.LIGHTGRAY}
                textSize={1.8}
                textwidth={60}
              />
            </View>
          </View>

          <LineBreak space={4} />

          <Image
            source={AppImages.map}
            style={{width: responsiveWidth(82), height: responsiveHeight(20)}}
          />

          <LineBreak space={2} />

          <TouchableOpacity>
            <AppText
              title={'View Details'}
              textColor={AppColors.BTNCOLOURS}
              textSize={1.7}
              textFontWeight
            />
          </TouchableOpacity>
        </View>

        <LineBreak space={2} />

        <View
          style={{
            backgroundColor: AppColors.WHITE,
            paddingHorizontal: responsiveWidth(4),
            paddingVertical: responsiveHeight(2),
          }}>
          <AppText
            title={'CUSTOMER NOTE'}
            textColor={AppColors.GRAY}
            textSize={1.7}
            textFontWeight
          />

          <LineBreak space={0.5} />

          <AppText
            title={
              'This machine can’t working well every i turn it on the AC always make a noisy sound, and the AC can always hot ever............'
            }
            textColor={AppColors.GRAY}
            textSize={1.6}
            textwidth={70}
          />

          <LineBreak space={1} />

          <AppText
            title={'View more'}
            textColor={AppColors.BTNCOLOURS}
            textSize={1.7}
            textFontWeight
          />

          <LineBreak space={2} />

          <AppButton
            title="Take Task"
            textColor={AppColors.WHITE}
            bgColor={AppColors.BTNCOLOURS}
            buttoWidth={82}
            borderRadius={0}
            handlePress={() => setShowModal(true)}
          />
        </View>

        <LineBreak space={2} />
      </View>
    </ScrollView>
  );
};

export default TaskDetails;
