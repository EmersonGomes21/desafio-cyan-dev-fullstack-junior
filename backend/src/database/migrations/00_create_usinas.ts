import Knex from 'knex';

export async function up(knex: Knex){
  return knex.schema.createTable('usinas', table =>{
    table.string('id').primary();
    table.string('name').notNullable();
    
    table.string('user_id')
    .notNullable();

    table.foreign('user_id')
    .references('id')
    .inTable('users') 
    .onUpdate('CASCADE') //auto update ....
    .onDelete('CASCADE') //deleta as informações caso a usina seja excluida
    ;

  });

}

export async function down(knex: Knex){
  return knex.schema.dropTable('usinas');
}