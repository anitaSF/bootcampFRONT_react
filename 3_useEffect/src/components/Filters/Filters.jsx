// Componente creado para pintar el buscador de la web. En su función recibe en su argumento como props la variable de estado setSearch, que a su vez será el atributo dado al elemento html que se importará en el elemnto padre "App.jsx"

function Filters({ setSearch }) {


    const handleInput = (e) => {
        setSearch(e.target.value);
    }
    // Función manejadora del evento onChange. Como argumento recibe el evento y como código a ejecutar se llama a la función de la variable de estado "setSearch" (definida en el componente padre App.jsx donde se importará este componente) para alojar en esta el valor recogido por el evento en el <input> del formulario

    return (
        <form action="">
            <label htmlFor="search">Indica nombre</label>
            <input type="text" id="search" name="search" onChange={handleInput} />
            {/* Evento aplicado sobre el elemento <input> para que cuando se aplique un cambio (el usuario introduzca un valor) se active su función manejadora "handleInput" */}
        </form>
    )
}

export default Filters