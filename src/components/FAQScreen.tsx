import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
  StyleSheet,
  FlatList,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../utils/Responsive_Dimensions';
import AppColors from '../utils/AppColors';

// Enable LayoutAnimation on Android
if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const AccordionItem = ({item, isExpanded, onPress}: any) => (
  <View style={styles.card}>
    <TouchableOpacity
      style={[
        styles.header,
        {backgroundColor: isExpanded ? AppColors.BTNCOLOURS : AppColors.WHITE},
      ]}
      onPress={onPress}>
      <Text
        style={[
          styles.title,
          {color: isExpanded ? AppColors.WHITE : AppColors.GRAY},
        ]}>
        {item.title}
      </Text>
      <AntDesign
        name={isExpanded ? 'up' : 'down'}
        size={16}
        color={isExpanded ? AppColors.WHITE : AppColors.BTNCOLOURS}
      />
    </TouchableOpacity>
    {isExpanded && (
      <View style={styles.content}>
        <Text style={styles.text}>{item.content}</Text>
      </View>
    )}
  </View>
);

const FAQScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleItem = (index: any) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqData = Array(5).fill({
    title: 'Lorem Ipsum Dummy?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  });

  return (
    <FlatList
      data={faqData}
      keyExtractor={(_, index) => index.toString()}
      contentContainerStyle={styles.container}
      renderItem={({item, index}) => (
        <AccordionItem
          item={item}
          isExpanded={index === activeIndex}
          onPress={() => toggleItem(index)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: responsiveWidth(6),
    backgroundColor: '#fff',
  },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: responsiveHeight(1.5),
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(4),
    paddingVertical: responsiveHeight(2),
  },
  title: {
    fontSize: responsiveFontSize(2),
  },
  content: {
    backgroundColor: AppColors.BTNCOLOURS,
    paddingTop: 0,
    padding: responsiveFontSize(2),
  },
  text: {
    fontSize: 14,
    color: AppColors.WHITE,
  },
});

export default FAQScreen;
