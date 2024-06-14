// Para utilizar un componente en otros diferentes, y con valores dinámicos (diferentes), no se le define un valor absoluto, sino una propiedad. 
// Para ello, en el argumento de la función se define que el componente va a recibir propiedades (props) y como valor del elemento html se define la variable {props.nombreProp}
// Estas propiedades configuran un array tipo objeto, de ahí que para llamarlas dentro del elemento html se utilice la nomenclatura props.nombreProp

function Button(props) {

    return (
        <button>{props.text}</button>
    )
}

export default Button // exportar componente para poder utilizarlo en otros