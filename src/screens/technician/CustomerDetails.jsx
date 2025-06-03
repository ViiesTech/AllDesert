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
import Octicons from 'react-native-vector-icons/Octicons';
import SVGXml from '../../components/SVGXML';
import AppIcons from '../../assets/icons/AppIcons';
import UpdateTaskModal from '../../components/UpdateTaskModal';

const CustomerDetails = () => {
  const {navigateToRoute} = useCustomNavigation();
  const [showModal, setShowModal] = useState(false);

  return (
    <ScrollView style={{flex: 1}}>
      <AppHeader
        heading="Customer details"
        goBack
        isCenteredHead
        isCenteredHeadWidth={65}
        taskId={'TASK #13424'}
      />

      <UpdateTaskModal
        isVisible={showModal}
        onCloseIconPress={() => setShowModal(false)}
        onSelectTaskPress={() => {
            setShowModal(false);
            navigateToRoute('TaskInfo');
        }}
      />

      <View style={{paddingHorizontal: responsiveWidth(5)}}>
        <ActiveTaskCard
          item={{
            id: 1,
            taskId: '10/05/2020',
            taskTime: '3hr',
            status: 'In Progress',
            desc: 'AC condenser with 3 outdoor units maintenance',
            timeLeft: '16 hour left',
            unitInfo: 'UNIT INFORMATION',
            samsung: 'Samsung S02EV6',
            viewDetails: 'View Details',
          }}
          customerDetails={'customerDetails'}
          statusOnPress={() => {}}
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

          <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
            <AppButton
              title="UPDATE TASK"
              textColor={AppColors.WHITE}
              bgColor={AppColors.BTNCOLOURS}
              buttoWidth={57}
              borderRadius={0}
              handlePress={() => setShowModal(true)}
            />
            <TouchableOpacity
              style={{
                backgroundColor: AppColors.BTNCOLOURS,
                width: 40,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 100,
              }}>
              <Octicons
                name="chevron-left"
                size={responsiveFontSize(3.5)}
                color={AppColors.WHITE}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: AppColors.BTNCOLOURS,
                width: 40,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 100,
              }}>
              <SVGXml icon={AppIcons.chat} width={41} height={41} />
            </TouchableOpacity>
          </View>
        </View>

        <LineBreak space={2} />
      </View>
    </ScrollView>
  );
};

export default CustomerDetails;
