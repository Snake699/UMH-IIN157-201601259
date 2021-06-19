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
height:120,
padding:10,
marginLeft:10,
marginRight:10,
margin:10,
marginBottom:10,
marginTop:10,
borderRadius:11,
backgroundColor:'#0FBC33'
},
titulo:{
    fontSize: 18,
    fontWeight: '500',

},

descripcion:{
  fontSize: 18,
  fontWeight: '500',

}


});