/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, FlatList} from 'react-native';
import AppColors from '../../utils/AppColors';
import AppHeader from '../../components/AppHeader';
import {useNavigation} from '@react-navigation/native';
import AppIcons from '../../assets/icons/AppIcons';
import LineBreak from '../../components/LineBreak';
import {responsiveWidth} from '../../utils/Responsive_Dimensions';
import CategoriesCard from '../../components/CategoriesCard';

const categoryData = [
  {id: 1, title: 'Fridge Repair', icon: AppIcons.fridge},
  {id: 2, title: 'All Parts', icon: AppIcons.all_parts},
  {id: 3, title: 'Washer', icon: AppIcons.washer},
  {id: 4, title: 'Dryer', icon: AppIcons.dryer},
  {id: 5, title: 'Smart home', icon: AppIcons.smart_home},
  {id: 6, title: 'AC Repair', icon: AppIcons.air_conditioner},
];

const AllCategories = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, backgroundColor: AppColors.WHITE}}>
      <AppHeader goBack={() => navigation.goBack()} heading="All Categories" />

        <LineBreak space={1} />

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
          return <CategoriesCard item={item} />;
        }}
      />
    </View>
  );
};

export default AllCategories;
