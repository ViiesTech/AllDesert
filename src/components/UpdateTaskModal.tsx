/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../utils/Responsive_Dimensions';
import LineBreak from './LineBreak';
import AppText from './AppTextComps/AppText';
import AppColors from '../utils/AppColors';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {
  isVisible?: any;
  onBackdropPress?: any;
  onCloseIconPress?: any;
  onSelectTaskPress?:any;
};

const list = [
  {id: 1, title: 'On Trip'},
  {id: 2, title: 'In Progress'},
  {id: 3, title: 'Pending'},
  {id: 4, title: 'Reschedule'},
  {id: 5, title: 'Complete'},
];

const UpdateTaskModal = ({
  isVisible,
  onBackdropPress,
  onCloseIconPress,
  onSelectTaskPress,
}: Props) => {
  return (
    <Modal
      isVisible={isVisible}
      backdropOpacity={0.9}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      onBackdropPress={onBackdropPress}
      style={{
        flex: 1,
        margin: 0,
        justifyContent: 'flex-end',
      }}>
      <View
        style={{
          backgroundColor: 'white',
          paddingHorizontal: responsiveWidth(4),
          height: responsiveHeight(42),
        }}>
        <LineBreak space={2} />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <AppText
            title={'Update Task'}
            textColor={AppColors.BLACK}
            textSize={2.5}
            textFontWeight
          />

          <TouchableOpacity onPress={onCloseIconPress}>
            <Ionicons
              name="close"
              size={responsiveFontSize(3.5)}
              color={AppColors.BLACK}
            />
          </TouchableOpacity>
        </View>
        <LineBreak space={2} />

        <FlatList
          data={list}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={{
                  paddingVertical: responsiveHeight(2),
                  borderBottomWidth: item.id === 5 ? 0 : 1,
                  borderBottomColor: AppColors.DARKGRAY,
                }}
                onPress={onSelectTaskPress}
                >
                <AppText
                  title={item.title}
                  textColor={AppColors.BLACK}
                  textSize={1.8}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </Modal>
  );
};

export default UpdateTaskModal;
