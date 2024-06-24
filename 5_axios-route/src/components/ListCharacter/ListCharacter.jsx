import CharacterCard from "../CharacterCard/CharacterCard";

function ListCharacter({ listCharacter }) {
    return (
        <section>
            {/* Método .map aplicado sobre el array de datos importado de la API y alojado en la variable de estado "listCharacter" para obtener las diferentes propiedades de cada item y utilizarlas para renderizar el componente <CharacterCard /> donde está pintada la estructura html que define los datos (propiedades) que se muestran de cada personaje (item).
            Para pasar estos datos se define al elemento html el atributo "char={char}" que se pasará como props a la función del componente "CharacterCard" */}
            {listCharacter.map((char) => (
                <CharacterCard char={char} key={char.id} />
            ))}
        </section>
    );
}

export default ListCharacter;