
import { Link, useParams } from "react-router-dom";

function CharacterDetail({ listCharacter }) {
    const { idCharacter } = useParams(); // Variable para alojar la ruta de cada item. Para obtenerla, se aplica el hook de React "useParams()" que permite acceder desde un componente a los parámetros dinámicos de la URL (variará para cada item del array "listCharacter")

    const findCharacter = listCharacter.find((character) => character.id === idCharacter); // variable para alojar el item obtenido tras ejecutar el método .find sobre el array de la variable de estado "listCharacter". Este método busca el item del array cuya propiedad "id" 

    return (
        <div>
            {/* Condicional definida con operador ternario para pintar el contenido del item seleccionado si existe (findCharacter ? (contenido a mostrar)), y sino, no pasa nada (null). Esta condicional se aplica para evitar que la página de error si la respuesta de la API tarda más que en cargarse el contenido */}
            {findCharacter ? (
                <>
                    <h2>Detalle del personaje</h2>
                    <img src={findCharacter.image} />
                    <h3>{findCharacter.name}</h3>
                    <h4>Género: {findCharacter.gender === 'female' ? '💃' : '🕺'}</h4>
                    {/* Se llama a cada propiedad del item renderizado en el componente creado "CharacterDetail" a través de la variable "findCharacter" definida para alojar al item cuyo id se corresponde con la URL clicada */}
                </>
            ) : null}

            <Link to={'/'}>Volver a Inicio </Link>
        </div>
    )
}

export default CharacterDetail