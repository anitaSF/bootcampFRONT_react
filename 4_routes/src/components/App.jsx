import { Route, Routes } from "react-router-dom"; // Módulo requerido para trabajar con rutas internas al proyecto

import Header from "./Header/Header";
import Home from './Home/Home';
import Register from './Register/Register';
import NotFound from "./NotFound/NotFound";

function App() {

  return (
    <>
      <Header />
      {/* Elemento html que hará que se renderice el contenido del componente seleccionado mediante el enlace del Header. Por ello este componente <Header /> queda fuera, pues será el mismo, se renderice un componente u otro pues es un elemento común a toda la web */}
      <Routes>

        {/* Los componentes se importan encerrados en el elemento html que define su ruta <route path="nombreComponente" element={<nombreComponente />}. la ruta (path) de la hone siempre sera "/" ya que es la pñagina de inicio y está en la raíz del servidor */}
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />

        {/* Ruta definida para renderizar el componente "NotFound" de "página no encontrada" que debe crearse en todos los sitios web para mostrarse en caso de que un usuario escriba una url errónea evitar que se rompa la web. Como parámetro para la url que recibe, se define "*" que asume cualquier valor introducido */}
        <Route path='*' element={<NotFound />} />

      </Routes>
    </>
  );
}

export default App 
