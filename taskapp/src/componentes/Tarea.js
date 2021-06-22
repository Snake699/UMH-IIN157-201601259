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

export default function Tarea(props){
const {data} = props;
const {id=0,titulo = "Titulo de Tarea", descripcion ="Sin descripcion"} = data;

    return(
 <View style={estilos.contenedor}> 
<Text style={estilos.titulo} >{titulo}</Text>
<Text style={estilos.descripcion}>{descripcion}</Text>
 </View>
    )

}

const estilos = StyleSheet.create({
contenedor:{
width: '95%',
height:140,
padding:8,
marginLeft:8,
marginRight:8,
margin:8,
marginBottom:8,
marginTop:8,
borderRadius:10,
backgroundColor:'#54A1F0'
},
titulo:{
    fontSize: 22,
    fontWeight: '500',

},

descripcion:{
  fontSize: 20,
  fontWeight: '500',

}


});