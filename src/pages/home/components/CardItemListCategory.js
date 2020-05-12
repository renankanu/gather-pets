import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {colors, commonsStyle} from '../../../styles/commons-styles';
import Spacer from '../../../components/Spacer';
import fonts from '../../../styles/fonts';

const INITIAL_CATEGORY = [
  {id: 1, name: 'All', image: '', isSelected: true},
  {id: 2, name: 'Dogs', image: '', isSelected: false},
  {id: 3, name: 'Cats', image: '', isSelected: false},
  {id: 4, name: 'Birds', image: '', isSelected: false},
  {id: 5, name: 'Reptile', image: '', isSelected: false},
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
              <View style={styles.constainer}>
                <View style={styles.containerCard}>
                  <Image />
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
  },
  containerCard: {
    backgroundColor: colors.yellowHeader,
    marginHorizontal: 6,
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  titleCategory: {
    fontFamily: fonts.BOLD,
    color: colors.black,
  },
});
