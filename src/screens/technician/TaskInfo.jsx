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
import TaskCompletenessCard from '../../components/TaskCompletenessCard';
import CustomerNoteCard from '../../components/CustomerNoteCard';

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

        <TaskCompletenessCard data={data} />

        <LineBreak space={1} />

        <CustomerNoteCard />
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
