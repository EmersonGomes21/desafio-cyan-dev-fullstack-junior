import Knex from 'knex';

export async function seed(knex:Knex){

await knex('products').insert([
  {
  profile_img: 'lasanha-carne.jpg', 
  name: 'Lasanha de carne',
  category: 'Insumos',
  cust: 50,
  sale_Price: 200
     
},
{
  profile_img: 'lasanha-de-frango-3.jpeg', 
  name: 'Lasanha de carne',
  category: 'Insumos',
  cust: 40,
  sale_Price: 150
     
},
]);
}