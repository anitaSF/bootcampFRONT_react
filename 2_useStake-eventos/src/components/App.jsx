import { useState } from "react";
import Register from "./Register/Register"
import './app.scss';

function App() {
  // Variables a utilizar en el html (return()) de este componente o de un componente importado (en este caso Register). 

  // Para que se muestre en el html o en el componente, cada variable se debe definir como atributo del elemento html o del componente. En caso de los componentes importados, el nombre del atributo se debe corresponder con la prop dada en el argumento de la function del componente. No tiene porque ser el mismo que la variable que lo aloja.
  // este caso los atributos del componente son <Register title={title} textMessage={message}>, y las props pasadas a la function Register ({ title, textMessage }), aunque la variable creadas sean "title" y "message" respectivamente (la segunda no es igual)

  const title = 'Registro de usuario';
  const message = {
    msg: 'Registro con éxito',
    error: 'Error al registrarse',
  };

  // Otro uso de las Variables de estado, es cuando el componente debe cambiar de estado, por ejemplo en este caso de aspecto, mediante cambio de clase css
  const [isLight, setIsLight] = useState(true);

  return (
    <>
      <section>
        <h1>Eventos</h1>
        <Register title={title} textMessage={message} setIsLight={setIsLight} ></Register>
      </section>
    </>
  )
}

export default App 
