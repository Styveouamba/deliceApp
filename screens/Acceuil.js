import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
// import PlatsDetails from './PlatsDetails';

const Acceuil = ({ navigation }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    const apiURL = 'https://www.themealdb.com/api/json/v1/1/categories.php';

    fetch(apiURL)
      .then((res) => res.json())
      .then((responseJson) => {
        setCategories(responseJson.categories);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('PlatsDetails', { category: item.strCategory })}
        style={styles.itemContainer}
      >
        <Image source={{ uri: item.strCategoryThumb }} style={styles.image} />
        <Text style={styles.itemTitle}>{item.strCategory}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <View style={{backgroundColor:'black', height:50,justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:'orange',fontSize:20}} >Acceuil</Text>
      </View>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.idCategory}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
    color:'black'
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 16,
    borderRadius: 25,
  },
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0',
  },
});

export default Acceuil;
