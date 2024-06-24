import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Select from "./Select/Select"
import ListCharacter from "./ListCharacter/ListCharacter";
import CharacterDetail from "./CharacterDetail/CharacterDetail";

function App() {
  const [house, setHouse] = useState('Gryffindor'); // Variable de estado para alojar el valor seleccionado en el elemento <select></select> definido en el componente importado <Select />. Se le ha dado el valor "Gryffindor" para que por defecto salgan los personajes de esta casa hasta que el usuario seleccione otra y varíe el valor de la variable

  const [listCharacter, setListCharacter] = useState([]);
  // Variable de estado para alojar el array de personajes importado mediante la petición a la API. Debe ser un array vacío para que se llene con los objetos (item/personajes) importados de la API

  // Petición API tipo AXIOS con "useEeffect" 
  // Las peticiones de tipo AXIOS reciben siempre los datos en un objeto con igual estructura y no necesitan método .json para convertir la información. Los datos para trabajar siempre están dentro de la propiedad "data" por lo tanto para acceder a ellos será (response.data). 
  // La función de React "useEffect" permite definir las veces que se ejecuta entre los corchetes del segundo valor []. En este caso en vez de dejarla vacía para que se ejecute una vez, se pone la variable de estado "house", de forma que la petición a la API se ejecutará cada vez que la variable "house" reciba un nuevo valor
  useEffect(() => {
    axios(`https://hp-api.onrender.com/api/characters/house/${house}`).then(
      (response) => {
        console.log(response);
        setListCharacter(response.data);
      }
    )
  }, [house]);

  return (
    <>
      <h1>Listado de personajes de Harry Potter</h1>
      {/* Elemento html que hará que se renderice el contenido del componente seleccionado mediante el enlace del Header. Por ello este componente <Header /> queda fuera, pues será el mismo, se renderice un componente u otro pues es un elemento común a toda la web */}
      <Routes>

        {/* Los componentes se importan encerrados en el elemento html que define su ruta <route path="nombreComponente" element={<nombreComponente />}. la ruta (path) de la hone siempre sera "/" ya que es la pñagina de inicio y está en la raíz del servidor */}
        <Route path="/" element={
          <main>
            <Select setHouse={setHouse} />
            <ListCharacter listCharacter={listCharacter} />
          </main>}
        />
        {/* Para renderizar más de un componente en una ruta, en el atributo de <Route element=""> se deben de englobar en un mismo elemento html, por ejemplo <main> */}

        <Route path="/detail/:idCharacter" element={<CharacterDetail listCharacter={listCharacter} />} ></Route>
        {/* Ruta dinámica para mostrar el componente "CharacterDetail" del item que se clica, para lo que se define en el atributo path con : delante que estará relacionado con la propiedad "id" de cada item
        Para pasar los items y sus propiedades del array "listCharacter" al componente importado "CharacterDetail" donde se define la estructura html, se da el elemento thml <CharacterDetail /> el atributo listCharacter={listCharacter} que se pasa como props a la función del componente */}

      </Routes>
    </>
  )
}

export default App 
