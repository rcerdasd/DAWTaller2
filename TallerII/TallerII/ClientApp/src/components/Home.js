import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
            <h1 style={{ backgroundColor: "lightblue" }}>Taller 2</h1>
            <p><b>Estudiante:</b> Rolando Cerdas Delgado</p>
            <p><b>Profesor:</b> Esteban Pineda</p>
            <p><b>Curso:</b> Desarrollo de aplicaciones web</p>
            <p><b>Carrera:</b> Ing. Informática</p>
        </div>
    );
  }
}
