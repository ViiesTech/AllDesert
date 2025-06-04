/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, ScrollView, FlatList} from 'react-native';
import AppHeader from '../../components/AppHeader';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../utils/Responsive_Dimensions';
import TabBarTab from '../../components/TabBarTab';
import LineBreak from '../../components/LineBreak';
import AppText from '../../components/AppTextComps/AppText';
import AppColors from '../../utils/AppColors';

const tabData = [
  {id: 1, title: 'Specification'},
  {id: 2, title: 'Docs'},
  {id: 3, title: 'Part list'},
];

const unitSectionOne = [
  {id: 1, title: 'BTU Performance', subTitle: ': 10,000'},
  {id: 2, title: 'EER', subTitle: ': 11.3'},
  {id: 3, title: 'Energy Star', subTitle: ': yes'},
  {id: 4, title: 'Dehumid.(pts/hr)', subTitle: ': 3.0'},
  {id: 5, title: 'Dry air flow', subTitle: ': 52/58'},
  {id: 6, title: 'est. cooling area', subTitle: ': 450'},
];

const unitSectionTwo = [
  {id: 1, title: 'BTU Performance', subTitle: ': 10,000'},
  {id: 2, title: 'EER', subTitle: ': 11.3'},
  {id: 3, title: 'Energy Star', subTitle: ': yes'},
  {id: 4, title: 'Dehumid.(pts/hr)', subTitle: ': 3.0'},
  {id: 5, title: 'Dry air flow', subTitle: ': 52/58'},
  {id: 6, title: 'est. cooling area', subTitle: ': 450'},
];

const tabTwoData = [
  {id: 1, title: 'Air Conditioner .jpg'},
  {id: 2, title: 'How to open Samsung s02ev6.mp4'},
  {id: 3, title: 'Samsung s02ev.8.pdf'},
  {id: 4, title: 'Samsung s02ev6.mp4'},
  {id: 5, title: 'Schematic Diagram .pdf'},
];

const tabThreeData = [
  {id: 1, title: 'Installation plate', subTitle: '42ce23452'},
  {id: 2, title: 'Chassis', subTitle: '42ce23452'},
  {id: 3, title: 'Indoor Fan', subTitle: '42ce23452'},
  {id: 4, title: 'Front Cover', subTitle: '42ce23452'},
  {id: 5, title: 'Evaporator', subTitle: '42ce23452'},
  {id: 6, title: 'Cabinet', subTitle: '42ce23452'},
  {id: 7, title: 'Air filter', subTitle: '42ce23452'},
  {id: 8, title: 'Side cover', subTitle: '42ce23452'},
  {id: 9, title: 'Indoor Fan', subTitle: '42ce23452'},
  {id: 10, title: 'Front Cover', subTitle: '42ce23452'},
  {id: 11, title: 'Evaporator', subTitle: '42ce23452'},
  {id: 12, title: 'Cabinet', subTitle: '42ce23452'},
];

