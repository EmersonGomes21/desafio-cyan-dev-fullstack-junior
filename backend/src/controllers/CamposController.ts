import knex from '../database/connection';
import crypto from 'crypto';

import { Request, Response } from 'express'
class ClientsController {
  async show(request: Request, response: Response){
  const { id } = request.params;
  const user = await knex('clients').where('id', id).first();
  if (!user){
    return response.status(400).json({ message: 'Provider not found.'});
  }
    return response.json(user);
  }

  async create(request: Request, response: Response) {
    const {
      latitude,
      longitude
    } = request.body;

    
    const id = crypto.randomBytes(4).toString('hex');
    
    const fazenda_id = request.headers.fazenda_id;

    const campo = {
      id,
      latitude,
      longitude,
      fazenda_id
    }
    await knex('campos').insert(campo);

    return response.json({ 
      ...campo,
     });

  };  

  async index(request: Request, response: Response) {
    const providers = await knex('providers').select('*');

    const serializedProviders = providers.map((provider: {
      profile_img: string;
      id: number; name: string; contact: string; telephone: string; address: string;
    }) => {
      return {
        id: provider.id,
        profile_img: provider.profile_img,
        profile_img_url: `http://localhost:3333/uploads/img_providers/${provider.profile_img}`,
        name: provider.name,
        contact: provider.contact,
        telephone: provider.telephone,
        address: provider.address,

      }
    })

    return response.json(serializedProviders);
  };

};

export default ClientsController;
