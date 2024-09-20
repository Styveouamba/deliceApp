// DetailsScreen.js

import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Linking, Button, FlatList, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next'

const Details = ({ route }) => {
  const { id } = route.params;
  const [recipeDetails, setRecipeDetails] = useState(null);
  const { t } = useTranslation();


  const fetchRecipeDetails = async () => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await response.json();
      if (data.meals && data.meals.length > 0) {
        const meal = data.meals[0];
        // Mettez à jour l'état avec les détails de la recette
        setRecipeDetails(meal);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des détails de la recette :', error);
    }
  };

  useEffect(() => {
    fetchRecipeDetails();
  }, []);

  if (!recipeDetails) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={{ color: 'black' }}>Chargement des détails...</Text>
      </View>
    );
  }

  // Récupérez les ingrédients de la recette
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredientKey = `strIngredient${i}`;
    const measureKey = `strMeasure${i}`;
    if (recipeDetails[ingredientKey]) {
      ingredients.push({ ingredient: recipeDetails[ingredientKey], measure: recipeDetails[measureKey] });
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: recipeDetails.strMealThumb }} style={styles.image} />
      <Text style={styles.title}>{recipeDetails.strMeal}</Text>
      <Text style={styles.category}>Catégorie : {recipeDetails.strCategory}</Text>
      <View style={styles.ingredientsContainer}>
        <Text style={{color:'black'}}>Ingrédients :</Text>
        <FlatList
          data={ingredients}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Text style={styles.ingredient}>{`${item.ingredient} - ${item.measure}`}</Text>
          )}
        />
      </View>
      <Text style={styles.instructions}>{recipeDetails.strInstructions}</Text>


      <Button
        title="Vidéo YouTube"
        onPress={() => {
          Linking.openURL(recipeDetails.strYoutube);
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 16,

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color:'black'
  },
  category: {
    fontSize: 16,
    color: '#888',
    marginBottom: 16,
  },
  instructions: {
    fontSize: 16,
    lineHeight: 24,
    color:'black'
  },
  video:{
    fontSize: 16,
    lineHeight: 24,
    color:'blue'
  },
  ingredient:{
    color:'black',
  },
  ingredientsContainer:{
    marginBottom:20
  }
});

export default Details;
