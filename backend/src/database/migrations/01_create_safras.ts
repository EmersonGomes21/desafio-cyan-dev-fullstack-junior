import Knex from 'knex';
export async function up(knex: Knex){
  return knex.schema.createTable('safras', table =>{
    table.string('id').primary();
    table.string('data_inicial').notNullable();
    table.string('data_final').notNullable();

    table.string('usina_id')
    .notNullable();

    table.foreign('usina_id')
    .references('id')
    .inTable('usinas') 
    .onUpdate('CASCADE') //auto update ....
    .onDelete('CASCADE') //deleta as informações caso a usina seja excluida
    ;
  });
}

export async function down(knex: Knex){
  return knex.schema.dropTable('safras');
}