const Calendar = () => {
  const [selectedTab, setSelectedTab] = useState({id: 1});

  return (
    <ScrollView style={{flex: 1}}>
      <AppHeader heading={'Unit details'} textFontWeight={true} />

      <LineBreak space={2} />

      <View style={{paddingHorizontal: responsiveWidth(5)}}>
        <FlatList
          data={tabData}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{gap: 10}}
          renderItem={({item}) => {
            return (
              <TabBarTab
                item={item}
                selectedTab={selectedTab}
                tabContainerOnPress={() => setSelectedTab({id: item.id})}
                unitDetails={'unitDetails'}
              />
            );
          }}
        />

        {selectedTab.id == 1 && (
          <>
            <LineBreak space={2} />

            <View
              style={{
                backgroundColor: AppColors.WHITE,
                paddingHorizontal: responsiveWidth(4),
                paddingVertical: responsiveHeight(2),
              }}>
              <AppText
                title={'UNIT INFORMATION'}
                textColor={AppColors.GRAY}
                textSize={2}
                textTransform={'uppercase'}
              />
              <LineBreak space={1} />
              <AppText
                title={'Samsung S02EV6'}
                textColor={AppColors.BLACK}
                textSize={2}
                textFontWeight
              />
              <LineBreak space={1} />
              <AppText
                title={'Spirit Air Condiotioner'}
                textColor={AppColors.DARKGRAY}
                textSize={2}
              />
              <LineBreak space={2} />
              <View style={{flexDirection: 'row', gap: 15, overflow: 'hidden'}}>
                {[...Array(3)].map((_, index) => (
                  <View
                    key={index}
                    style={{
                      width: responsiveWidth(25),
                      height: responsiveHeight(12),
                      backgroundColor: '#D9D9D9',
                    }}
                  />
                ))}
              </View>
            </View>

            <LineBreak space={4} />

            <FlatList
              data={unitSectionOne}
              ListHeaderComponent={
                <>
                  <AppText
                    title={'Performance'}
                    textColor={AppColors.BLACK}
                    textSize={2.3}
                    textFontWeight
                  />
                  <LineBreak space={2} />
                </>
              }
              ItemSeparatorComponent={<LineBreak space={2} />}
              renderItem={({item}) => {
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: responsiveWidth(65),
                    }}>
                    <AppText
                      title={item.title}
                      textColor={AppColors.LIGHTGRAY}
                      textSize={2}
                      textTransform={'uppercase'}
                    />
                    <AppText
                      title={item.subTitle}
                      textColor={AppColors.LIGHTGRAY}
                      textSize={2}
                      textTransform={'uppercase'}
                    />
                  </View>
                );
              }}
            />

            <LineBreak space={3} />
            <View
              style={{
                width: responsiveWidth(90),
                height: responsiveHeight(0.1),
                backgroundColor: AppColors.LIGHTGRAY,
              }}
            />
            <LineBreak space={2} />

            <FlatList
              data={unitSectionTwo}
              ListHeaderComponent={
                <>
                  <AppText
                    title={'Features'}
                    textColor={AppColors.BLACK}
                    textSize={2.3}
                    textFontWeight
                  />
                  <LineBreak space={2} />
                </>
              }
              ItemSeparatorComponent={<LineBreak space={2} />}
              ListFooterComponent={<LineBreak space={2} />}
              renderItem={({item}) => {
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: responsiveWidth(65),
                    }}>
                    <AppText
                      title={item.title}
                      textColor={AppColors.LIGHTGRAY}
                      textSize={2}
                      textTransform={'uppercase'}
                    />
                    <AppText
                      title={item.subTitle}
                      textColor={AppColors.LIGHTGRAY}
                      textSize={2}
                      textTransform={'uppercase'}
                    />
                  </View>
                );
              }}
            />
          </>
        )}

        {selectedTab.id == 2 && (
          <FlatList
            data={tabTwoData}
            ListHeaderComponent={<LineBreak space={8} />}
            ListFooterComponent={<LineBreak space={2} />}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: AppColors.DARKGRAY,
                    paddingVertical: responsiveHeight(2.5),
                  }}>
                  <AppText
                    title={item.title}
                    textColor={AppColors.LIGHTGRAY}
                    textSize={2}
                  />
                </View>
              );
            }}
          />
        )}

        {selectedTab.id == 3 && (
          <View>
            <FlatList
              data={tabThreeData}
              ListHeaderComponent={
                <>
                  <LineBreak space={5} />
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <AppText
                      title={'No Description'}
                      textColor={AppColors.BLACK}
                      textSize={2.2}
                    />
                    <AppText
                      title={'Part Number Qty'}
                      textColor={AppColors.BLACK}
                      textSize={2.2}
                    />
                  </View>
                  <LineBreak space={2} />
                </>
              }
              ItemSeparatorComponent={<LineBreak space={2} />}
              ListFooterComponent={<LineBreak space={2} />}
              renderItem={({item, index}) => {
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: responsiveWidth(78),
                    }}>
                    <AppText
                      title={`${index + 1} ${item.title}`}
                      textColor={AppColors.GRAY}
                      textSize={1.8}
                      textTransform={'uppercase'}
                    />
                    <AppText
                      title={item.subTitle}
                      textColor={AppColors.GRAY}
                      textSize={1.8}
                      textTransform={'uppercase'}
                    />
                  </View>
                );
              }}
            />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default Calendar;
