import React from 'react';
import {Dimensions, FlatList, Image, StyleSheet, View} from 'react-native';

const {width: screenWidth} = Dimensions.get('window');

const data = [
  {id: '1', uri: 'https://picsum.photos/id/10/250/200'},
  {id: '2', uri: 'https://picsum.photos/id/20/250/200'},
  {id: '3', uri: 'https://picsum.photos/id/30/250/200'},
  {id: '4', uri: 'https://picsum.photos/id/40/250/200'},
];

const ITEM_WIDTH = screenWidth * 0.8;
const ITEM_HEIGHT = 200;
const SPACING = screenWidth * 0.2;

const TestCarousel = () => {
  const renderItem = ({item}) => (
    <View style={styles.slide}>
      <Image style={styles.image} source={{uri: item.uri}} />
    </View>
  );

  const keyExtractor = (item: {id: any}) => item.id;

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        snapToInterval={ITEM_WIDTH + SPACING}
        // snapToAlignment="center"
        decelerationRate="fast"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: ITEM_HEIGHT,
  },
  contentContainer: {
    paddingHorizontal: SPACING,
  },
  slide: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    marginHorizontal: SPACING / 2,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default TestCarousel;
