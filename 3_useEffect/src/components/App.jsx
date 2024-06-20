import { useEffect, useState } from "react";
import ListProduct from "./ListProduct/ListProduct";
import Filters from "./Filters/Filters";
import FilterCategory from "./FilterCategory/FilterCategory";


function App() {
  const [listProduct, setListProduct] = useState([]); // Variable de estado creada para alojar los datos importados de la peticion a la API. Es otro uso de este tipo de variables, siempre que se haga una petición fetch a una API se alojará en una variable de estado.

  const [search, setSearch] = useState(''); // Variable de estado para alojar el contenido introducido en el formulario de búsqueda definido en el componente "Filter" importado. Su valor es un string vacío ya que tomará el valor introducido por el usuario en el formulario pintado en el componente importado

  const [filterCategory, setFilterCategory] = useState('');
  // Variable de estado para alojar el valor seleccionado en el formulario a traves del elemento html <select></select> del componente importado "FilterCategory". Este valor se pasa cuando le llega contenido a la función de la variable "setFilterCategory" a través del evento onChange aplicado al elemento <select></select> y su función manejadora "handleSelect"

  // UseEffect: Función propia de React (Hook) para ejecutar un determinado código (for, if, peticiones al servidor, ejecutar una función, cambiar variable estado), un determinado número de veces.
  // La función se compone de estos dos elementos: useEffect(() => {código a ejecutar}, [veces que se ejecuta]). Si el segúndo valor [repeticiones] está vacío, solo tiene una repetición
  useEffect(() => {
    // petición fetch para importar datos desde una API
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json()) // Recoge los datos de la petición y los traduce a lenguaje .json legible por js
      .then((data) => {
        console.log(data);
        setListProduct(data);
      }); // Utiliza los datos recogidos de la API y ejecuta el código definido en su interior, en este caso ejecutar la función setListProduct correspondiente a la variable de estado listProduct creada para alojar la información. Al ejecutar su función pasa esta información
  }, []);

  // Función para devolver los resultados (items) de la búsqueda realizada en el componente Filters. Se ejecuta el método array .filter sobre "listProduct", que crea un nuevo array con los items (product) que cumplan la condición incluida en el callback.
  // En este cas se han aplicado dos filtros encadenados:
  //1. Filtrará los item importados de la API cuya propiedad "title" incluya/coincida con el valor de la variable de estado search (valor introducido por el usuario en el formulario Filters). Para ello, se aplica otro método array .includes: arrayName.propName.includes(useState), en este caso product.title.includes(search)
  // Tambien se ha ejecutado el método .toLowerCase sobre ambos valores para convertirlos a mayúscula y que la comparación sea de igual a igual
  // 2. Filtra los item (product) cuya propiedad "product.category" coincida con el contenido de la variable de estado "filterCategory" que proviene del select definido en el componente hijo "FilterCategory"
  const getDataFiltered = () => {
    const filteredProducts = listProduct.filter((product) => product.title.toLowerCase().includes(search.toLocaleLowerCase())
    )
      .filter((product) => product.category === filterCategory);

    return filteredProducts; // Esta función requiere método return para que devuelva el nuevo array creado solo con estos item filtrados, que igualmente se alojarán en la variable de estado filteredProducts (ya que las variables de estado pueden estar cambiando su contenido todo el rato). De este modo, al pasar como atributo del elemento html la función ejecutada "getDataFiltered(", solo se pintarán los items filtrados
  };

  return (
    <>
      <h1>Online Store</h1>
      {/* Elemento html para importar el componente Filters con el formulario search. Como atributo se define la variable de estado que alojará el valor introducido por el usuario para la búsqueda. Esta variable se pasa al componente importado como props para enlazarlos ya que contiene el formulario de búsqueda */}
      <Filters setSearch={setSearch} />

      {/* Elemento html para importar el componente FilterCategory donde está definido el formulario para selecionar la categoría de productos a mostrar. Para enviar a este componente hijo importado la variable de estado "filterCategory" creada para alojar el contenido filtrado por el <select></select> definido en su html, se llama a su función "setFilterCategory" como atributo del este elemento html y se incluye en el argumento de la función del elemento hijo como props  */}
      <FilterCategory setFilterCategory={setFilterCategory} />

      {/* Elemento html para importar el componente ListProduct donde está definida la estructura html asociada al contenido de cada item importado de la API. Por ello como atributo se le da la variable de estado que contiene esta información, que se pasará como props a este componente hijo como argumento de su function
      En este caso se ha modificado el atributo, en vez de alojar directamente la variable "listProduct", se ejecuta la función creada para alojar el array obtenido con el método .filter() sobre esta variable, que al final retorna el array filtrado (return filteredProduct)  */}
      <ListProduct listProduct={getDataFiltered()} />
    </>
  )
}

export default App 
