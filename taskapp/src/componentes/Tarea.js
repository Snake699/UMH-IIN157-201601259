import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

export default function pelicula(props){
const {data} = props;
const {id=0,titulo = "Titulo de la película", descripcion ="Director desconocido"} = data;

    return(
<Image source={require('imagen.png')}  style={styles.backgroundImage}></Image>/    
 <View style={estilos.contenedor}> 
<Text style={estilos.titulo} >{titulo}</Text>
<Text style={estilos.descripcion}>{descripcion}</Text>
 </View>
    )
}
const estilos = StyleSheet.create({
contenedor:{
width: '95%',
height:150,
padding:8,
marginLeft:8,
marginRight:8,
margin:8,
marginBottom:8,
marginTop:8,
borderRadius:9,
backgroundColor:'#54A1F0'
},
titulo:{
    fontSize: 18,
    fontWeight: '500',
},

descripcion:{
  fontSize: 18,
  fontWeight: '500',
}
}
);