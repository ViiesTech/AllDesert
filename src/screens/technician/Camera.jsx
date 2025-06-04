/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, TouchableOpacity, FlatList} from 'react-native';
import AppHeader from '../../components/AppHeader';
import AppColors from '../../utils/AppColors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utils/Responsive_Dimensions';
import AppText from '../../components/AppTextComps/AppText';
import Octicons from 'react-native-vector-icons/Octicons';
import LineBreak from '../../components/LineBreak';
import Feather from 'react-native-vector-icons/Feather';
import SVGXml from '../../components/SVGXML';
import AppIcons from '../../assets/icons/AppIcons';

const data = [
  {id: 1, title: 'Barcode scan'},
  {id: 2, title: 'Take a photo'},
];

const Camera = () => {
  const [selectedTab, setSelectedTab] = useState({
    id: 1,
    title: 'Barcode scan',
  });
  return (
    <View style={{flex: 1}}>
      <AppHeader
        heading={selectedTab?.title}
        isCenteredHead
        headerBg={AppColors.WHITE}
        textTransform={'capitalize'}
        goBack
        textFontWeight={true}
        paddingBottom={2}
        isCenteredHeadWidth={61}
        icon={
          <TouchableOpacity>
            <Ionicons
              name="flash-off-outline"
              size={responsiveFontSize(3.5)}
              color={AppColors.BLACK}
            />
          </TouchableOpacity>
        }
      />

      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        {selectedTab.id == 2 && (
          <TouchableOpacity>
            <SVGXml
              icon={AppIcons.rounded}
              width={80}
              height={80}
              style={{alignSelf: 'center'}}
            />
          </TouchableOpacity>
        )}
        {selectedTab.id == 2 && <LineBreak space={2} />}
        <View
          style={{
            backgroundColor: AppColors.WHITE,
            paddingVertical: responsiveHeight(2),
          }}>
          <FlatList
            data={data}
            horizontal
            contentContainerStyle={{
              flex: 1,
              justifyContent: 'space-between',
              paddingHorizontal: responsiveWidth(8),
            }}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  style={{alignItems: 'center'}}
                  onPress={() =>
                    setSelectedTab({id: item.id, title: item.title})
                  }>
                  {item.id == 1 && (
                    <Octicons
                      name="device-mobile"
                      size={responsiveFontSize(4)}
                      color={
                        selectedTab.id == item.id
                          ? AppColors.royalBlue
                          : AppColors.DARKGRAY
                      }
                    />
                  )}
                  {item.id == 2 && (
                    <Feather
                      name="camera"
                      size={responsiveFontSize(4)}
                      color={
                        selectedTab.id == item.id
                          ? AppColors.royalBlue
                          : AppColors.DARKGRAY
                      }
                    />
                  )}
                  <LineBreak space={0.6} />
                  <AppText
                    title={item.title}
                    textColor={
                      selectedTab.id == item.id
                        ? AppColors.royalBlue
                        : AppColors.DARKGRAY
                    }
                    textSize={2}
                  />
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Camera;
