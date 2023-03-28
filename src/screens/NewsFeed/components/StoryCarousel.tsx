import React, {useState} from 'react';
import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import {NativeScrollEvent} from 'react-native/Libraries/Components/ScrollView/ScrollView';
import {NativeSyntheticEvent} from 'react-native/Libraries/Types/CoreEventTypes';

const {width: screenWidth} = Dimensions.get('window');

interface storyItem {
  images?: any;
}

type storyItems = storyItem[];

const Carousel = ({storyItem}: any) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const currentIndex = event.nativeEvent.contentOffset.x / slideSize;
    setActiveIndex(currentIndex);
  };

  console.log('storyItem', storyItem);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}>
        {storyItem.map((image, index) => (
          <View style={styles.slide} key={index}>
            {image}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 300,
    marginBottom: 20,
  },
  slide: {
    width: screenWidth,
    height: 300,
  },
});

export default Carousel;
