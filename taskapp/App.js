/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useEffect, useState } from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View, Button,
   ImageBackground
 } from 'react-native';
 
 import peliculas from "./Componentes/Tarea";
 
 export default function App(){
 
 const [listaPeliculas, setPeliculas] = useState([
 {id:1, titulo : "Clockwork orange", descripcion :"Director Stanley Kubrick"},
 {id:2, titulo : "Inglourious Basterds", descripcion :"Director Quentin Tarantino"},
 {id:3, titulo : "Inception", descripcion :"Director Christopher Nolan"},
 ]);
 
 const [nuevaPelicula,addPelicula ] = useState(false);
 useEffect( ()=>{
 if(nuevaPelicula === true){
   listaPeliculas.push({id:4, titulo : "Pelicula X+1", descripcion :"Película agregada a la lista"});
 
 }
 addPelicula(false);
 
 },
 [nuevaPelicula])
 
 const agregarPelicula =() =>{
   addPelicula(true);
 }
 
   return(
 
     <SafeAreaView>
       
 
 
       <Button style={styles.btn} title="Nueva Pelicula" color="#FF5733" onPress={agregarPelicula}></Button>
       <ScrollView>
 
       {
        listaPeliculas.map((item,index)=> (
        <pelicula data={item}/>
 
   ))
 
       }
       </ScrollView>
     </SafeAreaView>
 
 
 
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
   highlight: {
     fontWeight: '700',
   },
   titulo:{
     fontSize: 100,
     fontWeight: '600',
 
   },
   btn:{
 marginTop:8,
 marginLeft:8,
 marginRight:8
 
   }
 }
 );