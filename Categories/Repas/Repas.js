import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Text, SafeAreaView, TextInput, Image, TouchableOpacity,ActivityIndicator } from 'react-native';
const Repas = ({navigation}) => {
  const [filterData, setFilterData] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    fetchPost();
  }, []);
  const fetchPost = () => {
    const apiURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(apiURL)
      .then((res) => res.json())
      .then((responseJson) => {
        setFilterData(responseJson.meals); // En supposant que la réponse de l'API contient une propriété "meals"
        setMasterData(responseJson.meals);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const searchFilter = (text) => {
    if (text) {
      const newData = masterData.filter((item) => {const itemData = item.strMeal ? item.strMeal.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;});
      setFilterData(newData);
      setSearch(text);
    }else {
      setFilterData(masterData);
      setSearch(text);}
  };
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Details', {id: item.idMeal})} style={styles.itemContainer}>
        <Image source={{ uri: item.strMealThumb }} style={styles.image} />
        <Text style={styles.itemTitle}>{item.strMeal}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView>
      <View>
        <TextInput style={styles.textInput} value={search} placeholder="Rechercher..." onChangeText={(text) => searchFilter(text)}/>
        <FlatList data={filterData} keyExtractor={(item) => item.idMeal} renderItem={renderItem} ItemSeparatorComponent={() => <View style={styles.separator} />}/></View></SafeAreaView>
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
    marginRight: 16,
    borderRadius: 25,
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
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 16,
    paddingHorizontal: 8,
    color:'black'
  },
});

export default Repas;
