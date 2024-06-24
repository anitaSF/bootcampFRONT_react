import React from 'react'

function Register() {
    return (
        <div>
            <form action=''>
                <label htmlFor='email'>Email</label>
                <input type="text" id='email' name='email' />
                <label htmlFor='pass'>Contraseña</label>
                <input type='password' name='pass' id='pass' />
                <button>Registrarme</button>

            </form>
        </div>
    )
}

export default Register