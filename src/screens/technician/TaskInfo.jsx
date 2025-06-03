/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React, {useState} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import AppHeader from '../../components/AppHeader';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utils/Responsive_Dimensions';
import AppColors from '../../utils/AppColors';
import AppText from '../../components/AppTextComps/AppText';
import LineBreak from '../../components/LineBreak';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AppButton from '../../components/AppButton';
import {useCustomNavigation} from '../../utils/Hooks';
import TaskCompletedModal from '../../components/TaskCompletedModal';

const data = [
  {
    id: 1,
    title: 'Task Completeness',
    icon: (
      <Feather
        name="check-circle"
        size={responsiveFontSize(2.5)}
        color={AppColors.BTNCOLOURS}
      />
    ),
  },
  {
    id: 2,
    title: 'Cleanliness',
    icon: (
      <Feather
        name="check-circle"
        size={responsiveFontSize(2.5)}
        color={AppColors.BTNCOLOURS}
      />
    ),
  },
  {
    id: 3,
    title: 'Customer Approval',
    icon: (
      <Feather
        name="check-circle"
        size={responsiveFontSize(2.5)}
        color={AppColors.BTNCOLOURS}
      />
    ),
  },
  {
    id: 4,
    title: 'Work Rating',
  },
];

const TaskInfo = () => {
  const {navigateToRoute, goBack} = useCustomNavigation();
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={{flex: 1}}>
      <AppHeader
        heading="Task Details"
        goBack
        isCenteredHead
        taskId={'TASK #13424'}
      />

      <TaskCompletedModal
        isVisible={showModal}
        onBackdropPress={() => setShowModal(false)}
        submitOnPress={() => {
          setShowModal(false);
          navigateToRoute('UserDetails');
        }}
      />

      <View style={{paddingHorizontal: responsiveWidth(5)}}>
        <AppText
          title={'10/05/2020 9:41 AM'}
          textColor={AppColors.GRAY}
          textSize={1.7}
        />
        <LineBreak space={1} />

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

        <LineBreak space={1} />

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
            lineHeight={2.5}
          />

          <LineBreak space={4} />

          <AppText
            title={'TECHNICAL FEEDBACK'}
            textColor={AppColors.GRAY}
            textSize={1.7}
            textFontWeight
          />

          <LineBreak space={1} />

          <TouchableOpacity onPress={() => navigateToRoute('AddNotes')}>
            <AppText
              title={'Add Note'}
              textColor={AppColors.BTNCOLOURS}
              textSize={1.7}
              textFontWeight
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'flex-end',
          flexDirection: 'row',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            borderTopWidth: 4,
            borderTopColor: AppColors.appBgColor,
            paddingTop: responsiveHeight(4),
            width: responsiveWidth(100),
          }}>
          <AppButton
            title="CANCEL"
            textColor={AppColors.GRAY}
            bgColor={'transparent'}
            buttoWidth={30}
            padding={15}
            borderColor={AppColors.BTNCOLOURS}
            handlePress={() => goBack()}
          />

          <LineBreak space={1} />

          <AppButton
            title="COMPLETE TASK"
            textColor={AppColors.WHITE}
            bgColor={AppColors.BTNCOLOURS}
            buttoWidth={60}
            leftIcon={
              <Feather
                name="check-circle"
                size={responsiveFontSize(2.5)}
                color={AppColors.WHITE}
              />
            }
            padding={15}
            handlePress={() => setShowModal(true)}
          />
        </View>
      </View>
      <LineBreak space={2} />
    </View>
  );
};

export default TaskInfo;
