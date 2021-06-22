import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';
export default function Movie(props){
    const {data} = props;
    const {id = 0, Nom = nombre, Año = Año, Genero = Genero} = data;

    return(
        <View style={estilos.contenedor}>
            <Text style= {estilos.titulo}>{"Nombre de la pelicula:"}</Text>
            <Text style= {estilos.descripcion}>{Nom}</Text>
            <Text style= {estilos.titulo}>{"Año de estreno:"}</Text>
            <Text style= {estilos.descripcion}>{Año}</Text>
            <Text style= {estilos.titulo}>{"Genero:"}</Text>
            <Text style= {estilos.descripcion}>{Genero}</Text>
            </View>
    )
}

const estilos = StyleSheet.create({
    contenedor:{
        width:'95%',
        height:195,
        padding:10,
        marginLeft:8,
        marginRight:8,
        margin:8,
        marginBottom:8,
        marginTop:8,
        borderRadius:10,
        backgroundColor:'#154360'
    },
    titulo:{
        fontSize:18,
        fontWeight:'500',
        color:'white'
    },
    descripcion: {
        fontSize: 15,
        fontWeight: '600',
        color:'#FFC300'
      },
       logo: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        left:150
    }
})