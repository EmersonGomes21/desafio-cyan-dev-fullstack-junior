import Knex from 'knex';

export async function up(knex: Knex){
  return knex.schema.createTable('users', table =>{
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('cnpj').notNullable();
    table.string('contato').notNullable();
    table.string('empresa').notNullable();
    table.string('endereco').notNullable();

  });

}

export async function down(knex: Knex){
  return knex.schema.dropTable('users');
}