import React, {useEffect, useState} from "react";
import './App.css';
import Persona from "./components/Persona";

function App() {

  //Hook de estado
  const [estadoPersona, setEstadoPersona] = useState(false);
  var estado;  
  
  if(estadoPersona === true ){
    estado ="Persona Habilitada";
  }else{
    estado = "Persona Deshabilitada";
  }

  //Use Effect
  const [contador, setContar] = useState(0);

  useEffect(
      ()=>{
        console.log("Click numero:"+contador);
        
      } ,
      [contador]
  )

  const contar = () => {
    setContar(contador+1);
  }

  //const v_nombre = "Juan Jose";
  //const v_apellido = "Lopez Perez"
  const o_persona = {
      nombre: "Jose Perez",
      apellido: "Lopez Perez",
      edad: 20,
      nacionalidad : "Hondurena",
      genero : "M"
  };

  const f_saludar = (props) => {
    alert("Hola Humano, soy "+ props);
  }

  const f_habilitar = () =>{  
    setEstadoPersona(!estadoPersona); 
  }

  return (
    <div className="App">
      <header className="App-header">  

      <h2>La persona esta {estado}</h2>
      <button onClick={f_habilitar}>Cambiar</button>

      <button onClick={contar}>Contador</button>
      <h3> Click {contador}</h3>

      <Persona 
          personaInfo ={o_persona}
          fnsaludar = {f_saludar}
      />   

       
      </header>  
    </div>
  );
}

export default App;
