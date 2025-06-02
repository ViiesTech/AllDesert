/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {useCustomNavigation} from '../../utils/Hooks';
import AppHeader from '../../components/AppHeader';
import {responsiveWidth} from '../../utils/Responsive_Dimensions';
import ActiveTaskCard from '../../components/ActiveTaskCard';

const TaskDetails = () => {
  const {goBack} = useCustomNavigation();

  return (
    <View style={{flex: 1}}>
      <AppHeader
        heading="Task Details"
        goBack
        isCenteredHead
        taskId={'TASK #13424'}
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
      </View>
    </View>
  );
};

export default TaskDetails;
