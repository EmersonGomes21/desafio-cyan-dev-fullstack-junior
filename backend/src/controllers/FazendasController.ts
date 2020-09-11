import knex from '../database/connection';
import crypto  from 'crypto'; 
import { Request, Response } from 'express';

class ClientsController {
  async show(request: Request, response: Response) {
    const { id } = request.params;
    const fazenda = await knex('fazendas').where('id', id).first();
    if (!fazenda) {
      return response.status(400).json({ message: 'Fazenda not found.' });
    }
    return response.json(fazenda);
  }

  async create(request: Request, response: Response) {
    const {
      name,
      safra_id

    } = request.body;

    const id = crypto.randomBytes(4).toString('hex');

    const fazenda = {
      id,
      name,
      safra_id

    }

    await knex('fazendas').insert(fazenda);

    return response.json({
      ...fazenda,
    });

  };

  async index(request: Request, response: Response) {
    const fazendas = await knex('fazendas').select('*');

    const serializedFazendas = fazendas.map((fazenda: {
      id: number; name: string; contact: string; safra_id: string;
    }) => {
      return {
        id: fazenda.id,
        name: fazenda.name,
        safra_id: fazenda.safra_id

      }
    })

    return response.json(serializedFazendas);
  };

};

export default ClientsController;
