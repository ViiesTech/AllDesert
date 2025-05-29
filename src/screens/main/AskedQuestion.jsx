/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, ScrollView} from 'react-native';
import AppColors from '../../utils/AppColors';
import {useNavigation} from '@react-navigation/native';
import AppHeader from '../../components/AppHeader';
import FAQScreen from '../../components/FAQScreen';

const AskedQuestion = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={{flex: 1, backgroundColor: AppColors.WHITE}}>
      <AppHeader
        goBack={() => navigation.goBack()}
        heading={'Frequently Asked Questions:'}
      />

      <View>
        <FAQScreen />
      </View>
    </ScrollView>
  );
};

export default AskedQuestion;
