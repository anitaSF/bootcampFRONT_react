import React, { useState } from 'react'
import Card from '../Card/Card';

// Componente formulario donde se ha creado la estructura html <form></form> que mostrará la información alojada en las variables creadas en el componente padre. Por ello el contenido de cada elemento html del formulario será la variable entre llaves {variable}.

// Estas propiedades por defecto van en forma de objeto bajo el nombre de props, por lo que para acceder a cada una de ellas se debería de llamar como {props.variable}. Para evitar las nomenclaturas complejas, se utiliza en destructuring.

// Destructuring: en el argumento de la function en vez de pasarle el objeto (props), se le pasan las variables/prop a utilizar en el html, entre llaves y separadas por comas ({variable1, variablw2, ...}). En el elemento html se pone igualmente entre llaves <p>{variable}</p>

// Con esto, las propiedades del objeto props que a su vez son objeto, se deben llamar en el argumento con el nombre del objeto completo, pero en el elemento html se llama {objeto.prop}.

function Register({ title, textMessage }) {

    // Variables de estado (useState): tipo de variable propia de React para trabajar en determinados tipos de componentes, por ejemplo formularios. Se define entre corchetes con el nombre de la variable y la función o método para activarla (setVariable): const [variable, setVariable] = useState(valor); si es objeto tendra dicha estructura: const [variable, setVariable] = useState({prop1: '', prop2: '', ...})
    const [user, setUser] = useState({
        email: '',
        name: '',
        surname: '',
        age: ''
    });

    // Funcion manejadora del evento, para recoger la información introducida en el formulario cada vez que se ejecuta el evento "onChange" aplicado sobre cada elemento html <input/>. Se debe pasar en el objeto del evento "onChange={handleInput}"
    // Las funciones que van a recibir información activada por un evento, se debe definir en el argumento (e) y para llamar a las propiedades se utiliza "e.target.prop"
    const handleInput = (e) => {
        const id = e.target.id; // Obtiene el "id" del input que cambio, es decir, que activo el evento "onChange"
        const value = e.target.value; // Obtiene el valor introducido por el usuario en ese input
        setUser({ ...user, [id]: value }); // Llama a la función "setUser" de la variable de estado "user" para recuperar su valor y modificarlo con los nuevos datos recogidos por el formulario.
        // Como primer valor del argumento de la función se pasa una copia de la variable de estado. Para ello, se ejecuta el método array ...variable (...user)
        // Como segundo valor del argumento de la función "setUser" se pasa el atributo del <input> que se relaciona cada propiedad del objeto "user" (en este caso [id]), y que ejecutará la función cuando se active el evento "onChange" porque un usuario ha introducido un valor. El valor recibido en el input se guarda en esta propiedad del objeto.
        // En este caso si se rellena el input Nombre con id='name', el valor se guardará en la propiedad name del objeto user (user.name)
    };

    const handleMode = (e) => {
        const id = e.target.id;
        if (id === 'dark') {
            setIsLight(false);
        } else {
            setIsLight(true);
        }
    }

    return (
        <div>
            <button id='light' onClick={{ handleMode }}>Claro</button>
            <button id='dark' onClick={{ handleMode }}>Oscuro</button>
            <h5>{title}</h5>

            <form action=''>
                <label htmlFor='email'>Email</label>
                {/* Cada elemento input recibe un evento onChange que ejecutará la función definida arriba y llamada en su objeto {handleInput}. Con esto se consigue ir guardando los datos introducidos en cada input en la variable objeto "user" creada para ello */}
                <input type='text' name='email' id='email' onChange={handleInput} />
                <label htmlFor='name'>Nombre</label>
                <input type='text' name='name' id='name' onChange={handleInput} />
                <label htmlFor='surname'>Apellidos</label>
                <input type='text' name='surname' id='surname' onChange={handleInput} />
                <label htmlFor='age'>Edad</label>
                <input type='number' name='age' id='age' onChange={handleInput} />
                <button>Retistrarse</button>


            </form>

            <p> {textMessage.msg} </p>

            <Card user={user} ></Card>
        </div>
    )
}

export default Register