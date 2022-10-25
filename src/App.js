import React, { Fragment, useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import ListaDeContactos from "./Components/ListaDeContactos";
import Form from "./Components/Form";


function App() {

    const [libreta, setlibreta] = useState({
        Nombres: '',
        Apellidos: '',
        CorreoElectronico: '',
        Edad: 0,
        Celular: '',
        Ciudad: '',
        Direccion: ''
    })


    const [libretas, setLibretas] = useState([])
    const [listUpdate, setUpdated] = useState(false)

    useEffect(() => {
        const getContactos = () => {

            fetch("http://localhost:9000/API/Contacts")
                .then(res => res.json())
                .then(res => setLibretas(res))
        }
        getContactos()

        setUpdated(false)

    }, [listUpdate])


    return (
        <Fragment>
            <Navbar brand='Libreta de contactos' />
            <div className="container">
                <div className="row">
                    <div className="col-15" >

                        <h2 style={{ textAlign: 'right' }}>Lista de contactos registrados </h2>

                        <ListaDeContactos libretas={libretas} libreta={libreta} setlibreta={setlibreta} setUpdated={setUpdated} />
                    </div>

                    <div className="col-15" >
                        <h2 style={{ textAlign: 'left' }}>Registrar contacto</h2>
                        <Form libreta={libreta} setLibreta={setlibreta} />
                    </div>

                </div>
            </div>
        </Fragment>
    );
}

export default App;