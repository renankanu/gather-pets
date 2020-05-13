import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../../styles/commons-styles';
import Spacer from '../../../components/Spacer';
import fonts from '../../../styles/fonts';
import all from '../../../assets/images/all.png';
import dog from '../../../assets/images/dog.png';
import cat from '../../../assets/images/cat.png';
import bird from '../../../assets/images/bird.png';
import reptile from '../../../assets/images/reptile.png';
import allDisable from '../../../assets/images/allDisable.png';
import dogDisable from '../../../assets/images/dogDisable.png';
import catDisable from '../../../assets/images/catDisable.png';
import birdDisable from '../../../assets/images/birdDisable.png';
import reptileDisable from '../../../assets/images/reptileDisable.png';

const INITIAL_CATEGORY = [
  {id: 1, name: 'All', image: all, imageDisable: allDisable, isSelected: true},
  {
    id: 2,
    name: 'Dogs',
    image: dog,
    imageDisable: dogDisable,
    isSelected: false,
  },
  {
    id: 3,
    name: 'Cats',
    image: cat,
    imageDisable: catDisable,
    isSelected: false,
  },
  {
    id: 4,
    name: 'Birds',
    image: bird,
    imageDisable: birdDisable,
    isSelected: false,
  },
  {
    id: 5,
    name: 'Reptile',
    image: reptile,
    imageDisable: reptileDisable,
    isSelected: false,
  },
];

export default function CardItemListCategory() {
  const [listCategories, setListCategories] = useState(INITIAL_CATEGORY);

  const selectCategory = (id) => {
    let newArrayCategory = listCategories
      .map((itemCategory) => {
        itemCategory.isSelected = false;
        return itemCategory;
      })
      .map((subItemCategory) => {
        return subItemCategory.id === id
          ? {...subItemCategory, isSelected: true}
          : subItemCategory;
      });
    setListCategories(newArrayCategory);
  };

  return (
    <View>
      <FlatList
        contentContainerStyle={styles.containerFlatList}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={listCategories}
        horizontal
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                selectCategory(item.id);
              }}>
              <Spacer value={4} />
              <View style={styles.constainer}>
                <View
                  style={[
                    styles.containerCard,
                    item.isSelected
                      ? {backgroundColor: colors.yellowHeader}
                      : {backgroundColor: colors.white},
                  ]}>
                  <Image
                    style={styles.image}
                    source={item.isSelected ? item.image : item.imageDisable}
                  />
                </View>
                <Spacer value={6} />
                <Text
                  style={[
                    styles.titleCategory,
                    item.isSelected
                      ? {color: colors.black}
                      : {color: colors.textPrimaryColor},
                  ]}>
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  constainer: {
    alignItems: 'center',
  },
  containerFlatList: {
    marginHorizontal: 16,
    paddingRight: 24,
  },
  containerCard: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 6,
    width: 80,
    height: 80,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  titleCategory: {
    fontFamily: fonts.BOLD,
    color: colors.black,
  },
  image: {
    width: 60,
    height: 60,
  },
});
