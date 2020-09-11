import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo-white.svg';

import './styles.css';

const Login = () => {
  return (
    <div className="page-login">
      <header>
        <img className="logo-cyan" src={logo} alt="logo Cyan" />
      </header>

       <form className="form-login">
         <fieldset className="fieldset-login">
        <label htmlFor="usuario" className="lb-usuario">Usúario *</label>
         <input  type="text" className="input"/>
         
         <label htmlFor="senha">Senha *</label>
         <input type="password" className="input"/>

         <button className="btn-login">ENTRAR</button>

         <Link to="/cadastro">Não tenho cadastro</Link>

         </fieldset>
       </form>

    </div>

  )
}

export default Login;