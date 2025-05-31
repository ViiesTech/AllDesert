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
            taskId: 'TASK #13424',
            taskTime: '3hr',
            status: 'Open',
            desc: 'Service kondensor AC dan tiga kipas angin',
            timeLeft: '16 hour left',
            location: 'Tegal Mulyorejo Baru',
            km: '1.3 km',
          }}
        />
      </View>
    </View>
  );
};

export default TaskDetails;
