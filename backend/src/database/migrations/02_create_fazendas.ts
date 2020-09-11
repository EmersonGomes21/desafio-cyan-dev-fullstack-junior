import Knex from 'knex';
export async function up(knex: Knex){
  return knex.schema.createTable('fazendas', table =>{
    table.string('id').primary();
    table.string('name').notNullable();

    table.string('safra_id')
    .notNullable()
    
    table.foreign('safra_id')
    .references('id')
    .inTable('safras') 
    .onUpdate('CASCADE') //auto update ....
    .onDelete('CASCADE') //deleta as informações caso a safra seja excluida
    ;

  });
}

export async function down(knex: Knex){
  return knex.schema.dropTable('fazendas');
}