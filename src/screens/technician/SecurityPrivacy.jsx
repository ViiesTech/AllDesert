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
  {
    id: 1,
    title: 'Privacy permission item using 2 lines sentences',
    subTitle:
      'this is a short description about small item privacy permission using 2 line sentences',
  },
  {
    id: 2,
    title: 'Privacy permission item using 2 lines sentences',
    subTitle:
      'this is a short description about small item privacy permission using 2 line sentences',
  },
  {
    id: 3,
    title: 'Data Protection',
    subTitle:
      'Getting done is the most versatile task management software you will find on the market ',
    listSubtitle:
      'You can use the platform to manage all of your tasks , and also use it as a CRM , to manage cash flow',
    listSubtitleTwo:
      'Getting done is the most versatile task management software you will find on the market',
  },
];
const SecurityPrivacy = () => {
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
                  borderTopWidth: 1,
                  borderTopColor: AppColors.DARKGRAY,
                  paddingVertical: responsiveHeight(3),
                }}>
                <View style={{paddingHorizontal: responsiveWidth(6)}}>
                  {item.title && (
                    <View>
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
                          textwidth={60}
                          textFontWeight
                          lineHeight={3}
                        />
                        {item.id !== 3 && (
                          <TouchableOpacity>
                            <Feather
                              name="toggle-right"
                              size={responsiveFontSize(3.5)}
                              color={AppColors.BLACK}
                            />
                          </TouchableOpacity>
                        )}
                      </View>
                      <LineBreak space={1} />
                      <AppText
                        title={item.subTitle}
                        textColor={AppColors.LIGHTGRAY}
                        textSize={1.8}
                        textwidth={75}
                        lineHeight={2.5}
                      />
                      {item.listSubtitle && (
                        <View>
                          <LineBreak space={2} />
                          <AppText
                            title={item.listSubtitle}
                            textColor={AppColors.LIGHTGRAY}
                            textSize={1.8}
                            textwidth={75}
                            lineHeight={2.5}
                          />
                        </View>
                      )}
                      {item.listSubtitleTwo && (
                        <View>
                          <LineBreak space={2} />
                          <AppText
                            title={item.listSubtitleTwo}
                            textColor={AppColors.LIGHTGRAY}
                            textSize={1.8}
                            textwidth={75}
                            lineHeight={2.5}
                          />
                        </View>
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

export default SecurityPrivacy;
