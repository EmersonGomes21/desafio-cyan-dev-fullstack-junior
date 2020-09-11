import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo-white.svg';
import './styles.css';

const Login = () => {
  return (   
    <div className="page-login">
      <header>
        <img className="logo" src={logo} alt="logo Cyan" />
      </header>

       <form className="form-login">
         <fieldset className="fieldset-login">
        <label htmlFor="usuario" className="lb-usuario">usúario *</label>
         <input  type="text" className="input"/>
         
         <label htmlFor="senha" className="lb-usuario2">senha *</label>
         <input type="password" className="input2"/>

         <button className="btn-login">ENTRAR</button>

         <Link to="/cadastro">Não tenho cadastro</Link>

         </fieldset>
       </form>

    </div>



  )
}

export default Login;