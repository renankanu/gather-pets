import React, {useEffect} from 'react';
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
import {useDispatch, useSelector} from 'react-redux';
import {updateAnimalCategories} from '../../../store/modules/animal/actions';

export default function ListCategory() {
  const {animalsCategory} = useSelector((state) => state.animal);
  const dispatch = useDispatch();

  const selectCategory = (id) => {
    let newArrayCategory = animalsCategory.map((itemCategory) => {
      return itemCategory.id === id
        ? {...itemCategory, isSelected: true}
        : {...itemCategory, isSelected: false};
    });
    dispatch(updateAnimalCategories(newArrayCategory));
  };

  return (
    <View>
      <FlatList
        contentContainerStyle={styles.containerFlatList}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={animalsCategory}
        horizontal
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                selectCategory(item.id);
              }}>
              <View style={styles.constainer}>
                <Text
                  style={[
                    styles.titleCategory,
                    item.isSelected
                      ? {color: colors.white}
                      : {color: colors.textPrimaryColor},
                  ]}>
                  {item.name}
                </Text>
                <Spacer value={10} />
                {item.isSelected ? (
                  <View style={styles.markerSelected} />
                ) : (
                  <View
                    style={[
                      styles.markerSelected,
                      {backgroundColor: colors.secundaryColor},
                    ]}
                  />
                )}
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
  markerSelected: {
    height: 4,
    width: 60,
    borderRadius: 40,
    marginHorizontal: 6,
    backgroundColor: colors.yellowHeader,
  },
});
