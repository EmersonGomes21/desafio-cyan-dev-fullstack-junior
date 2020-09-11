import Knex from 'knex';
export async function up(knex: Knex){
  return knex.schema.createTable('campos', table =>{
    table.string('id').primary();
    table.decimal('latitude').notNullable();
    table.decimal('longitude').notNullable();
   
    table.string('fazenda_id')
    .notNullable();
    
    table.foreign('fazenda_id')
    .references('id')
    .inTable('fazendas') 
    .onUpdate('CASCADE') //auto update ....
    .onDelete('CASCADE') //deleta as informações caso a fazenda seja excluida
    ;
  });
}

export async function down(knex: Knex){
  return knex.schema.dropTable('campos');
}