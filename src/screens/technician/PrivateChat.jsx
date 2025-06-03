/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Text, FlatList} from 'react-native';
import AppHeader from '../../components/AppHeader';
import Feather from 'react-native-vector-icons/Feather';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utils/Responsive_Dimensions';
import AppColors from '../../utils/AppColors';
import {useCustomNavigation} from '../../utils/Hooks';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AppTextInput from '../../components/AppTextInput';
import LineBreak from '../../components/LineBreak';
import CustomMediaModal from '../../components/CustomModiaModal';

const messages = [
  {id: '1', text: 'Let me know when reached', time: '9:42 am', isUser: false},
  {id: '2', text: "I'm here", time: '9:43 am', isUser: true},
  {id: '3', text: '...', isTyping: true, isUser: false},
];

const PrivateChat = () => {
  const {navigateToRoute} = useCustomNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const renderItem = ({item}) => {
    if (item.isTyping) {
      return (
        <View style={[styles.messageBubble, styles.typingBubble]}>
          <Text style={styles.typingDots}>•••</Text>
        </View>
      );
    }

    return (
      <View
        style={[
          styles.messageContainer,
          item.isUser ? styles.userMessage : styles.otherMessage,
        ]}>
        <View
          style={[
            styles.messageBubble,
            {backgroundColor: item.isUser ? '#D9D9D9' : AppColors.WHITE},
          ]}>
          <Text
            style={[
              styles.messageText,
              {color: item.isUser ? AppColors.WHITE : AppColors.GRAY},
            ]}>
            {item.text}
          </Text>
          <Text
            style={[
              styles.messageTime,
              {color: item.isUser ? AppColors.WHITE : AppColors.GRAY},
            ]}>
            {item.time}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <AppHeader
        heading="Private Chat"
        goBack
        subheading="Tegal Mulyorejo Baru, Mulyorejo Surbaya, 60121"
        icon={
          <TouchableOpacity onPress={() => navigateToRoute('Calling')}>
            <Feather
              name="phone"
              size={responsiveFontSize(3)}
              color={AppColors.GRAY}
            />
          </TouchableOpacity>
        }
        headerBg={AppColors.WHITE}
        privateChat={'privateChat'}
      />

      <CustomMediaModal
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
      />

      <LineBreak space={2} />

      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.chatArea}
      />

      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <MaterialCommunityIcons
            name="paperclip"
            size={responsiveFontSize(3)}
            color={AppColors.LIGHTGRAY}
            style={styles.icon}
          />
        </TouchableOpacity>
        <AppTextInput
          inputPlaceHolder={'Write your message here'}
          placeholderTextColor={AppColors.LIGHTGRAY}
          inputWidth={70}
          containerBg={AppColors.WHITE}
          inputBgColour={AppColors.WHITE}
          borderColor={AppColors.WHITE}
        />
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="send"
            size={responsiveFontSize(3)}
            color={AppColors.LIGHTGRAY}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PrivateChat;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: AppColors.WHITE},
  chatArea: {
    paddingHorizontal: responsiveWidth(4),
    paddingVertical: responsiveHeight(2),
  },
  messageContainer: {marginVertical: 5},
  messageBubble: {
    padding: responsiveHeight(1.5),
    borderRadius: 10,
    maxWidth: '70%',
    backgroundColor: AppColors.ThemeBlue,
  },
  userMessage: {
    alignSelf: 'flex-end',
  },
  otherMessage: {
    alignSelf: 'flex-start',
  },
  messageText: {color: AppColors.WHITE},
  messageTime: {
    fontSize: responsiveFontSize(1.2),
    color: AppColors.WHITE,
    marginTop: responsiveHeight(0.5),
    textAlign: 'right',
  },
  typingBubble: {
    backgroundColor: '#D9D9D9',
    alignSelf: 'flex-start',
    paddingHorizontal: responsiveWidth(5),
  },
  typingDots: {
    fontSize: responsiveFontSize(3),
    color: AppColors.DARKGRAY,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    paddingVertical: responsiveHeight(2),
    // paddingHorizontal: responsiveWidth(1),
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 10,
    borderColor: '#D9D9D9',
  },
  icon: {
    marginHorizontal: responsiveWidth(1),
  },
});
