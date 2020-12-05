import React, { Component } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

export class Usuario extends Component {
    static displayName = Usuario.name;

    constructor(props) {
        super(props);
        this.state = {
            usuarios: [], loading: true,
            modal: false,
            usuario: {
                cod_Usuario:'',
                nombre: '',
                pri_Ape: '',
                seg_Ape: '',
                login: '',
                pass: '',
                confirmar_Pass: '',
                telefono1: '',
                telefono2: '',
                admin_Seg: '',
                admin_Ad: ''
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeCodigo = this.handleChangeCodigo(this);
        this.abrirCerrarModal = this.abrirCerrarModal.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        console.log(name, ':', value);
        this.setState(preveState => ({
            usuario: {
                ...preveState.usuario, [name]: value
            }
        }));
    }

    handleChangeCodigo(e) {
        this.setState(preveState => ({
            usuario: {
                ...preveState.usuario, cod_Usuario: parseInt(e.target.value)
            }
        }));
    }

    abrirCerrarModal() {
        this.setState({
            modal: !this.state.modal
        })
    }

    componentDidMount() {
        this.populateUsuarios();
    }

    async crearUsuario() {
        console.log(this.state.usuario)
        await fetch('api/usuarios', {
            method: 'POST',
            body: JSON.stringify(this.state.usuario),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => {
                console.log(response.json());
            }).catch(error => console.log(error));

    }


    copyEmptyRow() {
        return Object.assign({}, Usuario.usuario);
    }

    toggleEditModal(rowData) {
        // If the method is called with row data, 'Edit' was clicked, we set the currentRow to it
        // If not, it means 'New' or 'Cancel' was clicked, so we set it to an empty row
        let currentRow = (rowData ? rowData : this.copyEmptyRow())
        this.setState({
            editModal: !this.state.editModal,
            currentRow: currentRow,
        })
    }

    toggleDeleteModal(rowData) {
        // If the method is called with row data, 'Edit' was clicked, we set the currentRow to it
        // If not, it means 'New' or 'Cancel' was clicked, so we set it to an empty row
        let currentRow = (rowData ? rowData : this.copyEmptyRow())
        this.setState({
            deleteModal: !this.state.deleteModal,
            currentRow: currentRow,
        })
    }


    static renderUserTable(user, objeto) {
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
                                <button className="btn btn-danger" onClick={() => objeto.abrirCerrarModal() }>Eliminar</button>
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
            : Usuario.renderUserTable(this.state.user,this);
        //not completed after modal
        return (
            <div>
                <h1 id="tabelLabel" >Usuarios</h1>
                <p>Lista de usuarios.</p>
                <button className="btn btn-primary" onClick={() => this.abrirCerrarModal()}>Nuevo</button>
                {contents}
                
                <Modal isOpen={this.state.modal}>
                    <ModalHeader>Crear Usuario</ModalHeader>
                    <ModalBody>
                        <div className="form-group">
                            <div className="form-group row">
                                <label for="codUsuario" className="col-sm-2 col-form-label">ID</label>
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        id="codUsuario"
                                        name="codUsuario"
                                        className="form-control"
                                        onChange={this.handleChangeCodigo}
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="primerApell" className="col-sm-2 col-form-label">Primer apellido</label>
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        id="primerApell"
                                        name="primerApell"
                                        className="form-control"
                                        onChange={this.handleChangeCodigo}
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="secApellido" className="col-sm-2 col-form-label">Segundo apellido</label>
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        id="secApellido"
                                        name="secApellido"
                                        className="form-control"
                                        onChange={this.handleChangeCodigo}
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="login" className="col-sm-2 col-form-label">Login</label>
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        id="login"
                                        name="login"
                                        className="form-control"
                                        onChange={this.handleChangeCodigo}
                                    /></div>
                            </div>
                            <div className="form-group row">
                                <label for="pass" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        id="pass"
                                        name="pass"
                                        className="form-control"
                                        onChange={this.handleChangeCodigo}
                                    /></div>
                            </div>
                            <div className="form-group row">
                                <label for="pass2" className="col-sm-2 col-form-label">Password2</label>
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        id="pass2"
                                        name="pass2"
                                        className="form-control"
                                        onChange={this.handleChangeCodigo}
                                    /></div>
                            </div>
                            <div className="form-group row">
                                <label for="tel" className="col-sm-2 col-form-label">Telefono</label>
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        id="tel"
                                        name="tel"
                                        className="form-control"
                                        onChange={this.handleChangeCodigo}
                                    /></div>
                            </div>
                            <div className="form-group row">
                                <label for="telefono" className="col-sm-2 col-form-label">Telefono 2</label>
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        id="telefono"
                                        name="telefono"
                                        className="form-control"
                                        onChange={this.handleChangeCodigo}
                                    /></div>
                            </div>                            
                            <div>
                                <button className="btn btn-success" onClick={() => this.crearUsuario()}>Guargar</button>
                                <button className="btn btn-dark" onClick={() => this.abrirCerrarModal()}>Cancelar</button>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter></ModalFooter>
                </Modal>
            </div>
        );
    }

    async populateUsuarios() {
        const response = await fetch('api/usuarios');
        const data = await response.json();
        this.setState({ user: data, loading: false });
    }
}
