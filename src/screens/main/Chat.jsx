/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import AppColors from '../../utils/AppColors';
import {useNavigation} from '@react-navigation/native';
import AppHeader from '../../components/AppHeader';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utils/Responsive_Dimensions';
import AppTextInput from '../../components/AppTextInput';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const messages = [
  {id: '1', text: 'Let me know when reached', time: '9:42 am', isUser: false},
  {id: '2', text: "I'm here", time: '9:43 am', isUser: true},
  {id: '3', text: '...', isTyping: true, isUser: false},
];

const Chat = ({route}) => {
  const navigation = useNavigation();
  const heading = route?.params?.heading;

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
        <View style={styles.messageBubble}>
          <Text style={styles.messageText}>{item.text}</Text>
          <Text style={styles.messageTime}>{item.time}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: AppColors.WHITE}}>
      <AppHeader
        goBack={() => navigation.goBack()}
        borderBottomWidth={1}
        borderBottomColor={AppColors.DARKGRAY}
        heading={heading || 'Wade Warren'}
        icon={
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: AppColors.BTNCOLOURS,
              width: 40,
              height: 40,
              elevation: 10,
              backgroundColor: AppColors.WHITE,
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              right: responsiveWidth(5),
              top: responsiveHeight(2.1),
            }}
            onPress={() => navigation.navigate('Profile')}
            >
            <AntDesign
              name="user"
              size={responsiveFontSize(2.5)}
              color={AppColors.BTNCOLOURS}
            />
          </TouchableOpacity>
        }
      />

      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.chatArea}
      />

      <View style={styles.inputContainer}>
        <AppTextInput
          inputPlaceHolder={'Hello World'}
          inputWidth={65}
          containerBg={AppColors.WHITE}
          inputBgColour={AppColors.WHITE}
          borderColor={AppColors.WHITE}
          rightIcon={
            <TouchableOpacity>
              <Icon
                name="paperclip"
                size={responsiveFontSize(3)}
                color={AppColors.BLACK}
                style={styles.icon}
              />
            </TouchableOpacity>
          }
        />
        <TouchableOpacity>
          <Icon
            name="send"
            size={responsiveFontSize(3)}
            color={AppColors.BTNCOLOURS}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: AppColors.WHITE},
  chatArea: {
    paddingHorizontal: responsiveWidth(6),
    paddingVertical: responsiveHeight(2),
  },
  messageContainer: {marginVertical: 5},
  messageBubble: {
    padding: responsiveHeight(1.5),
    borderRadius: 10,
    maxWidth: '70%',
    backgroundColor: AppColors.BTNCOLOURS,
  },
  userMessage: {
    alignSelf: 'flex-end',
  },
  otherMessage: {
    alignSelf: 'flex-start',
    opacity: 0.7,
  },
  messageText: {color: AppColors.WHITE},
  messageTime: {
    fontSize: responsiveFontSize(1.2),
    color: AppColors.WHITE,
    marginTop: responsiveHeight(0.5),
    textAlign: 'right',
  },
  typingBubble: {
    backgroundColor: AppColors.BTNCOLOURS,
    alignSelf: 'flex-start',
    paddingHorizontal: responsiveWidth(5),
    opacity: 0.8,
  },
  typingDots: {
    fontSize: responsiveFontSize(3),
    color: AppColors.BTNCOLOURS,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    paddingVertical: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(6),
    gap: 10,
    alignItems: 'center',
    backgroundColor: '#d6d6d6',
  },
  icon: {
    marginHorizontal: responsiveWidth(1),
  },
});
