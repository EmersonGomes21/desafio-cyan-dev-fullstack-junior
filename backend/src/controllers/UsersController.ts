import knex from '../database/connection';
import { Request, Response } from 'express';
import crypto from 'crypto';

class UsersController {

  async create(request: Request, response: Response) {
    const {
      name,
      cnpj,
      contato,
      empresa,
      endereco,
      senha

    } = request.body;

    const id = crypto.randomBytes(4).toString('hex');
    const user = {
      id,
      name,
      cnpj,
      contato,
      empresa,
      endereco
    }

    const users = await knex('users').insert(user);
    const id_login = crypto.randomBytes(3).toString('hex');
    const login = name + id_login;
    const user_login_id = user.id;

    const acesso = {
      login,
      senha,
      user_login_id

    }
    
    await knex('logins').insert(acesso);

    return response.json({
      ...user,
      ...acesso
    });

  };

  async login(request: Request, response: Response) {
    const {
      login,
      senha
    } = request.body;
    const logins = {
      login,
      senha
    }
    const selectLogins = await knex('logins').select('*').where({ 'login': logins.login, 'senha': logins.senha });
    const serializedLogin = selectLogins.map((selectLogin: { login: string; senha: string;
    }) => {
      return {
        login : selectLogin.login,
        senha: selectLogin.senha
      }
    })
    const loginReq = logins.login;
    const senhaReq = logins.senha;
    
    const LoginBd = serializedLogin;
    
    if (selectLogins == '') {
      return response.status(406).json({ LOGIN: false, loginReq, senhaReq });
     
    } else {
      return response.status(200).json({ LOGIN : true, LoginBd });
    }
  };

  async index(request: Request, response: Response) {

    const usinas = await knex('usinas').select('*');
    const serializedUsinas = usinas.map((usina: {
      name: string; id: number;
    }) => {
      return {
        id: usina.id,
        name: usina.name,
      }
    })

    return response.json(serializedUsinas);
  };

};

export default UsersController;
