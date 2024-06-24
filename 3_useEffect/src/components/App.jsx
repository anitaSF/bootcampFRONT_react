import { useEffect, useState } from "react";
import ListProduct from "./ListProduct/ListProduct";
import Filters from "./Filters/Filters";
import FilterCategory from "./FilterCategory/FilterCategory";
import Product from "./Product/Product";


function App() {
  const [listProduct, setListProduct] = useState([]); // Variable de estado creada para alojar los datos importados de la peticion a la API. Es otro uso de este tipo de variables, siempre que se haga una petición fetch a una API se alojará en una variable de estado.

  const [search, setSearch] = useState(''); // Variable de estado para alojar el contenido introducido en el formulario de búsqueda definido en el componente "Filter" importado. Su valor es un string vacío ya que tomará el valor introducido por el usuario en el formulario pintado en el componente importado

  const [filterCategory, setFilterCategory] = useState('');
  // Variable de estado para alojar el valor seleccionado en el formulario a traves del elemento html <select></select> del componente importado "FilterCategory". Este valor se pasa cuando le llega contenido a la función de la variable "setFilterCategory" a través del evento onChange aplicado al elemento <select></select> y su función manejadora "handleSelect"

  const [newProduct, setNewProduct] = useState({
    category: '',
    title: '',
    price: '',
    image: '',
  });
  // Variable creada para alojar los datos introducidos en el formulario de creacion de nuevo objeto defijido en el componente importado <Product />. El nuevo objeto creado deberá tener la misma estructura que el resto de items del array "listProduct" importado de la API al que se va a añadir. 
  // Pero para añadir el item se necesita una función auxiliar que haga una copia de este objeto y otra función que modifique el array original (las variables de estado que alojan arrays u objetos requieren este proceso más complejo para modificarse). 


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
  // 2. Filtra los item (product) cuya propiedad "product.category" coincida con el contenido de la variable de estado "filterCategory" que proviene del select definido en el componente hijo "FilterCategory". Además, para que aparezcan todos los productos si no se selecciona categoría, se ha definido un condicional: if {si hay seleccion de categoria (se activa el evento onChange del select) devuelve (return) los items con la propiedad product.category que coincida con la selección}; else {si no hay selección de categoría, devuelve (return) todos los items (true)} 
  const getDataFiltered = () => {
    const filteredProducts = listProduct.filter((product) => product.title.toLowerCase().includes(search.toLocaleLowerCase())
    )
      .filter((product) => {
        if (filterCategory) {
          return product.category === filterCategory;
        } else {
          return true;
        }
      });
    return filteredProducts; // Esta función requiere método return para que devuelva el nuevo array creado solo con estos item filtrados, que igualmente se alojarán en la variable de estado filteredProducts (ya que las variables de estado pueden estar cambiando su contenido todo el rato). De este modo, al pasar como atributo del elemento html la función ejecutada "getDataFiltered(", solo se pintarán los items filtrados
  };


  const changeNewProduct = (key, value) => {
    setNewProduct({ ...newProduct, [key]: value });
  }; // Funcion auxiliar para crear una copia del nuevo producto (objeto) insertado a través del formulario definido en el componente importado <Product /> y poderlo despues añadir al array original alojado en la variable "listProduct".
  // Para ello esta función, crea una copia del nuevo objeto creado para lo cual necesita como parámetros el "key" del nuevo item y su valor (key,value). Coomo código a ejecutar se llama la función de la variable de estado a copiar "setNewProduct", y se crea una nueva variable (...newProudct) con el contenido del objeto con la key definida en el parámetro. Hay que utilizar el spreed operator "..." para que haga la copia sustituyendo los spring vacios del objeto definido en la variable de estado por los datos introducidos en el formulario
  // Esta función creada para la copia será la que se llame en el elemento html importado <Product /> como atributo, en vez de llamar a la función de la variable de estado como en el resto de casos

  const addNewProduct = () => {
    setListProduct
  };
  // Función para modificar la variable de estado "listProduct" y añadirle el nuevo item (objeto) copiado en la primera función auxiliar "changeNewProduct". Para ello se debe ejecutar igualmente un spreed operator sobre el array original "listProduct"


  return (
    <>
      <h1>Online Store</h1>
      {/* Elemento html para importar el componente Product con el formulario para añadir un nuevo prodcto. La estructura html del fornulario corresponde con la del objeto (cada input recoge una propiedad) Como atributo se define la variable de estado que alojará el nuevo item (objeto al array) introducido en el formularios */}
      <Product changeNewProduct={changeNewProduct} />

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
