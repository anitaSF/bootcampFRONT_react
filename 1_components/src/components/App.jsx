import './App.scss' // Para asociar una hoja de estilo a un componente se debe importar
import Button from './Button';
import Card from './Card';

// El código js se escribe directamente dentro de las llaves de la function NombreComponente y el código html dentro del return (): function NombreComponente() {js return (html)}
function App() {
  const name = 'Petra';
  const mascota1 = {
    name: 'fifi',
    age: 6,
    img: 'https://live-mascotas-sanas-duenos-felices-blogs.cphostaccess.com/_Assets/img/181129-Imagen-AlimentacionMascotas.jpg'
  }


  return (
    // Para introducir más de un elemento html en el return () se deben agrupar entre las etiquetas <> </>
    <>
      <section>

        <h1 className="title">Bienvenida {name}</h1>
        <p className="paragraph">La mascota </p>

        {/* Para utilizar un componente en otro, se llama como un elemento html. Como generalmente los componentes tienen valor dinámico, el valor se le da mediante un atributo cuyo nombre equivale a la propiedad (props) de la variable dada al componente (props.text).
        Pero el valor de la variable deberá ser definido en el componente padre, en este caso "const name = 'Petra'" */}
        <Button text="Saludame" />
        <Button text="Register" />

        {/* Para utilizar componentes con estructura html más compleja, con más propiedades (son objetos) se llaman igualmente por la propiedad definida en el objeto (props.data) pero el valor al ser una variable array se escribe entre {} 
        Pero la infomración, es decir variables, mostrada por el componente importado debe estar definida en la function del componente padre, en este caso el objeto "const = mascota1 = {name: x, age = 0, img = 'url'}" y cada propiedad será utilizada en el componente hijo para dar valor a un elemento html creado
        */}
        <Card data={mascota1}></Card>

      </section>
    </>
  )
}

export default App // Todos los componenetes se deben exportar para poder ser utilizados desde cualquier página del proyecto web
