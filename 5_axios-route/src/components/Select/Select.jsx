
function Select({ setHouse }) {
    const handleSelect = (e) => {
        setHouse(e.target.value);
    }; // Función manejadora del evento onChange aplicado sobre el elemento html <select></select> que se activa cuando este detecta un cambio, y pasa el nuevo valor introducido por el usuario a la variable de estado "house" definida en el componente padre "App.jsx"
    // Para ello se pasa como props la función de esta variable de estado "setHouse" que será a su vez definida como atributo de este elemento html al importarlo en el componente padre App.jsx <Select setHouse="{setHouse} /> "

    // Formulario con elemento <select></select> creado para seleccionar la casa de la que se tienen que mostrar los personajes. 
    // Se define el evento "onChange" que llama a su función manejadora "handleSelect" para que pase el valor seleccionado por el usuario a la variable de estado "house" definida en el componente padre "App.jsx", y de esta manera muestre los personajes de esa casa. />
    return (
        <div>
            <form>
                <label htmlFor="houses">Selecciona tu casa</label>
                <select name="houses" id="houses" onChange={handleSelect}>
                    <option value=''> Seleccione</option>
                    <option value='Gryffindor'>Gryffindor</option>

                </select>
            </form>
        </div>
    )
}

export default Select