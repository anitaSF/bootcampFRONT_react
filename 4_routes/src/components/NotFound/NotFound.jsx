import { Link } from "react-router-dom"

function NotFound() {
    return (
        <div>
            <h2>La página que buscas no existe</h2>
            <Link to="/">Volver al Inicio</Link>
        </div>
    )
}

export default NotFound