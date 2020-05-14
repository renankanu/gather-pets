import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {colors} from '../../../styles/commons-styles';
import dog1 from '../../../assets/images/dog1.jpeg';

const {width} = Dimensions.get('window');

export default function ListAnimals() {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.containerFlatList}
        keyExtractor={(item) => item.id}
        data={[1, 2, 3]}
        numColumns={2}
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.cardAnimal}>
              <Image style={styles.image} source={dog1} />
              <View style={styles.containerInfo}>
                <Text style={styles.title}>Ted, 2 years</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerFlatList: {
    marginHorizontal: 20,
  },
  cardAnimal: {
    marginBottom: 24,
    borderRadius: 5,
    width: (width - 70) / 2,
    marginHorizontal: 8,
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image: {
    resizeMode: 'stretch',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: '100%',
    height: 220,
  },
  containerInfo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -15,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.white,
    width: (width - 70) / 2,
  },
});
