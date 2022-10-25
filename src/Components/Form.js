import React from "react";
import swal from 'sweetalert';

const Form = ({ libreta, setLibreta }) => {

    const handleChange = e => {
        setLibreta({
            ...libreta,
            [e.target.name]: e.target.value

        })
    }

    let { Nombres, Apellidos,
        CorreoElectronico, Edad,
        Celular, Ciudad,
        Direccion } = libreta

    const handleSubmit = () => {

        if (Nombres === '' || Apellidos === '' ||
            CorreoElectronico === '' || Edad <= 0 ||
            Celular <= 0 || Ciudad === '' || Direccion === '') {
            swal(
                'Error',
                'Todos los campos deben estar llenos',
                'error')

            return
        }

        // Consultar datos
        const requestInit = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(libreta)
        }
        fetch('http://localhost:9000/API/Contacts/', requestInit)
            .then(res => res.text())
            .then(res => console.log(res))

        // Resetear campos
        setLibreta({
            Nombres: '',
            Apellidos: '',
            CorreoElectronico: '',
            Edad: 0,
            Celular: '',
            Ciudad: '',
            Direccion: ''
        })


    }


    return (

        <form onSubmit={handleSubmit} style={{
            fontSize: '18px',
            position: 'absolute',
            width: '800px',
            left: '100px',





        }}>
            <div className="row" >
                <div className="col">

                    <div className="form-outline" style={{
                        fontSize: '18px',
                        position: 'relative',




                    }}>
                        <label htmlFor="nombres" className="form-label">Nombres</label>
                        <input value={Nombres} name="Nombres"
                            onChange={handleChange} type="text"
                            id="Nombres" className="form-control" />
                    </div>
                </div>
                <div className="col">
                    <div className="form-outline" style={{
                        fontSize: '18px',
                        position: 'relative',



                    }}>
                        <label htmlFor="apellidos" className="form-label">Apellidos</label>
                        <input value={Apellidos} name="Apellidos"
                            onChange={handleChange} type="text"
                            id="Apellidos" className="form-control" />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col">

                    <div className="form-outline" style={{
                        fontSize: '18px',
                        position: 'relative',
                        top: '10px',


                    }}>
                        <label htmlFor="correoelectronico" className="form-label">Correo Electronico</label>
                        <input value={CorreoElectronico} name="CorreoElectronico"
                            onChange={handleChange} type="email"
                            id="CorreoElectronico" className="form-control" />
                    </div>
                </div>


                <div className="col">
                    <div className="form-outline" style={{
                        fontSize: '18px',
                        position: 'relative',
                        top: '10px',


                    }}>
                        <label htmlFor="edad" className="form-label">Edad</label>
                        <input value={Edad} name="Edad"
                            onChange={handleChange} type="number"
                            id="Edad" className="form-control" />
                    </div>
                </div>
                <div className="col">
                    <div className="form-outline" style={{
                        fontSize: '18px',
                        position: 'relative',
                        top: '10px',



                    }}>
                        <label htmlFor="celular" className="form-label">Celular</label>
                        <input value={Celular} name="Celular"
                            onChange={handleChange} type="text"
                            id="Celular" className="form-control" />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col">

                    <div className="form-outline" style={{
                        fontSize: '18px',
                        position: 'relative',
                        top: '15px',


                    }}>
                        <label htmlFor="city" className="form-label">Ciudad</label>
                        <input value={Ciudad} name="Ciudad"
                            onChange={handleChange} type="text"
                            id="Ciudad" className="form-control" />
                    </div>
                </div>

                <div className="col">

                    <div className="form-outline" style={{
                        fontSize: '18px',
                        position: 'relative',
                        top: '15px',


                    }}>
                        <label htmlFor="direccion" className="form-label">Direccion</label>
                        <input value={Direccion} name="Direccion"
                            onChange={handleChange} type="text"
                            id="Direccion" className="form-control" />
                    </div>
                </div>
            </div>


            <button type="submit" className="btn btn-primary" style={{
                fontSize: '18px',
                position: 'relative',
                top: '40px',
                width: '200px',

            }}>Registrar</button>



        </form>
    );
}

export default Form;

