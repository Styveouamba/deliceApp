import { View, Text,Image,StyleSheet,ScrollView } from 'react-native'
import React from 'react'

const ImageCarousel = () => {
  return (
    <ScrollView horizontal={true} style={styles.carousel}>
        <Image style={styles.image}
            source={require('../Images/1.jpeg')}/>
        <Image style={styles.image}
            source={require('../Images/2.jpeg')}/>
        <Image style={styles.image}
            source={require('../Images/3.jpeg')}/>
        <Image style={styles.image}
            source={require('../Images/4.jpeg')}/>
        <Image style={styles.image}
            source={require('../Images/5.jpeg')}/>
        <Image style={styles.image}
            source={require('../Images/6.jpeg')}/>
        <Image style={styles.image}
            source={require('../Images/7.jpeg')}/>
    </ScrollView>
)
}
const styles = StyleSheet.create({
    image:{
        height:250,
        width:180,
        borderRadius:20,
        margin:5
    },
    carousel:{
        marginTop:20
    }
})

export default ImageCarousel