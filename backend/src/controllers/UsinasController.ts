import knex from '../database/connection';
import { Request, Response } from 'express';
import crypto from 'crypto';

class UsinasController {
  async show(request: Request, response: Response) {

    const { id } = request.params;

    const usina = await knex('usinas').where('id', id).first();
    if (!usina) {
      return response.status(400).json({ message: 'usina not found.' });
    }
    return response.json(usina);
  }

  async create(request: Request, response: Response) {
    const {
      name,
    } = request.body;

    const id = crypto.randomBytes(4).toString('hex');

    const usina = {
      name,
      id
    }

    await knex('usinas').insert(usina);


    return response.json({
      ...usina,
    });

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

export default UsinasController;
