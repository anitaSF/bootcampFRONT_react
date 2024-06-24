import { Link } from 'react-router-dom';
import './characterCard.scss';

function CharacterCard({ char }) {
    // Los datos se pasan a este componente desde el componente padre "ListCharacter" mediante las props ({char}) definidas como atributo del elemento html <CharacterCard /> pintado en su interior

    const img = char.image ? char.image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQR8-20v9bcVOLzJOqtivzfeIf8oyFdPQs8byFV-dO4v285zI7Oudp-Pmp_-qD4G5-g8o&usqp=CAU'; // funcion creada para definir el valor del atributo src del elemento img. Ejecuta un condicional para que si la propiedad "image" del objeto está vacía, adquiera un valor por defecto (mostrará la misma imagen en todos los item que no tengan esta propiedad)

    return (
        <article className='card'>
            {/* Enlace con ruta dinámica. EL parámetro que determina que item/personaje se muestra en el componente "CharacterDetail" está definido por la propiedad id. Para ello se añade a la ruta el endpoint con esta información ${char.id} */}
            <Link to={`/detail/${char.id}`} >
                <img src={img} alt='' />
                <h4>{char.name}</h4>
            </Link>
        </article>
    )
}

export default CharacterCard