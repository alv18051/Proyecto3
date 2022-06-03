/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './App.css';
import Header from './Header';
import Tarjeta from './Tarjetas';



function App(){
  return (

    <>
      <Header />
      <div className="body">

        <h1>Tecnologias</h1>
        <br></br>
        <br></br>
        <div className='info'>
          <div className='grid'>

            <Tarjeta titulo='HTML' img='https://i.imgur.com/IhIj8zM.png' descripcion='El comienzo de todo' link = 'http://54.82.50.125:3160/'/>
            <Tarjeta titulo='CSS' img='https://i.imgur.com/OoYNG5N.png' descripcion='Dibujando sin lapiz' link = 'http://54.82.50.125:8080/'/>
            <Tarjeta titulo='JS' img='https://i.imgur.com/u1GVMJB.png' descripcion='El chat a base de JS' link = 'http://54.82.50.125:2021/'/>
            <Tarjeta titulo='Webpack and Babel' img='https://i.imgur.com/e5tInBS.png' descripcion='Proyecto que incluye ambas tecnologias' link = 'https://github.com/alv18051/lab7_1'/>
            <Tarjeta titulo='React' img='https://i.imgur.com/YZIY5aG.png' descripcion='Juego de memoria utilizando React' link = 'http://54.82.50.125:2022/'/>
            <Tarjeta titulo='React' img='https://i.imgur.com/YZIY5aG.png' descripcion='Calculadora utilizando React' link = 'http://ec2-54-82-50-125.compute-1.amazonaws.com:8090/'/>
            <Tarjeta titulo='ESLint' img='https://i.imgur.com/4UQiDYF.png' descripcion='Proyecto estilizado con ESlint' link = 'https://github.com/alv18051/lab9_18051' />
            <Tarjeta titulo='Amplify Hosting' img='https://i.imgur.com/4rEW4wy.png' descripcion='Aplicacion hosteada en Amplify de AWS' link = 'https://release.dg9nmnuee5rem.amplifyapp.com/' />

          </div>
        </div>
      </div>

      <footer className="footer-section">
        <div className="footer-grid">
          <div className="footer-grid-elem">
            <h4>Universidad del Valle de Guatemala</h4>
            <span>Sistemas y Tecnologias web</span>
          </div>
          <div>
            <h4>Javier Alvarez</h4>
            <span>18051</span>
          </div>
          <div>
            <h4>Contactanos</h4>
            <span>alv18051@uvg.edu.gt</span>
          </div>
        </div>
      </footer>
      
    
    </>
    

    

  );}




export default App;