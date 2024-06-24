import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="register">Registro</Link></li>
                    <li>Login</li>
                    <li>Mi perfil</li>
                    <li>Detalle</li>
                    {/* Cada elemento del menú es un elemento enlace router <Link> (al trabajar con rutas internas no se puede utilizar el elemento <a></a>). El atributo para definir el destino del enlace es to="nombreComponente". El valor del atributo "to" debe coincidir con el valor del atributo "path" del elemento <Route></Route> definido en el componente "Header.jsx" donde está pintado el menú */}
                </ul>
            </nav>
        </header>)
}

export default Header