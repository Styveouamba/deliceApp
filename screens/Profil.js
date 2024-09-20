import { View, Text, StyleSheet,Image,TouchableOpacity} from 'react-native'
import React from 'react'

const Profil = () => {
  return (
    <View>
        

        <View style={styles.Img}>
          <Image style={styles.picture} 
          source={require('../Images/1.jpeg')}/>
        </View>
        <View>
          <Text style={styles.title}>Profil</Text>
        </View>

        <View style={styles.main}>
          <TouchableOpacity style={styles.detail}>
            <Text style={styles.desc}>Mon compte</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.detail}>
            <Text style={styles.desc}>Confidentialité et vie privée</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.detail}>
            <Text style={styles.desc}>Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.detail}>
            <Text style={styles.desc}>Inviter un contact</Text>
          </TouchableOpacity>
        </View>
    </View>
    
  )
}

const styles=StyleSheet.create({
  title:{
    fontSize:30,
    textAlign:'center',
    marginBottom:35,
    marginTop:-28,
    color:"#3c4b64",
    fontWeight:"bold",
  },
  picture:{
    width:140,
    height:'45%',
    marginLeft:10,
    borderRadius:100
  },
  Img:{
    justifyContent:'center',
    alignItems:'center',
  },
  main:{
    width:'110%',
    height:'30%',
    alignItems:'center',
    
  },
  detail:{
    width:'80%',
    height:'20%',
    backgroundColor:'#fff',
    shadowColor:'#000',
    elevation:10,
    borderRadius:15,
    marginRight:30,
    margin:16
  },
  desc:{
    color:'#000',
    lineHeight:20,
    padding:5,
    fontSize:18,
    textAlign:'center'
  }
})

export default Profil