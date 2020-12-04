import React, { Component } from 'react';

export class Usuario extends Component {
    static displayName = Usuario.name;

    constructor(props) {
        super(props);
        this.state = { usuarios: [], loading: true };
    }

    componentDidMount() {
        this.populateUsuarios();
    }

    static renderUserTable(user) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido 1</th>
                        <th>Apellido 1</th>
                        <th>Login</th>
                        <th>Pass</th>
                        <th>Pass 2</th>
                        <th>Tel 1</th>
                        <th>Tel 2</th>
                        <th>Admin Seg</th>
                        <th>Admin ad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map(user =>
                        <tr key={user.cod_Usuario}>
                            <td>{user.cod_Usuario}</td>
                            <td>{user.nombre}</td>
                            <td>{user.pri_Ape}</td>
                            <td>{user.seg_Ape}</td>
                            <td>{user.login}</td>
                            <td>{user.pass}</td>
                            <td>{user.confirmar_Pass}</td>
                            <td>{user.telefono1}</td>
                            <td>{user.telefono2}</td>
                            <td>{'' + user.admin_Seg}</td>
                            <td>{'' + user.admin_Ad}</td>
                            <td>
                                <button className="btn btn-success">Editar</button>
                                <button className="btn btn-danger">Eliminar</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Usuario.renderUserTable(this.state.user);

        return (
            <div>
                <h1 id="tabelLabel" >Usuarios</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }

    async populateUsuarios() {
        const response = await fetch('api/usuarios');
        const data = await response.json();
        this.setState({ user: data, loading: false });
    }
}
