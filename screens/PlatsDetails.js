// PlatsParCategorie.js

import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';

const PlatsDetails = ({ route,navigation }) => {
  const { category } = route.params;
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetchMealsByCategory();
  }, []);

  const fetchMealsByCategory = () => {
    const apiURL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;

    fetch(apiURL)
      .then((res) => res.json())
      .then((responseJson) => {
        setMeals(responseJson.meals);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const renderItem = ({ item }) => {
    return (
    <View>
        <TouchableOpacity
            onPress={() => navigation.navigate('Details', { id: item.idMeal })}
            style={styles.itemContainer}>
            <Image source={{ uri: item.strMealThumb }} style={styles.image} />
            <Text style={styles.itemTitle}>{item.strMeal}</Text>
        </TouchableOpacity>
    </View>
    );
  };
  

  return (
    <SafeAreaView>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.idMeal}
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
  image: {
    width: 100,
    height: 100,
    borderRadius: 25,
    marginRight: 16,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'black'
  },
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0',
  },
});

export default PlatsDetails;
