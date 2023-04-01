import React from 'react';
import {
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {Colors} from '@/themes/Colors';

interface dataItem {
  id: string;
  name?: string;
}

const data: dataItem[] = [
  {id: '1', name: 'Vish Patil'},
  {id: '2', name: 'Rakesh Shetty'},
  {id: '3', name: 'Vish Patil'},
  {id: '4', name: 'Vish Patil'},
  {id: '5', name: 'Vish Patil'},
  {id: '6', name: 'Vish Patil'},
  {id: '7', name: 'Vish Patil'},
];

const ITEM_WIDTH = 90;
const ITEM_HEIGHT = 130;
const SPACING = 5;

const Carousel = () => {
  const renderItem: ListRenderItem<dataItem> = ({item}) => (
    <View style={styles.slide}>
      <View>
        <Image
          style={styles.image}
          source={{uri: `https://picsum.photos/id/${item.id}0/250/200`}}
        />
        {item.id !== '1' && (
          <View style={styles.avatarView}>
            <Image
              style={styles.avatar}
              source={{uri: `https://picsum.photos/id/${item.id}1/250/200`}}
            />
          </View>
        )}
      </View>
      {item.id !== '1' && <Text style={styles.name}>{item.name}</Text>}
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
        snapToInterval={ITEM_WIDTH}
        snapToAlignment="start"
        decelerationRate="fast"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 21,
    borderBottomWidth: 0.5,
    borderColor: Colors.border,
    paddingBottom: 15,
  },
  contentContainer: {
    // paddingHorizontal: SPACING,
    paddingLeft: 15,
  },
  slide: {
    marginRight: SPACING,
    alignItems: 'center',
  },
  image: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    borderRadius: 15,
  },
  name: {
    fontWeight: '400',
    fontSize: 10,
    color: Colors.black,
    marginTop: 12,
  },
  avatarView: {
    borderWidth: 2,
    borderRadius: 30,
    borderColor: Colors.primary,
    position: 'absolute',
    bottom: 0,
    right: '50%',
    transform: [{translateX: 12}, {translateY: 12}],
  },
  avatar: {
    width: 25,
    height: 25,
    borderRadius: 30,
  },
});

export default Carousel;
