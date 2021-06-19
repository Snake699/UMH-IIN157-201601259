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

export default function Tarea(prop){

const {titulo = "Titulo de Tarea", descripcion ="Sin descripcion"} = props;

    return(
 <View style={SectionList.contenedor}> 
<Text style={estilos.titulo} >{titulo}</Text>
<Text style={estilos.descripcion}>{descripcion}</Text>
 </View>
    )

}

const estilos = StyleSheet.create({
contenedor:{
width: '100',
height:50,
padding:5,
borderRadius:5

},
titulo:{
    fontSize: 18,
    fontWeight: '500',
}



});