function Product({ changeNewProduct }) {
    const handleInput = (e) => {
        changeNewProduct(e.target.id, e.target.value);
    }; // Función manejadora del evento "onChange". Cuando se modifica cualquier elemento html del <form></form> ejecuta el código: llama la función "changeNewProduct" creada en el elemento padre "App.jsx" para crear la copia del nuevo objeto y añadirlo al array original alojado en la variable "listProduct"

    return (
        <>
            {/* Formulario para introducir un nuevo producto. La estructura de input debe corresponder con las propiedades de los objetos (item) del array importado de la API.
            La variable de estado para alojar los datos introducidos, es un objeto y está definida en el componente padre "App.jsx" ya que es ahí donde esta la variable de estado que aloja la lista general de productos (listProduct) donde se debe añadir el nuevo item (objeto) */}
            <form action="" onChange={handleInput}>
                <fieldset>
                    <legend><strong>Añadir nuevo producto</strong></legend>
                    <div>
                        <label htmlFor="title">Nombre</label>
                        <input type="text" name="title" id="title" />
                    </div>
                    <div>
                        <label htmlFor="title">Precio</label>
                        <input type="number" name="price" id="price" />
                    </div>
                    <div>
                        <label htmlFor="category">Categoría</label>
                        <input type="text" name="category" id="category" />
                    </div>
                    <div>
                        <label htmlFor="image">Imagen</label>
                        <input type="text" name="image" id="image" />
                    </div>
                    <button>Añadir</button>
                    <button>Reset</button>
                </fieldset>
            </form>
        </>
    );
}

export default Product