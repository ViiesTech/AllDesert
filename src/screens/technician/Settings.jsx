/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import AppColors from '../../utils/AppColors';
import AppHeader from '../../components/AppHeader';
import LineBreak from '../../components/LineBreak';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utils/Responsive_Dimensions';
import AppText from '../../components/AppTextComps/AppText';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AppButton from '../../components/AppButton';

const settings = [
  {id: 1, title: 'Enable notifications'},
  {id: 2, title: 'Show reminder'},
  {id: 3, title: 'Turn off camera when start a video call'},
  {id: 4, listName: 'Setting item list 01', listSubtitle: 'Option 01'},
  {id: 5, title: 'App Version'},
  {id: 6, listName: 'Password', listSubtitle: 'You can reset your password'},
];

const Settings = () => {
  return (
    <View style={{flex: 1}}>
      <AppHeader
        heading="Settings"
        isCenteredHead
        headerBg={AppColors.WHITE}
        goBack
        textFontWeight={true}
        paddingBottom={2}
        isCenteredHeadWidth={55}
      />

      <LineBreak space={2} />

      <View>
        <FlatList
          data={settings}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  borderTopWidth: item.id == 1 ? 0 : 1,
                  borderTopColor: AppColors.DARKGRAY,
                  paddingVertical: responsiveHeight(3),
                }}>
                <View style={{paddingHorizontal: responsiveWidth(6)}}>
                  {item.title && (
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <AppText
                        title={item.title}
                        textColor={AppColors.BLACK}
                        textSize={2.2}
                        textwidth={item.id == 3 && 60}
                        textFontWeight
                      />
                      {item.id !== 5 && (
                        <TouchableOpacity>
                          <Feather
                            name="toggle-right"
                            size={responsiveFontSize(3.5)}
                            color={AppColors.BLACK}
                          />
                        </TouchableOpacity>
                      )}
                    </View>
                  )}
                  {item.listName && (
                    <AppText
                      title={item.listName}
                      textColor={AppColors.BLACK}
                      textSize={2.2}
                      textFontWeight
                    />
                  )}
                  {item.listName && <LineBreak space={1} />}
                  {item.listSubtitle && (
                    <View
                      style={
                        item.id == 4
                          ? {
                              flexDirection: 'row',
                              alignItems: 'center',
                              gap: 10,
                            }
                          : {}
                      }>
                      {item.id == 4 && (
                        <TouchableOpacity>
                          <Fontisto
                            name="radio-btn-active"
                            size={responsiveFontSize(3.5)}
                            color={AppColors.BTNCOLOURS}
                          />
                        </TouchableOpacity>
                      )}
                      <AppText
                        title={item.listSubtitle}
                        textColor={AppColors.GRAY}
                        textSize={item.id == 4 ? 2 : 1.7}
                        textFontWeight={item.id == 4 ? true : false}
                      />
                      {item.id == 6 && (
                        <>
                        <LineBreak space={2} />
                        <AppButton
                          title="RESET PASSWORD"
                          textColor={AppColors.royalBlue}
                          borderWidth={1}
                          borderColor={AppColors.royalBlue}
                          bgColor={'transparent'}
                          textFontWeight={false}
                          borderRadius={-1}
                          textTransform={'uppercase'}
                          buttoWidth={55}
                          handlePress={() => {}}
                          />
                          </>
                      )}
                    </View>
                  )}
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Settings;
