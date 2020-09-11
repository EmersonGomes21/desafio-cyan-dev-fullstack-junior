import knex from '../database/connection';
import { Request, Response } from 'express';
import crypto from 'crypto';
class UsersController {
  async show(request: Request, response: Response){
  const { id } = request.params;
  const safra = await knex('safras').where('id', id).first();
  if (!safra){
    return response.status(400).json({ message: 'Safra not found.'});
  }
    return response.json(safra);
  }

  async create(request: Request, response: Response) {
    const {
     data_inicial,
     data_final
    } = request.body;


    const usina_id = request.headers.authorization;
    const id = crypto.randomBytes(4).toString('hex');

    const safra = 
      {
      id,
      data_inicial,
      data_final,
      usina_id
  
    }

     await knex('safras').insert(safra);
    return response.json({ 
      ...safra,
     });

  };  

  async index(request: Request, response: Response) {
    const safras = await knex('safras').select('*');

    const serializedSafras = safras.map((safra: {

      id: number; data_inicial: string; data_final: string; usina_id: string;
    }) => {
      return {
        id: safra.id,
        data_inicial: safra.data_inicial,
        data_final: safra.data_final,
        usina_id: safra.usina_id,

      }
    })

    return response.json(serializedSafras);
  };

};

export default UsersController;
