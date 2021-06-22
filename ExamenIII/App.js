
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TextInput,
  Image,
  Alert
} from 'react-native';
import Movie from './src/componentes/Movie';


function App(){
  const [nombre, setNombre] = useState(0);
  const [Año, setAño] = useState(0);
  const [Genero, setGenero] = useState(0);

  const [listaMovie, setMovie] = useState( [
  {id:0, Nom : "", Año : "", Genero : ""}
  
]);

  const [nuevoMovie, addMovie] = useState(false);

  useEffect( () => {
    if(nuevoMovie === true){
      listaMovie.push({id:1, Nom : nombre, Año : Año, Genero : Genero});
    }
    addMovie(false);
  },[nuevoMovie])

  const agregarMovie = () => {
    addMovie(true);
    Alert.alert(
      "Nueva Pelicula",
      "Se Agregó Pelicula exitosamente",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  }
  const limpiar = () =>{
    setNombre(0);
    setAño(0);
    setGenero(0);

  }

  return(
    <>
    <SafeAreaView style={styles.fondo}>
      <Image
          style={styles.logo}
          source={require("./pelicula.png")}
        />
    <Text style={styles.sectionDescriptionTop}>Nombre de Pelicula:</Text>
      <TextInput
      style={styles.input}
      placeholder="Escriba Nombre de la Pelicula"
      value={nombre}
      onChangeText={(newValue)=> setNombre(newValue)}
      ></TextInput>

      <Text style={styles.sectionDescriptionTop}>Año de Estreno:</Text>
      <TextInput
      style={styles.input}
      placeholder="Escriba el año de la pelicula"
      keyboardType='numeric'
      value={Año}
      onChangeText={(newValue)=> setAño(newValue)}></TextInput>

      <Text style={styles.sectionDescriptionTop}>Genero:</Text>
      <TextInput
      style={styles.input}
      placeholder="Escriba el Genero de la Pelicula"
      value={Genero}
      onChangeText={(newValue)=> setGenero(newValue)}
      >
      </TextInput>
      <Button styles={styles.boton} title="Agregar Pelicula" color="#7FB3D5"onPress={agregarMovie}></Button>
      <Button styles={styles.boton} title="Limpiar" color="#2980b9" onPress={limpiar}></Button>
      </SafeAreaView>
      <ScrollView style={styles.fondoScroll}>
        {
          listaMovie.map( (item,index) => (
                <Movie data={item}/>
          ))
        }

      </ScrollView>
      </>

  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  sectionDescriptionTop: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: "white"
  },
  highlight: {
    fontWeight: '700',
  },
  titulo: {
    fontSize: 100,
    fontWeight: '600',
  },
  boton:{
    marginTop:8,
    marginLeft:8,
    marginRight:8,
    borderRadius:8

  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 270,
    height: 130,
    left:80
},
fondo: {
  backgroundColor: "#BB8FCE"
},
fondoScroll: {
  backgroundColor: "#BB8FCE"
},
input:{
  height: 40,
margin: 12,
borderWidth: 1,
backgroundColor:"white"
},

});

export default App;