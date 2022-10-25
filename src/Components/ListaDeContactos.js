import React from "react";
import swal from 'sweetalert';

const ListaDeContactos = ({ libreta, setLibreta, libretas, setUpdated }) => {

    const handleDelete = id => {
        const requestInit = {

            method: 'DELETE'
        }

        fetch('http://localhost:9000/API/Contacts/' + id, requestInit)
            .then(res => res.text())
            .then(res => console.log(res))
        setUpdated(true)


    }

    let { Nombres, Apellidos,
        CorreoElectronico, Edad,
        Celular, Ciudad,
        Direccion } = libreta

    const handleUpdate = id => {

        if (Nombres === '' || Apellidos === '' ||
            CorreoElectronico === '' || Edad <= 0 ||
            Celular <= 0 || Ciudad === '' || Direccion === '') {
            swal(
                'Error',
                'Todos los campos deben estar llenos',
                'error')

            return
        }
        // CONSULTA 
        const requestInit = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(libreta)
        }
        fetch('http://localhost:9000/API/Contacts/' + id, requestInit)
            .then(res => res.text())
            .then(res => console.log(res))


        setLibreta({
            Nombres: '',
            Apellidos: '',
            CorreoElectronico: '',
            Edad: 0,
            Celular: '',
            Ciudad: '',
            Direccion: ''
        })

        setUpdated(true)

    }

    return (


        <table className="table" border="2" style={{
            fontSize: '15px',
            position: 'absolute',
            width: '300px',
            right: '100px',

        }}>
            <thead style={{ background: '#f7b8ff' }}>
                <tr >

                    <th style={{ border: "2px solid gray" }}>ID</th>
                    <th style={{ border: "2px solid gray" }}>Nombres</th>
                    <th style={{ border: "2px solid gray" }}>Apellidos</th>
                    <th style={{ border: "2px solid gray" }}>CorreoElectronico</th>
                    <th style={{ border: "2px solid gray" }}>Edad</th>
                    <th style={{ border: "2px solid gray" }}>Celular</th>
                    <th style={{ border: "2px solid gray" }}>Ciudad</th>
                    <th style={{ border: "2px solid gray" }}>Direccion</th>

                </tr>
            </thead>
            <tbody style={{ background: '#fff0ff' }} border="4">
                {libretas.map(libreta => (
                    <tr key={libreta.id} style={{ border: "2px solid gray" }}>
                        <td style={{ border: "2px solid gray" }}>{libreta.id}</td>
                        <td style={{ border: "2px solid gray" }}>{libreta.Nombres}</td>
                        <td style={{ border: "2px solid gray" }}>{libreta.Apellidos}</td>
                        <td style={{ border: "2px solid gray" }}>{libreta.CorreoElectronico}</td>
                        <td style={{ border: "2px solid gray" }}>{libreta.Edad}</td>
                        <td style={{ border: "2px solid gray" }}>{libreta.Celular}</td>
                        <td style={{ border: "2px solid gray" }}>{libreta.Ciudad}</td>
                        <td style={{ border: "2px solid gray" }}>{libreta.Direccion}</td>
                        <td>
                            <div className="mb-3" >
                                <button className="btn btn-primary" onClick={() => handleUpdate(libreta.id)}
                                    style={{
                                        background: '#0ca200',
                                        border: '0px',
                                        fontSize: '12px',
                                        position: 'relative',
                                        top: '10px',
                                        left: '1px',
                                        width: '100px',
                                    }}>Actualizar</button>
                            </div>
                            <div className="mb-3">
                                <button className="btn btn-primary" onClick={() => handleDelete(libreta.id)}
                                    style={{
                                        background: '#8e1300',
                                        border: '0px',
                                        fontSize: '12px',
                                        position: 'relative',
                                        top: '10px',
                                        left: '1px',
                                        width: '100px',
                                    }} >Eliminar</button>
                            </div>
                        </td>
                    </tr>

                ))}

            </tbody>
        </table>
    )
}

export default ListaDeContactos;